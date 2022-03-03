import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { TextInput, Text, RefreshControl, Pressable, FlatList, View, Keyboard, Modal } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as Network from 'expo-network';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';
import SelectDropdown from 'react-native-select-dropdown';

export default function HomeScreen({ navigation }) {
    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const { colors } = useTheme();

    const countries = [
        {
            "id": 108128,
            "name": "Cópia de Todas as ordens de se"
        },
        {
            "id": 94,
            "name": "Minhas ordens de serviço abertas"
        },
        {
            "id": 2005,
            "name": "Todas as ordens de serviço"
        }
    ];
    const [refreshing, setRefreshing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [dataspy, setDataspy] = useState("");
    const [respData, setData] = useState(JSON.parse('{}'));
    const [originalData, setOriginalData] = useState(JSON.parse('{}'));
    const [searchData, setSearchData] = useState(JSON.parse('{}'));
    const [workOrderData, setWorkOrderData] = useState(JSON.parse('{}'));
    const [modalVisible, setModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [response, setResponse] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const searchInput = useRef();
    const storage = new Storage();

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

    const focusIn = () => {
        setModalVisible(true);
    }

    const focusOut = () => {
        Keyboard.dismiss();
        setModalVisible(false);
    }

    const renderOverlay = (render) => {
        if (render) return (
            <>
                <Pressable style={{ position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "92%", top: 82 }} onPress={() => { focusOut() }} >
                    <FlatList keyboardShouldPersistTaps='handled' data={searchData} renderItem={({ item }) =>
                        <>
                            <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => { storage.saveObject('selectedItem', item); getWorkOrder(item.workOrderCode, item.description); let selectedItem = item; navigation.navigate('Ordem de Serviço', { selectedItem }); }}>
                                <View style={{ backgroundColor: colors.card, padding: 12.5, borderRadius: 15, marginBottom: 5 }}>
                                    <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5 }}>
                                        <Text style={{ color: colors.text, fontSize: 17, alignSelf: "flex-start" }}>{item.workOrderCode + ' - ' + item.description}</Text>
                                    </View>
                                    <View style={{ marginTop: 2 }}>
                                        <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.status}: {item.workOrderStatusDescription}</Text>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.organization}: {item.organization}</Text>
                                        </View>
                                        <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.equipment}: {item.equipment}</Text>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.department}: {item.department}</Text>
                                        </View>
                                        <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.scheduledStartDate}: {item.scheduledStartDate}</Text>
                                            <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.dueDate}: {item.dueDate}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        </>
                    } />
                </Pressable>
            </>
        );
        else if (!render) return (<></>);
    }

    async function getWorkOrderList(update, id) {
        setRefreshing(true);
        let dataSpy = dataspy;
        if (id != null && id != undefined) dataSpy = id;
        let key = 'workOrderList:' + dataSpy;
        let workOrderList = await storage.getObject(key);
        if (workOrderList != null && !update) {
            setData(workOrderList);
            setSearchData(workOrderList);
            setOriginalData(workOrderList)
            setRefreshing(false);
            return workOrderList;
        }
        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        let xhr = new XMLHttpRequest();
        xhr.timeout = 15000;
        xhr.ontimeout = () => {
            xhr.abort;
            setErrorModalVisible(true);
            setModalTitle(language.login.modal.timedOut.title);
            setResponse(language.login.modal.timedOut.response);
            setButtonText(language.login.modal.timedOut.button);
        }
        let url = host + '/mobile/workOrderGrid?token=' + token + '&dataspy=' + dataspy;
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let jsonData = JSON.parse(xhr.response)
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
                if (jsonData.status == 200) {
                    setData(jsonData);
                    setSearchData(jsonData);
                    setOriginalData(jsonData);
                    storage.saveObject(key, jsonData);
                    setRefreshing(false);
                    return jsonData;
                } else if (workOrderList != null) {
                    setData(workOrderList);
                    setSearchData(workOrderList);
                    setOriginalData(workOrderList);
                    setRefreshing(false);
                    return workOrderList;
                } else {
                    console.log("connection error")
                    setErrorModalVisible(true);
                    setModalTitle(language.login.modal.connectionError.title);
                    setResponse(language.login.modal.connectionError.response);
                    setButtonText(language.login.modal.connectionError.button);
                }
            }
        };

        xhr.send();
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getWorkOrderList(true).then(() => setRefreshing(false));
    }, []);

    async function getWorkOrder(woCode, woOrganization) {
        let key = woCode + " : " + woOrganization;

        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        let url = host + '/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + woCode + '&organization=' + woOrganization;
        fetch(url).then(response => response.json()).then((data) => { setWorkOrderData(data); })
        storage.saveObject(key, workOrderData);
    }

    useEffect(async () => {

        let networkState = await Network.getNetworkStateAsync();
        let date = await storage.getObject('today');

        if (networkState.isConnected && networkState.type.includes('WIFI') && new Date().getDate() != date) {
            getWorkOrderList(true);
            storage.saveObject('today', new Date().getDate());
        } else {
            getWorkOrderList(false)
        }
    }, [])

    return (
        <>
            <View style={{ borderRadius: 20, padding: 12.5, backgroundColor: colors.card, marginTop: 30, alignContent: "center", alignItems: "flex-start" }}>
                <TextInput style={{ color: colors.text, fontSize: 17, width: "100%" }} placeholder={language.list.filter} placeholderTextColor="gray" onChangeText={term => { setSearchTerm(term); findWorkOrders(originalData, term) }} onSubmitEditing={() => { findWorkOrders(originalData, searchTerm); setData(searchData); focusOut() }} onFocus={() => { findWorkOrders(originalData, searchTerm); focusIn() }} ref={searchInput} returnKeyType="done" />
            </View>

            <View style={{ borderRadius: 25, position: "absolute", top: 36, right: 25 }}>
                <SelectDropdown
                    data={countries}
                    defaultButtonText="Dataspy"
                    dropdownBackgroundColor={colors.card}
                    dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                    rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                    rowTextStyle={{ color: colors.text, fontSize: 14 }}
                    buttonStyle={{ backgroundColor: colors.card, borderLeftWidth: 1, borderLeftColor: colors.border, height: 40 }}
                    buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "left", fontSize: 14 }}
                    onSelect={(selectedItem) => { setDataspy(selectedItem.id); getWorkOrderList(false, selectedItem.id); }}
                    buttonTextAfterSelection={(selectedItem) => { return selectedItem.name }}
                    rowTextForSelection={(item) => { return item.name }}
                />
                <Pressable style={{ borderRadius: 25, padding: 2, width: 40, height: 40, backgroundColor: colors.background, top: -40, right: -185 }} onPress={() => { getWorkOrderList(true); focusOut() }} >
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

            <FlatList data={respData} refreshControl={<RefreshControl progressViewOffset={-55} refreshing={refreshing} onRefresh={onRefresh} />} renderItem={({ item }) =>
                <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => { storage.saveObject('selectedItem', item); getWorkOrder(item.workOrderCode, item.description); let selectedItem = item; navigation.navigate('Ordem de Serviço', { selectedItem }); }}>
                    <View style={[{ backgroundColor: colors.card, padding: 12.5, borderRadius: 15, marginBottom: 5 }, item.style]}>
                        <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5 }}>
                            <Text style={{ color: colors.text, fontSize: 17, alignSelf: "flex-start" }}>{item.workOrderCode + ' - ' + item.description}</Text>
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.status}: {item.workOrderStatusDescription}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.organization}: {item.organization}</Text>
                            </View>
                            <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.equipment}: {item.equipment}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.department}: {item.department}</Text>
                            </View>
                            <View style={{ marginBottom: -5, marginBottom: 8 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.scheduledStartDate}: {item.scheduledStartDate}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.dueDate}: {item.dueDate}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            } />

            {renderOverlay(modalVisible)}
        </>
    );
}