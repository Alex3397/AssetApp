import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const ProductionDetails = (props) => {
    console.log("ProductionDetails");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.productionRequest &&
        !show.productionRequestRevision &&
        !show.productionOrder &&
        !show.productionPriority &&
        !show.productionPriorityDescription &&
        !show.productionStartDate &&
        !show.productionEndDate &&
        !show.accountingEntity
        ) {
        return (<></>)
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Produção</Text>

            <HideableTextField show={show.productionRequest} label={labels.productionRequest} data={item.productionDetails.productionRequest} />
            <HideableTextField show={show.productionRequestRevision} label={labels.productionRequestRevision} data={item.productionDetails.productionRequestRevision} />
            <HideableTextField show={show.productionOrder} label={labels.productionOrder} data={item.productionDetails.productionOrder} />
            <HideableTextField show={show.productionPriority} label={labels.productionPriority} data={item.productionDetails.productionPriority} />
            <HideableTextField show={show.productionPriorityDescription} label={labels.productionPriorityDescription} data={item.productionDetails.productionPriorityDescription} />
            <HideableTextField show={show.productionStartDate} label={labels.productionStartDate} data={item.productionDetails.productionStartDate} />
            <HideableTextField show={show.productionEndDate} label={labels.productionEndDate} data={item.productionDetails.productionEndDate} />
            <HideableTextField show={show.accountingEntity} label={labels.accountingEntity} data={item.productionDetails.accountingEntity} />
        </View>
    );
}

export default ProductionDetails;