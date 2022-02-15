import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const CustomerDetails = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (item.customerServiceDetails.equipmentUsability == ""
        && item.customerServiceDetails.tempFixPromiseDate == ""
        && item.customerServiceDetails.supplierServiceCategoryCode == ""
        && item.customerServiceDetails.supplierServiceCategoryOrganization == ""
        && item.customerServiceDetails.providerServiceCategoryCode == ""
        && item.customerServiceDetails.providerServiceCategoryOrganization == ""
        && item.customerServiceDetails.workAddress == ""
        && item.customerServiceDetails.estimatedLaborCost == ""
        && item.customerServiceDetails.estimatedMaterialCost == ""
        && item.customerServiceDetails.estimatedMiscellaneousCost == ""
        && item.customerServiceDetails.estimatedTotalCost == ""
        && item.customerServiceDetails.permanentFixPromisedDate == ""
        && item.customerServiceDetails.temporaryFixDateCompleted == ""
        && item.customerServiceDetails.serviceProblemCode == "") {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

            <HideableTextField show={false} label={labels.equipmentUsability} data={item.customerServiceDetails.equipmentUsability} />
            <HideableTextField show={false} label={labels.tempFixPromiseDate} data={item.customerServiceDetails.tempFixPromiseDate} />
            <HideableTextField show={false} label={labels.supplierServiceCategoryCode} data={item.customerServiceDetails.supplierServiceCategoryCode} />
            <HideableTextField show={false} label={labels.supplierServiceCategoryOrganization} data={item.customerServiceDetails.supplierServiceCategoryOrganization} />
            <HideableTextField show={false} label={labels.providerServiceCategoryCode} data={item.customerServiceDetails.providerServiceCategoryCode} />
            <HideableTextField show={false} label={labels.providerServiceCategoryOrganization} data={item.customerServiceDetails.providerServiceCategoryOrganization} />
            <HideableTextField show={false} label={labels.workAddress} data={item.customerServiceDetails.workAddress} />
            <HideableTextField show={false} label={labels.estimatedLaborCost} data={item.customerServiceDetails.estimatedLaborCost} />
            <HideableTextField show={false} label={labels.estimatedMaterialCost} data={item.customerServiceDetails.estimatedMaterialCost} />
            <HideableTextField show={false} label={labels.estimatedMiscellaneousCost} data={item.customerServiceDetails.estimatedMiscellaneousCost} />
            <HideableTextField show={false} label={labels.estimatedTotalCost} data={item.customerServiceDetails.estimatedTotalCost} />
            <HideableTextField show={false} label={labels.permanentFixPromisedDate} data={item.customerServiceDetails.permanentFixPromisedDate} />
            <HideableTextField show={false} label={labels.temporaryFixDateCompleted} data={item.customerServiceDetails.temporaryFixDateCompleted} />
            <HideableTextField show={false} label={labels.serviceProblemCode} data={item.customerServiceDetails.serviceProblemCode} />
        </View>
    );
}

export default CustomerDetails;