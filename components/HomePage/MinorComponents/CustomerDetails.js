import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const CustomerDetails = (props) => {
    console.log("CustomerDetails");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.equipmentUsability &&
        !show.tempFixPromiseDate &&
        !show.supplierServiceCategoryCode &&
        !show.supplierServiceCategoryOrganization &&
        !show.providerServiceCategoryCode &&
        !show.providerServiceCategoryOrganization &&
        !show.workAddress &&
        !show.estimatedLaborCost &&
        !show.estimatedMaterialCost &&
        !show.estimatedMiscellaneousCost &&
        !show.estimatedTotalCost &&
        !show.permanentFixPromisedDate &&
        !show.temporaryFixDateCompleted &&
        !show.serviceProblemCode
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

            <HideableTextField show={show.equipmentUsability} label={labels.equipmentUsability} data={item.customerServiceDetails.equipmentUsability} />
            <HideableTextField show={show.tempFixPromiseDate} label={labels.tempFixPromiseDate} data={item.customerServiceDetails.tempFixPromiseDate} />
            <HideableTextField show={show.supplierServiceCategoryCode} label={labels.supplierServiceCategoryCode} data={item.customerServiceDetails.supplierServiceCategoryCode} />
            <HideableTextField show={show.supplierServiceCategoryOrganization} label={labels.supplierServiceCategoryOrganization} data={item.customerServiceDetails.supplierServiceCategoryOrganization} />
            <HideableTextField show={show.providerServiceCategoryCode} label={labels.providerServiceCategoryCode} data={item.customerServiceDetails.providerServiceCategoryCode} />
            <HideableTextField show={show.providerServiceCategoryOrganization} label={labels.providerServiceCategoryOrganization} data={item.customerServiceDetails.providerServiceCategoryOrganization} />
            <HideableTextField show={show.workAddress} label={labels.workAddress} data={item.customerServiceDetails.workAddress} />
            <HideableTextField show={show.estimatedLaborCost} label={labels.estimatedLaborCost} data={item.customerServiceDetails.estimatedLaborCost} />
            <HideableTextField show={show.estimatedMaterialCost} label={labels.estimatedMaterialCost} data={item.customerServiceDetails.estimatedMaterialCost} />
            <HideableTextField show={show.estimatedMiscellaneousCost} label={labels.estimatedMiscellaneousCost} data={item.customerServiceDetails.estimatedMiscellaneousCost} />
            <HideableTextField show={show.estimatedTotalCost} label={labels.estimatedTotalCost} data={item.customerServiceDetails.estimatedTotalCost} />
            <HideableTextField show={show.permanentFixPromisedDate} label={labels.permanentFixPromisedDate} data={item.customerServiceDetails.permanentFixPromisedDate} />
            <HideableTextField show={show.temporaryFixDateCompleted} label={labels.temporaryFixDateCompleted} data={item.customerServiceDetails.temporaryFixDateCompleted} />
            <HideableTextField show={show.serviceProblemCode} label={labels.serviceProblemCode} data={item.customerServiceDetails.serviceProblemCode} />
        </View>
    );
}

export default CustomerDetails;