import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const ProductionDetails = (props) => {
    const storage = new Storage();
    const { colors } = useTheme();
    var item = props.item;

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

            <HideableTextField label="Solicitação de Produção" data={item.productionDetails.productionRequest} />
            <HideableTextField label="Revisão da Solicitação de Produção" data={item.productionDetails.productionRequestRevision} />
            <HideableTextField label="Ordem de Produção" data={item.productionDetails.productionOrder} />
            <HideableTextField label="Propriedade de Produção" data={item.productionDetails.productionPriority} />
            <HideableTextField label="Descrição da Propriedade de Produção" data={item.productionDetails.productionPriorityDescription} />
            <HideableTextField label="Data de Inicio da Produção" data={item.productionDetails.productionStartDate} />
            <HideableTextField label="Data de Término da Produção" data={item.productionDetails.productionEndDate} />
            <HideableTextField label="Entidade Contábil" data={item.productionDetails.accountingEntity} />
        </View>
    );
}

export default ProductionDetails;