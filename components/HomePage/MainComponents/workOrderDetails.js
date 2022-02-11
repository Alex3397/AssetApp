import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, RefreshControl, ScrollView } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as WorkOrderDetailsTemplate from '../../../Templates/WorkOrderDetailsTemplate.json';
import * as UserDefinedFieldsLabels from '../../../Templates/UserDefinedFieldsLabels.json';
import * as Network from 'expo-network';
import UserDefinedFields from '../MinorComponents/UserDefinedFields';
import ComplianceDetails from '../MinorComponents/ComplianceDetails';
import ProductionDetails from '../MinorComponents/ProductionDetails';
import IncidentControl from '../MinorComponents/IncidentControl';
import CustomerDetails from '../MinorComponents/CustomerDetails';
import Activity from '../MinorComponents/Activity';
import Details from '../MinorComponents/Details';
import LinearReferenceDetails from '../MinorComponents/LinearReferenceDetails';
import Schedule from '../MinorComponents/Schedule';
import BasicData from '../MinorComponents/BasicData';

export default function HomeScreen({ navigation, route }) {
    const storage = new Storage();
    const { colors } = useTheme();

    const [refreshing, setRefreshing] = useState(false);
    const [item, setData] = useState(WorkOrderDetailsTemplate);
    const [userLabels, setLabels] = useState(UserDefinedFieldsLabels);
    const [called, setCalled] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getWorkOrderDetails(true).then(() => setRefreshing(false));
      }, []);

    (() => {
        if (item.status == 500) {
            item.status = "Recuperando dados"
        }
    }
    )()

    async function getWorkOrderDetails(update) {
        var networkState = await Network.getNetworkStateAsync();
        var selectedItem = await storage.getObject('selectedItem');
        var key = selectedItem.workOrderCode + " : " + selectedItem.organization;

        if ((networkState.isConnected && networkState.type.includes('WIFI')) || (networkState.isConnected && update)) {

            var host = await storage.getArticle('host');
            var token = await storage.getArticle('token');

            var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
            fetch(url).then(response => response.json()).then((data) => { setData(data) })

            var labelUrl = host + ':8080/mobile/userDefinedFieldsLabels?token=' + token;
            fetch(labelUrl).then(response => response.json()).then((data) => {setLabels(data); storage.saveObject("labels",data)})
        } else {
            var workOrderData = storage.getObject(key);
            setData(workOrderData)
        }
    }

    useEffect(async () => {
        navigation.addListener('focus', () => {
            if (!called) getWorkOrderDetails(false);
            setCalled(true)
        });
    }, [])

    return (
        <>
            <ScrollView style={{ marginTop: 28 }} refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
                <BasicData item={item} />

                <Schedule item={item}/>
                <LinearReferenceDetails item={item}/>
                <Details item={item}/>
                <Activity item={item}/>
                <CustomerDetails item={item}/>
                <ProductionDetails item={item}/>
                <IncidentControl item={item}/>
                <ComplianceDetails item={item}/>
                <UserDefinedFields userLabels={userLabels} item={item}/>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Assinatura Eletrônica: </Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 15, alignSelf: "center", fontStyle: "italic", fontFamily: "serif" }}>{item.esigner} : {item.esignDate} : {item.esignType}</Text>
                </View>
            </ScrollView>
        </>
    );
}