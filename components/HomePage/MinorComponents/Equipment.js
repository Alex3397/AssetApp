import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTittle from '../UtilityComponents/HideableTittle';
import HideableLine from '../UtilityComponents/HideableLine';


const Equipment = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (item.equipmentCode == ""
        && item.equipmentDescription == ""
        && item.equipmentType == ""
        && item.equipmentOrganization == ""
        && item.positionCode == ""
        && item.positionDescription == ""
        && item.equipmentAlias == ""
        && item.equipmentManufacturer == ""
        && item.supplier == ""
        && item.serialNumber == ""
        && item.model == "") {
        return (<></>);
    }

    let positionTitle = "";

    if (item.positionCode == "" && item.positionDescription == "") {
        positionTitle = "";
    } else if (item.positionCode == "" && item.positionDescription != "") {
        positionTitle = item.positionDescription;
    } else if (item.positionCode != "" && item.positionDescription == "") {
        positionTitle = item.positionCode;
    } else if (item.positionCode != "" && item.positionDescription != "") {
        positionTitle = item.positionCode + " - " + item.positionDescription;
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, paddingTop: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center", marginBottom: 5 }}>Equipamento</Text>

            <HideableTittle right={item.equipmentCode} left={item.equipmentDescription} />
            <HideableLine rightLabel="Tipo" rightData={item.equipmentType} leftLabel="Organização" leftData={item.equipmentOrganization} />
            <HideableLine rightLabel="Fabricante" rightData={item.equipmentManufacturer} leftLabel="Fornecedor" leftData={item.supplier} />
            <HideableLine rightLabel="Posição" rightData={positionTitle} leftLabel="Alias" leftData={item.equipmentAlias} />
        </View>
    );
}

export default Equipment;