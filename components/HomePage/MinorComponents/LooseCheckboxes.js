import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableLine from '../UtilityComponents/HideableLine';

const LooseCheckboxes = (props) => {
    console.log("Loose Checkboxes");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.safety &&
        !show.warranty &&
        !show.depend &&
        !show.survey &&
        !show.multipleEquipments &&
        !show.printed
    ) return (<></>);

    console.log("warranty: " + show.warranty + " : " + labels.warranty + " : " + item.warranty);

return (
    <>
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, marginTop: 0, borderRadius: 25 }}>
            <HideableLine rightLabel={labels.safety} rightData={item.safety} leftLabel={labels.warranty} leftData={item.warranty} type="checkbox" rightShow={show.safety} leftShow={show.warranty} />
            <HideableLine rightLabel={labels.depend} rightData={item.depend} leftLabel={labels.survey} leftData={item.survey} type="checkbox" rightShow={show.depend} leftShow={show.survey} />
            <HideableLine rightLabel={labels.multipleEquipments} rightData={item.multipleEquipments} leftLabel={labels.printed} leftData={item.printed} type="checkbox" rightShow={show.multipleEquipments} leftShow={show.printed} />
        </View>
    </>
);
}

export default LooseCheckboxes;