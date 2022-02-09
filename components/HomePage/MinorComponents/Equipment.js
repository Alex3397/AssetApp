import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableTittle from '../UtilityComponents/HideableTittle';
import HideableLine from '../UtilityComponents/HideableLine';


const Equipment = (props) => {
    const { colors } = useTheme();
    var item = props.item;

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

    var positionTitle = "";

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

            <HideableTittle right={item.equipmentCode} left={item.equipmentDescription} show={false} />
            <HideableLine rightLabel="Tipo" rightData={item.equipmentType} leftLabel="Organização" leftData={item.equipmentOrganization} />
            <HideableLine rightLabel="Posição" rightData={positionTitle} leftLabel="Alias" leftData={item.equipmentAlias} />
            <HideableLine rightLabel="Fabricante" rightData={item.equipmentManufacturer} leftLabel="Fornecedor" leftData={item.supplier} />
            <HideableLine rightLabel="Número de série" rightData={item.serialNumber} leftLabel="Modelo" leftData={item.model} />
        </View>
    );
}

export default Equipment;