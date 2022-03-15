import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { TextInput, Text, RefreshControl, Pressable, FlatList, View, Keyboard, Modal } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as Network from 'expo-network';
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';
import * as DummyWorkOrderList from '../../../Templates/Dummy/DummyWorkOrderList.json';
import DummyDataspies from '../../../Templates/Dummy/DummyDataspies.json';
import SelectDropdown from 'react-native-select-dropdown';
import CreateWorkOrderModal from '../WOLSubComponents/CreateWorkOrderModal';
import WorkOrderListItem from '../WOLSubComponents/WorkOrderListItem';
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";


const BACKGROUND_FETCH_TASK = 'createWorkOrder';
const storage = new Storage();

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    console.log("Running async task")
    return BackgroundFetch.BackgroundFetchResult.NewData;
});

const createWorkOrders = async () => {
    let host = await storage.getArticle('usableHost');
    let token = await storage.getArticle('token');

    if (host != null && host != undefined) {
        let url = host + "/mobile/workOrder?token=" + token;

        let createdWorkOrders = await storage.getObject('createdWorkOrders');

        if (createdWorkOrders != null && createdWorkOrders != undefined && createdWorkOrders.length > 0) {
            for (let index = 0; index < createdWorkOrders.length; index++) {
                const element = createdWorkOrders[index];

                fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(element)
                }).then((response) => {
                    console.log(response.status);
                    if (response.status == 200) {
                        console.log(createdWorkOrders);
                        if (createWorkOrders.splice != undefined) createWorkOrders.splice(index, 1);
                        console.log(createdWorkOrders);
                        response.text().then((text) => { console.log(text) });
                    }
                })
            }
            if (createdWorkOrders != null && createdWorkOrders != undefined) storage.saveObject('createdWorkOrders', createdWorkOrders);
            else storage.removeArticle('createdWorkOrders');
        } else {
            console.log("Did not pass verification");
            console.log(createdWorkOrders + " : " + createdWorkOrders.length);
        }

    }
}

