import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const ProductionDetails = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (item.productionDetails.productionRequestRevision == ""
        && item.productionDetails.productionOrder == ""
        && item.productionDetails.productionRequest == ""
        && item.productionDetails.productionPriority == ""
        && item.productionDetails.productionStartDate == ""
        && item.productionDetails.accountingEntity == ""
        && item.productionDetails.productionPriorityDescription == ""
        && item.productionDetails.productionEndDate == "") {
        return (<></>)
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Produção</Text>

            <HideableTextField show={false} label={labels.productionRequest} data={item.productionDetails.productionRequest} />
            <HideableTextField show={false} label={labels.productionRequestRevision} data={item.productionDetails.productionRequestRevision} />
            <HideableTextField show={false} label={labels.productionOrder} data={item.productionDetails.productionOrder} />
            <HideableTextField show={false} label={labels.productionPriority} data={item.productionDetails.productionPriority} />
            <HideableTextField show={false} label={labels.productionPriorityDescription} data={item.productionDetails.productionPriorityDescription} />
            <HideableTextField show={false} label={labels.productionStartDate} data={item.productionDetails.productionStartDate} />
            <HideableTextField show={false} label={labels.productionEndDate} data={item.productionDetails.productionEndDate} />
            <HideableTextField show={false} label={labels.accountingEntity} data={item.productionDetails.accountingEntity} />
        </View>
    );
}

export default ProductionDetails;