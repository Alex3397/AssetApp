import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableLine from '../UtilityComponents/HideableLine';

const LooseCheckboxes = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (
        (item.safety == "" || item.safety == "false" ) &&
        (item.warranty == "" || item.warranty == "false" ) &&
        (item.depend == "" || item.depend == "false" ) &&
        (item.survey == "" || item.survey == "false" ) &&
        (item.multipleEquipments == "" || item.multipleEquipments == "false" ) &&
        (item.printed == "" || item.printed == "false" )
    ) return (<></>);

    return (
        <>
            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, marginTop: 0, borderRadius: 25 }}>
                <HideableLine rightLabel={labels.safety} rightData={item.safety} leftLabel={labels.warranty} leftData={item.warranty} type="checkbox" rightShow={false} leftShow={false} />
                <HideableLine rightLabel={labels.depend} rightData={item.depend} leftLabel={labels.survey} leftData={item.survey} type="checkbox" rightShow={false} leftShow={false} />
                <HideableLine rightLabel={labels.multipleEquipments} rightData={item.multipleEquipments} leftLabel={labels.printed} leftData={item.printed} type="checkbox" rightShow={false} leftShow={false} />
            </View>
        </>
    );
}

export default LooseCheckboxes;