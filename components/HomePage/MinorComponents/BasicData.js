import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableLine from '../UtilityComponents/HideableLine';
import Equipment from '../MinorComponents/Equipment';
import LooseCheckboxes from './LooseCheckboxes';

const BasicData = (props) => {
    console.log("Basic Data");
    const { colors } = useTheme();

    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.workOrderStatus &&
        !show.organization &&
        !show.type &&
        !show.department &&
        !show.createdBy &&
        !show.createdDate &&
        !show.locationCode &&
        !show.workspace &&
        !show.coverageType &&
        !show.oemSite &&
        !show.equipment &&
        !show.equipmentType &&
        !show.equipmentOrganization &&
        !show.equipmentManufacturer &&
        !show.supplier &&
        !show.position &&
        !show.equipmentAlias &&
        !show.safety &&
        !show.warranty &&
        !show.depend &&
        !show.survey &&
        !show.multipleEquipments &&
        !show.printed
    ) return (<></>);

    let locationTitle = "";

    if (item.locationCode == "" && item.locationDescription == "") {
        locationTitle = "";
    } else if (item.locationCode == "" && item.locationDescription != "") {
        locationTitle = item.locationDescription;
    } else if (item.locationCode != "" && item.locationDescription == "") {
        locationTitle = item.locationCode;
    } else if (item.locationCode != "" && item.locationDescription != "") {
        locationTitle = item.locationCode + " - " + item.locationDescription;
    }

    return (
        <View>
            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{item.code} - {item.description}</Text>
                </View>
                <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                <HideableLine rightLabel={labels.type} rightData={item.type} leftLabel={labels.department} leftData={item.department} rightShow={show.type} leftShow={show.department} />
                <HideableLine rightLabel={labels.createdBy} rightData={item.createdBy} leftLabel={labels.createdDate} leftData={item.createdDate} rightShow={show.createdBy} leftShow={show.createdDate} />
                <HideableLine rightLabel={labels.locationCode} rightData={locationTitle} leftLabel={labels.workspace} leftData={item.workspace} rightShow={show.locationCode} leftShow={show.workspace} />
                <HideableLine rightLabel={labels.coverageType} rightData={item.coverageType} leftLabel={labels.oemSite} leftData={item.oemSite} rightShow={show.coverageType} leftShow={show.oemSite} />
            </View>

            <LooseCheckboxes show={show} labels={labels} item={item} />
            <Equipment show={show} labels={labels} item={item} />
        </View>
    );
}

export default BasicData;