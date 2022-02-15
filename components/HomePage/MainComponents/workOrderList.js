import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { TextInput, Text, RefreshControl, Pressable, FlatList, View, Keyboard } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as Network from 'expo-network';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';

export default function HomeScreen({ navigation }) {
    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const { colors } = useTheme();

    const [refreshing, setRefreshing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [respData, setData] = useState(JSON.parse('{}'));
    const [searchData, setSearchData] = useState(JSON.parse('{}'));
    const [workOrderData, setWorkOrderData] = useState(JSON.parse('{}'));
    const [modalVisible, setModalVisible] = useState(false);
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

    Keyboard.addListener("keyboardDidHide",() => {
        setModalVisible(false);
    })

    const renderOverlay = (render) => {
        if (render) return (<Pressable onPress={() => focusOut()} style={{ position: "absolute", backgroundColor: "black", opacity: 0.5, width: "100%", height: "100%", top: 82 }} />);
        else if (!render) return (<></>);
    }

    async function getWorkOrderList(update) {
        let workOrderList = await storage.getObject('workOrderList');
        if (workOrderList != null && !update) {
            setData(workOrderList);
            setSearchData(workOrderList);
            return workOrderList;
        }
        let host = await storage.getArticle('host');
        let token = await storage.getArticle('token');

        let xhr = new XMLHttpRequest();
        let url = host + ':8080/mobile/workOrderGrid?token=' + token;
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
                if (jsonData.status != 500) {
                    setData(jsonData);
                    setSearchData(jsonData);
                    storage.saveObject('workOrderList', jsonData);
                    return jsonData;
                } else {
                    setData(workOrderList);
                    setSearchData(workOrderList);
                    return workOrderList;
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

        let host = await storage.getArticle('host');
        let token = await storage.getArticle('token');

        let url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + woCode + '&organization=' + woOrganization;
        fetch(url).then(response => response.json()).then((data) => { setWorkOrderData(data) })
        storage.saveObject(key, workOrderData);
    }

    useEffect(async () => {
        let networkState = await Network.getNetworkStateAsync();
        let date = await storage.getObject('today');

        if (networkState.isConnected && networkState.type.includes('WIFI') && new Date().getDate() != date) {

            getWorkOrderList(true).then(async () => {
                let workOrderList = await storage.getObject('workOrderList');
                for (let i = 0; i < workOrderList.length; i++) {
                    const element = workOrderList[i];
                    getWorkOrder(element.workOrderCode, element.organization);
                    await sleep(2000);
                }
            });

            storage.saveObject('today', new Date().getDate());
        } else {
            getWorkOrderList(false)
        }
    }, [])

    return (
        <>
            <View style={{ borderRadius: 20, padding: 12.5, backgroundColor: colors.card, marginTop: 30, alignContent: "center", alignItems: "flex-start" }}>
                <TextInput style={{ color: colors.text, fontSize: 17, width: "100%" }} placeholder={language.list.filter} placeholderTextColor="gray" onChangeText={term => { setSearchTerm(term); findWorkOrders(respData, term) }} onSubmitEditing={() => { findWorkOrders(respData, searchTerm); focusOut() }} onFocus={() => focusIn()} returnKeyType="done" />
            </View>
            <Pressable style={{ borderRadius: 25, padding: 2, width: 40, height: 40, backgroundColor: colors.background, position: "absolute", top: 36, right: 15 }} onPress={() => { findWorkOrders(respData, searchTerm); focusOut() }} >
                <Icon name="search" style={{ color: colors.text, fontSize: 18, marginLeft: 2, padding: 8 }} color={colors.text} />
            </Pressable>
            <FlatList data={searchData} refreshControl={<RefreshControl progressViewOffset={-55} refreshing={refreshing} onRefresh={onRefresh} />} renderItem={({ item }) =>
                <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => { storage.saveObject('selectedItem', item); getWorkOrder(); navigation.navigate('Ordem de Serviço'); }}>
                    <View style={{ backgroundColor: colors.card, padding: 12.5, borderRadius: 15, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5 }}>
                            <Text style={{ color: colors.text, fontSize: 17, alignSelf: "flex-start" }}>{item.workOrderCode + ' - ' + item.description}</Text>
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.status}: {item.workOrderStatusDescription}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >{language.list.organization}: {item.organization}</Text>
                            </View>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.equipment}: {item.equipment}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >{language.list.department}: {item.department}</Text>
                            </View>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.scheduledStartDate}: {item.scheduledStartDate}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >{language.list.dueDate}: {item.dueDate}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            } />
            {renderOverlay(modalVisible)}
        </>
    );
}