export default function HomeScreen({ navigation }) {
    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const { colors } = useTheme();

    const [dataspies, setDataspies] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [dataspy, setDataspy] = useState("");
    const [respData, setData] = useState({ currentDataspy: { id: "", name: "" }, workOrderList: [] });
    const [originalData, setOriginalData] = useState({ currentDataspy: { id: "", name: "" }, workOrderList: [] });
    const [searchData, setSearchData] = useState({ currentDataspy: { id: "", name: "" }, workOrderList: [] });
    const [modalVisible, setModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [createModalVisible, setCreatereateModalVisible] = useState(false);
    const [response, setResponse] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [assets, setAssets] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [positions, setPositions] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [systems, setSystems] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [status, setStatus] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [organizations, setOrganizations] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [types, setTypes] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [departments, setDepartments] = useState([{ code: "", organization: "", description: "", status: "", department: "" }]);
    const [userGroup, setUserGroup] = useState('');
    const [user, setUser] = useState('');
    const searchInput = useRef();

    let search = []

    const findWorkOrders = async (data, term) => {
        search = []
        data.forEach(element => {
            if (String(element.equipment).toLowerCase().includes(String(term).toLowerCase())
                || String(element.department).toLowerCase().includes(String(term).toLowerCase())
                || String(element.workOrderCode).toLowerCase().includes(String(term).toLowerCase())
                || String(element.scheduledStartDate).toLowerCase().includes(String(term).toLowerCase())
                || String(element.organization).toLowerCase().includes(String(term).toLowerCase())
                || String(element.workOrderStatusDescription).toLowerCase().includes(String(term).toLowerCase())
                || String(element.description).toLowerCase().includes(String(term).toLowerCase())
                || String(element.dueDate).toLowerCase().includes(String(term).toLowerCase())
            ) {
                let found = {
                    id: element.id,
                    workOrderCode: element.workOrderCode,
                    description: element.description,
                    equipment: element.equipment,
                    department: element.department,
                    workOrderStatusDescription: element.workOrderStatusDescription,
                    scheduledStartDate: element.scheduledStartDate,
                    organization: element.organization,
                    dueDate: element.dueDate,
                }
                search.push(found)
            }
        });
        setSearchData(search)
    }

    const focusOut = () => {
        Keyboard.dismiss();
        setModalVisible(false);
    }

    async function getWorkOrderList(update, id) {

        let networkState = await Network.getNetworkStateAsync();
        let dataSpy = dataspy;

        if (id != null && id != undefined) dataSpy = id; else if (dataspy != null && dataspy != undefined) dataSpy = dataspy; else dataSpy = '';

        let key = 'workOrderList:' + dataSpy;
        let workOrderList = await storage.getObject(key);
        let createdWorkOrders = await storage.getObject('createdWorkOrders');
        if (createdWorkOrders != null && createdWorkOrders != undefined && createdWorkOrders.length > 0 && workOrderList != null && workOrderList != undefined) workOrderList.workOrderList = workOrderList.workOrderList.concat(createdWorkOrders);

        if ((!networkState.isConnected || !update) && workOrderList != null && workOrderList != undefined) {
            setData(workOrderList);
            setSearchData(workOrderList);
            setOriginalData(workOrderList)
            setRefreshing(false);
            let originalDataspy = originalData.currentDataspy.id == undefined ? "" : originalData.currentDataspy.id;
            if (dataSpy == '') storage.saveObject('workOrderList:' + originalDataspy, workOrderList);
            return workOrderList;
        }

        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        if (host != null && host != undefined) {
            setRefreshing(true);

            let xhr = new XMLHttpRequest();
            xhr.timeout = 120000;
            xhr.ontimeout = () => {
                xhr.abort;
                setErrorModalVisible(true);
                setModalTitle(language.login.modal.timedOut.title);
                setResponse(language.login.modal.timedOut.response);
                setButtonText(language.login.modal.timedOut.button);
                setRefreshing(false);
            }

            let url = host + '/mobile/workOrderGrid?token=' + token + '&dataspy=' + dataSpy;
            xhr.open("GET", url);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    let jsonData = { currentDataspy: { id: "", name: "" }, workOrderList: [] };
                    if (xhr.responseText != null && xhr.responseText != undefined) { jsonData = JSON.parse(xhr.responseText); }
                    for (let index = 0; index < jsonData.length; index++) {
                        const element = jsonData[index];
                        if (element.scheduledStartDate == '') {
                            element.scheduledStartDate = language.list.notDefined;
                        }
                        if (element.dueDate == '') {
                            element.dueDate = language.list.notDefined;
                        }
                        if (element.reportedBy == '') {
                            element.reportedBy = language.list.notDefined;
                        }
                        jsonData[index] = element;
                    }
                    if (xhr.status == 200) {
                        if (createdWorkOrders != null && createdWorkOrders != undefined && createdWorkOrders.length > 0) jsonData.workOrderList = jsonData.workOrderList.concat(createdWorkOrders);
                        setData(jsonData);
                        setSearchData(jsonData);
                        setOriginalData(jsonData);
                        storage.saveObject('workOrderList:' + jsonData.currentDataspy.id, jsonData);
                        setDataspy(jsonData.currentDataspy.id);
                        setRefreshing(false);
                        return jsonData;
                    } else if (workOrderList != null) {
                        setData(workOrderList);
                        setSearchData(workOrderList);
                        setOriginalData(workOrderList);
                        setRefreshing(false);
                        return workOrderList;
                    } else {
                        setErrorModalVisible(true);
                        setModalTitle(language.login.modal.connectionError.title);
                        setResponse(jsonData);
                        setButtonText(language.login.modal.connectionError.button);
                        setRefreshing(false);
                    }
                }
            };

            xhr.send();
        } else {
            setData(DummyWorkOrderList);
            setSearchData(DummyWorkOrderList);
            setOriginalData(DummyWorkOrderList);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getWorkOrderList(true, dataspy).then(() => setRefreshing(false));
    }, []);

    async function getWorkOrder(woCode, woOrganization) {
        let key = woCode + " : " + woOrganization;

        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        let url = host + '/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + woCode + '&organization=' + woOrganization;
        if (host != null && host != undefined) fetch(url).then(response => response.json()).then((data) => { storage.saveObject(key, data); })
    }

    useEffect(async () => {

        let networkState = await Network.getNetworkStateAsync();
        let date = await storage.getObject('today');
        let dataspies = await storage.getObject('dataspies');
        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        if (dataspies != null && dataspies != undefined) setDataspies(dataspies);
        else if (host != null && host != undefined) fetch(host + '/mobile/dataSpies?token=' + token).then(response => response.json()).then((data) => { storage.saveObject("dataspies", data); setDataspies(data); });
        else { setDataspies(DummyDataspies); }

        if (networkState.isConnected && networkState.type.includes('WIFI') && new Date().getDate() != date && host != null && host != undefined) {
            getWorkOrderList(true);
            storage.saveObject('today', new Date().getDate());
        } else {
            getWorkOrderList(false);
        }

        storage.getArticle('organization').then((userGroup) => { setUserGroup(userGroup) });
        storage.getArticle('username').then((user) => { setUser(user) });

    }, [])

    const updateCreatedWOIds = (WOL,createdWorkOrders) => {
        let wolLength = WOL.workOrderList.length;

        for (let index = 0; index < createdWorkOrders.length; index++) {
            const element = createdWorkOrders[index];

            element.id = wolLength + index + 1;
        }

        WOL.workOrderList.concat(createdWorkOrders);
        storage.saveObject('workOrderList:' + dataspy, WOL);
    }

    const addNewWorkOrders = async (requestObject) => {
        originalData.workOrderList.push(requestObject);
        setOriginalData(originalData);
        let createdWorkOrders = await storage.getObject('createdWorkOrders');

        if (createdWorkOrders != null && createdWorkOrders != undefined) {
            createdWorkOrders.push(requestObject);
            storage.saveObject('createdWorkOrders', createdWorkOrders);
            storage.getObject('workOrderList:' + dataspy).then((WOL) => {
                updateCreatedWOIds(WOL, createdWorkOrders);
            })
        } else {
            storage.saveObject('createdWorkOrders', [requestObject]);
            storage.getObject('workOrderList:' + dataspy).then((WOL) => {
                updateCreatedWOIds(WOL, [requestObject]);
            })
        }
    }

    const renderOverlay = (render) => {
        if (render) return (
            <>
                <Pressable style={{ position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "92%", top: 82 }} onPress={() => { focusOut() }} >
                    <FlatList keyboardShouldPersistTaps='handled' data={searchData} renderItem={({ item }) =>
                        <>
                            <WorkOrderListItem item={item} onPress={() => { storage.saveObject('selectedItem', item); getWorkOrder(item.workOrderCode, item.description); let selectedItem = item; navigation.navigate('Ordem de Serviço', { selectedItem }); }} />
                        </>
                    } />
                </Pressable>
            </>
        );
        else if (!render) return (<></>);
    }

    return (
        <>
            <View style={{ borderRadius: 20, padding: 12.5, backgroundColor: colors.card, marginTop: 30, alignContent: "center", alignItems: "flex-start" }}>
                <TextInput style={{ color: colors.text, fontSize: 17, width: "100%" }} placeholder={language.list.filter} placeholderTextColor="gray" onChangeText={term => { setSearchTerm(term); findWorkOrders(originalData.workOrderList, term) }} onSubmitEditing={() => { findWorkOrders(originalData.workOrderList, searchTerm); setData(searchData); focusOut() }} onFocus={() => { findWorkOrders(originalData.workOrderList, searchTerm); setModalVisible(true); }} ref={searchInput} returnKeyType="done" />
            </View>

            <View style={{ borderRadius: 25, position: "absolute", top: 36, right: 25 }}>
                <SelectDropdown data={dataspies} defaultButtonText={originalData.currentDataspy.name == undefined ? "" : originalData.currentDataspy.name}
                    dropdownBackgroundColor={colors.card}
                    dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                    rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                    rowTextStyle={{ color: colors.text, fontSize: 14 }}
                    buttonStyle={{ backgroundColor: colors.card, borderLeftWidth: 1, borderLeftColor: colors.border, height: 40 }}
                    buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "left", fontSize: 14 }}
                    onSelect={(selectedItem) => { setDataspy(selectedItem.id); getWorkOrderList(false, selectedItem.id); }}
                    buttonTextAfterSelection={(selectedItem) => { return selectedItem.name }} rowTextForSelection={(item) => { return item.name }} />
                <Pressable style={{ borderRadius: 25, padding: 2, width: 40, height: 40, backgroundColor: colors.background, top: -40, right: -185 }} onPress={() => { getWorkOrderList(true, dataspy); focusOut() }} >
                    <Icon name="search" style={{ color: colors.text, fontSize: 18, marginLeft: 2, padding: 8 }} color={colors.text} />
                </Pressable>
            </View>

            <Modal animationType="fade" statusBarTranslucent={true} transparent={true} visible={errorModalVisible}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                    <View style={{ margin: 20, backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
                        <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{modalTitle}</Text>
                        <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{response}</Text>
                        <Pressable style={{ borderRadius: 20, padding: 8, elevation: 2, backgroundColor: "#2196F3" }} onPress={() => { setErrorModalVisible(false); }} >
                            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{buttonText}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <FlatList data={respData.workOrderList} refreshControl={<RefreshControl progressViewOffset={-55} refreshing={refreshing} onRefresh={onRefresh} />} renderItem={({ item }) =>
                <WorkOrderListItem item={item} onPress={() => { storage.saveObject('selectedItem', item); getWorkOrder(item.workOrderCode, item.organization); let selectedItem = item; navigation.navigate('Ordem de Serviço', { selectedItem }); }} />
            } />

            <Pressable style={{ borderRadius: 25, padding: 2, width: 45, height: 45, backgroundColor: colors.complementary4, borderColor: colors.inverted, borderWidth: 1, alignSelf: "center", alignItems: "center", justifyContent: "center", position: "absolute", bottom: 15 }} onPress={() => { setCreatereateModalVisible(true); storage.getObject('assets').then((assets) => setAssets(assets)); storage.getObject('positions').then((positions) => { setPositions(positions) }); storage.getObject('systems').then((systems) => { setSystems(systems) }); storage.getObject('organizations').then((organizations) => { setOrganizations(organizations) }); storage.getObject('departments').then((departments) => { setDepartments(departments) }); storage.getObject('statusAuth').then((status) => { setStatus(status) }); storage.getArticle('organization').then((userGroup) => { setUserGroup(userGroup) }); }} >
                <AntIcon name="plus" style={{ color: colors.background, fontSize: 30 }} />
            </Pressable>

            <CreateWorkOrderModal status={status} user={user} userGroup={userGroup} organizations={organizations} assets={assets} positions={positions} systems={systems} departments={departments} types={types} visible={createModalVisible} onRequestClose={() => { setCreatereateModalVisible(false) }} onCreateWorkOrder={async (requestObject) => { addNewWorkOrders(requestObject); createWorkOrders(); }} />
            {renderOverlay(modalVisible)}
        </>
    );
}