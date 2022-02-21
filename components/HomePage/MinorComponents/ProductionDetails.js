import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableLine from '../UtilityComponents/HideableLine';


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

            <HideableLine leftShow={show.productionRequest} rightShow={show.productionRequestRevision} leftLabel={labels.productionRequest} leftData={item.productionDetails.productionRequest} rightLabel={labels.productionRequestRevision} rightData={item.productionDetails.productionRequestRevision} />
            <HideableLine leftShow={show.productionOrder} rightShow={show.accountingEntity} leftLabel={labels.productionOrder} leftData={item.productionDetails.productionOrder} rightLabel={labels.accountingEntity} rightData={item.productionDetails.accountingEntity} />
            <HideableLine leftShow={show.productionPriority} rightShow={show.productionPriorityDescription} leftLabel={labels.productionPriority} leftData={item.productionDetails.productionPriority} rightLabel={labels.productionPriorityDescription} rightData={item.productionDetails.productionPriorityDescription} />
            <HideableLine leftShow={show.productionStartDate} rightShow={show.productionEndDate} leftLabel={labels.productionStartDate} leftData={item.productionDetails.productionStartDate} rightLabel={labels.productionEndDate} rightData={item.productionDetails.productionEndDate} />
        </View>
    );
}

export default ProductionDetails;