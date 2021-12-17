import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View, ScrollView } from "react-native";
import Storage from '../../classes/Storage/Storage';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();

    const [item, setData] = useState(JSON.parse('{}'));
    const [string, setString] = useState('');
    const storage = new Storage();

    useEffect(() => {
        xumbrega()
    }, [])

    async function xumbrega() {
        console.log('called xumbrega')
        var selectedItem = await storage.getObject('selectedItem');
        console.log(selectedItem)
        var host = await storage.getArticle('host');
        var token = await storage.getArticle('token');

        var xhr = new XMLHttpRequest();
        var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.responseText)
                setString(xhr.responseText)
                var jsonData = JSON.parse(xhr.response)
                console.log(jsonData)
                for (let index = 0; index < jsonData.length; index++) {
                    const element = jsonData[index];
                    jsonData[index] = element;
                }
                setData(jsonData)
            }
        };

        xhr.send();
    }

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "#2196F3", position: "absolute", top: -45, right: 50, borderColor: 'white', borderWidth: 1, zIndex: 9999999 }} onPress={() => { console.log('Pressed.'); xumbrega() }} >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Procurar</Text>
            </Pressable>
            <Text style={{ color: colors.text }}>Hello</Text>
            <ScrollView>
                <Text style={{ color: colors.text }}>{JSON.stringify(item, null, 6)}</Text>
            </ScrollView>
        </>
    );
}