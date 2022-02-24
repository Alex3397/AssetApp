import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTittle from '../UtilityComponents/HideableTittle';
import HideableLine from '../UtilityComponents/HideableLine';


const Equipment = (props) => {
    console.log("Equipment");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.equipment &&
        !show.equipmentType &&
        !show.equipmentOrganization &&
        !show.equipmentManufacturer &&
        !show.supplier &&
        !show.position &&
        !show.equipmentAlias
        ) {
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
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ color: colors.text, fontSize: 18, alignSelf: "center"}}>Equipamento</Text>
                <HideableTittle style={{ marginBottom: 5 }} right={item.equipmentCode} left={item.equipmentDescription} show={show.equipment} />
            </View>

            <HideableLine rightLabel={labels.equipmentType} rightData={item.equipmentType} leftLabel={labels.equipmentOrganization} leftData={item.equipmentOrganization} rightShow={show.equipmentType} leftShow={show.equipmentOrganization} />
            <HideableLine rightLabel={labels.equipmentManufacturer} rightData={item.equipmentManufacturer} leftLabel={labels.supplier} leftData={item.supplier} rightShow={show.equipmentManufacturer} leftShow={show.supplier} />
            <HideableLine rightLabel={labels.positionCode} rightData={positionTitle} leftLabel={labels.equipmentAlias} leftData={item.equipmentAlias} rightShow={show.position} leftShow={show.equipmentAlias} />
        </View>
    );
}

export default Equipment;