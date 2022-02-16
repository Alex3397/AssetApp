import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, RefreshControl, ScrollView } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as WorkOrderDetailsTemplate from '../../../Templates/WorkOrderDetailsTemplate.json';
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
import * as FieldsToShow from '../../../Templates/FieldsToShow.json';
import Sign from '../MinorComponents/Sign';

export default function HomeScreen({ navigation }) {
    const storage = new Storage();

    const [refreshing, setRefreshing] = useState(false);
    const [item, setData] = useState(WorkOrderDetailsTemplate);
    const [labels, setLabels] = useState(WorkOrderDetailsTemplate);
    const [show, setShow] = useState(FieldsToShow);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getWorkOrderDetails(true).then(() => setRefreshing(false));
    }, []);

    async function getWorkOrderDetails(update) {
        console.log("getting data")
        let networkState = await Network.getNetworkStateAsync();
        let selectedItem = await storage.getObject('selectedItem');
        let key = selectedItem.workOrderCode + " : " + selectedItem.organization;

        if ((networkState.isConnected && networkState.type.includes('WIFI')) || (networkState.isConnected && update)) {

            let host = await storage.getArticle('host');
            let token = await storage.getArticle('token');

            console.log("getting workOrder")
            let url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
            fetch(url).then(response => response.json()).then((data) => { setData(data) });
            console.log("got workOrder")

            console.log("getting labels")
            let labelUrl = host + ':8080/mobile/userDefinedFieldsLabels?token=' + token;
            fetch(labelUrl).then(response => response.json()).then((data) => { setLabels(data); storage.saveObject("labels", data) });
            console.log("got labels")
        } else {
            let workOrderData = storage.getObject(key);
            storage.getObject("labels").then((data) => { setLabels(data) });
            setData(workOrderData);
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            console.log("workOrde useEffect")
            getWorkOrderDetails(false);
            storage.getObject("showfields").then(data => { setShow(data); });
            storage.getObject("labels").then((data) => { setLabels(data) });
        });
    }, [])

    return (
        <>
            <ScrollView style={{ marginTop: 28 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                <BasicData labels={labels} item={item} show={show} />
                <Schedule labels={labels.schedule} item={item} show={show} />
                <LinearReferenceDetails labels={labels.linearReferenceDetails} item={item} show={show} />
                <Details labels={labels.details} item={item} show={show} />
                <Activity labels={labels.activity} item={item} show={show} />
                <CustomerDetails labels={labels.customerServiceDetails} item={item} show={show} />
                <ProductionDetails labels={labels.productionDetails} item={item} show={show} />
                <IncidentControl labels={labels.incidentControl} item={item} show={show} />
                <ComplianceDetails labels={labels.compliance} item={item} show={show} />
                <UserDefinedFields userLabels={labels.userDefinedFields} item={item} show={show} />

                <Sign item={item} show={show} />

            </ScrollView>
        </>
    );
}