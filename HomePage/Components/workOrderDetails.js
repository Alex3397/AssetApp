import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View, ScrollView } from "react-native";
import Storage from '../../classes/Storage/Storage';

export default function HomeScreen({ navigation }) {
    const storage = new Storage();
    const { colors } = useTheme();

    const [item, setData] = useState(JSON.parse('{}'));
    const [string, setString] = useState('');

    useEffect( async() => {
        var selectedItem = await storage.getObject('selectedItem');
        var workOrder = await storage.getObject(selectedItem.workOrderCode + ' : ' + selectedItem.organization);

        if (workOrder != null) {
            setData(workOrder);
            return workOrder;
        }

        var host = await storage.getArticle('host');
        var token = await storage.getArticle('token');

        var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
        fetch(url).then(response => response.json()).then((data) => {console.log("gotData" + data); setData(data)})
        
        navigation.addListener('focus', () => {
            fetch(url).then(response => response.json()).then((data) => {console.log("gotData" + data); setData(data)})
          });
    }, [])

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "#2196F3", position: "absolute", top: -45, right: 50, borderColor: 'white', borderWidth: 1, zIndex: 9999999 }} onPress={() => { console.log('Pressed.'); }} >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Procurar</Text>
            </Pressable>
            <ScrollView>
                <View>
                    <Text style={{ color: colors.text }}>
                        <Text>Ordem de serviço: {item.workOrderId.code} - {item.workOrderId.description}</Text>
                    </Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Programação</Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Detalhes de referência linear</Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Detalhes da OS</Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Atividade</Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Campos definidos pelo usuário</Text>
                </View>
                <View>
                    <Text style={{ color: colors.text }}>Campos personalizados</Text>
                </View>
            </ScrollView>
        </>
    );
}