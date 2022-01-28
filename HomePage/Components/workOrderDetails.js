import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View, ScrollView } from "react-native";
import Storage from '../../classes/Storage/Storage';
import * as WorkOrderDetailsTemplate from '../../Templates/WorkOrderDetailsTemplate.json';
import * as Network from 'expo-network';
import { color } from 'react-native-reanimated';

export default function HomeScreen({ navigation }) {
    const storage = new Storage();
    const { colors } = useTheme();

    const [item, setData] = useState(WorkOrderDetailsTemplate);
    const [called, setCalled] = useState(false);

    (() => {
        if (item.status == 500) {
            item.status = "Recuperando dados"
        }
    }
    ) ()

    async function getWorkOrderDetails(update) {
        var networkState = await Network.getNetworkStateAsync();
        var selectedItem = await storage.getObject('selectedItem');
        var key = selectedItem.workOrderCode + " : " + selectedItem.organization;

        if ((networkState.isConnected && networkState.type.includes('WIFI')) || (networkState.isConnected && update)) {

            var host = await storage.getArticle('host');
            var token = await storage.getArticle('token');

            var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
            fetch(url).then(response => response.json()).then((data) => { setData(data) })

        } else {
            var workOrderData = storage.getObject(key);
            setData(workOrderData)
        }
    }

    useEffect(async () => {
        navigation.addListener('focus', () => {
            console.log("getWorkData via Listener")
            if (!called) getWorkOrderDetails(false);
            setCalled(true)
        });
    }, [])

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "#2196F3", position: "absolute", top: -45, right: 50, borderColor: 'white', borderWidth: 1, zIndex: 9999999 }} onPress={() => { console.log('Pressed.'); getWorkOrderDetails(true) }} >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Procurar</Text>
            </Pressable>
            <ScrollView>

                <View>
                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{item.code} - {item.description}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Status: {item.status}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Organização: {item.organization}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo: {item.type}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22  }}>Departamento: {item.department}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Posição: {item.positionCode} - {item.positionDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Localização: {item.locationCode} - {item.locationDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Espaço de Trabalho: {item.workspace}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Equipamento: {item.equipmentCode} - {item.equipmentDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Tipo de Equipamento: {item.equipmentType}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Organização do Equipamento: {item.equipmentOrganization}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Alias de Equipamento: {item.equipmentAlias}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Número de série: {item.serialNumber}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Fabricante do Equipamento: {item.equipmentManufacturer}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Fornecedor: {item.supplier}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Modelo: {item.model}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Varios Equipamentos: {item.multipleEquipments}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Site OEM/ID de Sistem: {item.oemSite}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Segurança: {item.safety}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Garantia: {item.warranty}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Dependente: {item.depend}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Pesquisa: {item.survey}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Criado por: {item.createdBy}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Data da criação: {item.createdDate}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Tipo de Cobertura: {item.coverageType}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Assinatura Eletrônica: {item.esigner}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Data da Assinatura Eletrônica: {item.esignDate}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Tipo de Assinatura Eletrônica: {item.esignType}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text }}>Classificação de confiabilidade: {item.reliabilityRanking}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Índice de Classificação de confiabilidade: {item.reliabilityRankingIndex}</Text>
                        <Text style={{ padding: 2, color: colors.text }}>Pontuação de Classificação de confiabilidade: {item.reliabilityRankingScore}</Text>
                    </View>
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