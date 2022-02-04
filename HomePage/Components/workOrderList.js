import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View } from "react-native";
import Storage from '../../classes/Storage/Storage';
import * as Network from 'expo-network';
import * as UserDefinedFieldsLabels from '../../Templates/UserDefinedFieldsLabels.json';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();

    const [respData, setData] = useState(JSON.parse('{}'));
    const [workOrderData, setWorkOrderData] = useState(JSON.parse('{}'));
    const [UserDefinedFieldsLabels, setUserDefinedFieldsLabels] = useState(UserDefinedFieldsLabels);
    const storage = new Storage();

    async function getWorkOrderList(update) {
        var workOrderList = await storage.getObject('workOrderList');
        if (workOrderList != null && !update) {
            setData(workOrderList);
            return workOrderList;
        }
        var host = await storage.getArticle('host');
        var token = await storage.getArticle('token');

        var xhr = new XMLHttpRequest();
        var url = host + ':8080/mobile/workOrderGrid?token=' + token;
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var jsonData = JSON.parse(xhr.response)
                for (let index = 0; index < jsonData.length; index++) {
                    const element = jsonData[index];
                    if (element.scheduledStartDate == '') {
                        element.scheduledStartDate = 'Ainda não definido';
                    }
                    if (element.dueDate == '') {
                        element.dueDate = 'Ainda não definido';
                    }
                    if (element.reportedBy == '') {
                        element.reportedBy = 'Não definido';
                    }
                    jsonData[index] = element;
                }
                setData(jsonData)
                storage.saveObject('workOrderList',jsonData);
                return jsonData;
            }
        };

        xhr.send();

        var labelUrl = host + ':8080/mobile/userDefinedFieldsLabels?token=' + token;
        fetch(labelUrl).then(response => response.json()).then((data) => {console.log("got Labels" + data); setUserDefinedFieldsLabels(data)})
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function getWorkOrder(woCode, woOrganization) {
        var key = woCode + " : " + woOrganization;

        var host = await storage.getArticle('host');
        var token = await storage.getArticle('token');

        var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + woCode + '&organization=' + woOrganization;
        fetch(url).then(response => response.json()).then((data) => {console.log("gotData" + data); setWorkOrderData(data)})
        storage.saveObject(key,workOrderData);
    }

    useEffect(async () => {
        var networkState = await Network.getNetworkStateAsync();
        var date = await storage.getObject('today');
        if (networkState.isConnected && networkState.type.includes('WIFI') && new Date().getDate() != date) {
            getWorkOrderList(true).then( async () => {
                var workOrderList = await storage.getObject('workOrderList');
                for (let i = 0; i < workOrderList.length; i++) {
                    const element = workOrderList[i];
                    getWorkOrder(element.workOrderCode, element.organization);
                    await sleep(2000);
                }
                console.log('hello');
            });
            storage.saveObject('today',new Date().getDate());
        } else {
            getWorkOrderList(false)
        }
    }, [])

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 12.5, elevation: 2, backgroundColor: colors.card, position: "absolute", top: -47.5, right: 25, zIndex: 9999999 }} onPress={() => { getWorkOrderList(true) }} >
                <Text style={{ color: colors.text, fontWeight: "bold", textAlign: "center" }}>Lupa</Text>
            </Pressable>
            <FlatList data={respData} renderItem={({ item }) =>
                <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => {storage.saveObject('selectedItem', item); getWorkOrder(); navigation.navigate('Ordem de Serviço',{UserDefinedFieldsLabels}); }}>
                    <View style={{ backgroundColor: colors.card, padding: 12.5, borderRadius: 15, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5 }}>
                            <Text style={{ color: colors.text, fontSize: 17, alignSelf: "flex-start" }}>{item.workOrderCode + ' - ' + item.description}</Text>
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >Status: {item.workOrderStatusDescription}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >Organização: {item.organization}</Text>
                            </View>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >Equipamento: {item.equipment}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >Departamento: {item.department}</Text>
                            </View>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >Data de início: {item.scheduledStartDate}</Text>
                                <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -13 }} >Data de Vencimento: {item.dueDate}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            } />
        </>
    );
}