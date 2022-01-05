import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View } from "react-native";
import Storage from '../../classes/Storage/Storage';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();

    const [respData, setData] = useState(JSON.parse('{}'));
    const storage = new Storage();

    async function getWorkOrderList() {
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
                storage.saveObject('workOrderList')
            }
        };

        xhr.send();

    }

    useEffect(() => {
        getWorkOrderList()
    }, [])

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 12.5, elevation: 2, backgroundColor: colors.card, position: "absolute", top: -47.5, right: 25, zIndex: 9999999 }} onPress={() => { getWorkOrderList() }} >
                <Text style={{ color: colors.text, fontWeight: "bold", textAlign: "center" }}>Lupa</Text>
            </Pressable>
            <FlatList data={respData} renderItem={({ item }) =>
                <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => { console.log('pressed'); storage.saveObject('selectedItem', item); navigation.navigate('Ordem de Serviço'); }}>
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