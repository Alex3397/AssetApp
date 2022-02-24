import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';
import HideableLine from '../UtilityComponents/HideableLine';

const UserDefinedFields = (props) => {
    console.log("UserDefinedFields");

    const { colors } = useTheme();
    const [charPadding, setCharPadding] = useState(0);
    const [numPadding, setNumPadding] = useState(0);
    const [datePadding, setDatePadding] = useState(0);
    const [checkPadding, setCheckPadding] = useState(0);
    const [notePadding, setNotePadding] = useState(0);

    let labels = props.userLabels.userDefinedFields;
    let show = props.show;

    if (
        !show.udfChar01 &&
        !show.udfChar02 &&
        !show.udfChar03 &&
        !show.udfChar04 &&
        !show.udfChar05 &&
        !show.udfChar06 &&
        !show.udfChar07 &&
        !show.udfChar08 &&
        !show.udfChar09 &&
        !show.udfChar10 &&
        !show.udfChar11 &&
        !show.udfChar12 &&
        !show.udfChar13 &&
        !show.udfChar14 &&
        !show.udfChar15 &&
        !show.udfChar16 &&
        !show.udfChar17 &&
        !show.udfChar18 &&
        !show.udfChar19 &&
        !show.udfChar20 &&
        !show.udfChar21 &&
        !show.udfChar22 &&
        !show.udfChar23 &&
        !show.udfChar24 &&
        !show.udfChar25 &&
        !show.udfChar26 &&
        !show.udfChar27 &&
        !show.udfChar28 &&
        !show.udfChar29 &&
        !show.udfChar30 &&
        !show.udfChar31 &&
        !show.udfChar32 &&
        !show.udfChar33 &&
        !show.udfChar34 &&
        !show.udfChar35 &&
        !show.udfChar36 &&
        !show.udfChar37 &&
        !show.udfChar38 &&
        !show.udfChar39 &&
        !show.udfChar40 &&
        !show.udfChar41 &&
        !show.udfChar42 &&
        !show.udfChar43 &&
        !show.udfChar44 &&
        !show.udfChar45 &&
        !show.udfNum1 &&
        !show.udfNum2 &&
        !show.udfNum3 &&
        !show.udfNum4 &&
        !show.udfNum5 &&
        !show.udfNum6 &&
        !show.udfNum7 &&
        !show.udfNum8 &&
        !show.udfNum9 &&
        !show.udfNum10 &&
        !show.udfDate1 &&
        !show.udfDate2 &&
        !show.udfDate3 &&
        !show.udfDate4 &&
        !show.udfDate5 &&
        !show.udfDate6 &&
        !show.udfDate7 &&
        !show.udfDate8 &&
        !show.udfDate9 &&
        !show.udfDate10 &&
        !show.udfChkBox01 &&
        !show.udfChkBox02 &&
        !show.udfChkBox03 &&
        !show.udfChkBox04 &&
        !show.udfChkBox05 &&
        !show.udfChkBox06 &&
        !show.udfChkBox07 &&
        !show.udfChkBox08 &&
        !show.udfChkBox09 &&
        !show.udfChkBox10 &&
        !show.udfNote01 &&
        !show.udfNote02 &&
        !show.udfNote03 &&
        !show.udfNote04 &&
        !show.udfNote05 &&
        !show.udfNote06 &&
        !show.udfNote07 &&
        !show.udfNote08 &&
        !show.udfNote09 &&
        !show.udfNote10
    ) {
        return (<></>)
    }

    if (
        (
            !show.udfChar01 &&
            !show.udfChar02 &&
            !show.udfChar03 &&
            !show.udfChar04 &&
            !show.udfChar05 &&
            !show.udfChar06 &&
            !show.udfChar07 &&
            !show.udfChar08 &&
            !show.udfChar09 &&
            !show.udfChar10 &&
            !show.udfChar11 &&
            !show.udfChar12 &&
            !show.udfChar13 &&
            !show.udfChar14 &&
            !show.udfChar15 &&
            !show.udfChar16 &&
            !show.udfChar17 &&
            !show.udfChar18 &&
            !show.udfChar19 &&
            !show.udfChar20 &&
            !show.udfChar21 &&
            !show.udfChar22 &&
            !show.udfChar23 &&
            !show.udfChar24 &&
            !show.udfChar25 &&
            !show.udfChar26 &&
            !show.udfChar27 &&
            !show.udfChar28 &&
            !show.udfChar29 &&
            !show.udfChar30 &&
            !show.udfChar31 &&
            !show.udfChar32 &&
            !show.udfChar33 &&
            !show.udfChar34 &&
            !show.udfChar35 &&
            !show.udfChar36 &&
            !show.udfChar37 &&
            !show.udfChar38 &&
            !show.udfChar39 &&
            !show.udfChar40 &&
            !show.udfChar41 &&
            !show.udfChar42 &&
            !show.udfChar43 &&
            !show.udfChar44 &&
            !show.udfChar45
        ) && charPadding != 10
    ) {
        setCharPadding(10);
    }

    if (
        (
            !show.udfNum1 &&
            !show.udfNum2 &&
            !show.udfNum3 &&
            !show.udfNum4 &&
            !show.udfNum5 &&
            !show.udfNum6 &&
            !show.udfNum7 &&
            !show.udfNum8 &&
            !show.udfNum9 &&
            !show.udfNum10
        ) && numPadding != 10
    ) {
        setNumPadding(10);
    }

    if (
        (
            !show.udfDate1 &&
            !show.udfDate2 &&
            !show.udfDate3 &&
            !show.udfDate4 &&
            !show.udfDate5 &&
            !show.udfDate6 &&
            !show.udfDate7 &&
            !show.udfDate8 &&
            !show.udfDate9 &&
            !show.udfDate10
        ) && datePadding != 10
    ) {
        setDatePadding(10);
    }

    if (
        (
            !show.udfChkBox01 &&
            !show.udfChkBox02 &&
            !show.udfChkBox03 &&
            !show.udfChkBox04 &&
            !show.udfChkBox05 &&
            !show.udfChkBox06 &&
            !show.udfChkBox07 &&
            !show.udfChkBox08 &&
            !show.udfChkBox09 &&
            !show.udfChkBox10
        ) && checkPadding != 10
    ) {
        setCheckPadding(10);
    }

    if (
        (
            !show.udfNote01 &&
            !show.udfNote02 &&
            !show.udfNote03 &&
            !show.udfNote04 &&
            !show.udfNote05 &&
            !show.udfNote06 &&
            !show.udfNote07 &&
            !show.udfNote08 &&
            !show.udfNote09 &&
            !show.udfNote10
        ) && notePadding != 10
    ) {
        setNotePadding(10);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 10, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos definidos pelo usuário</Text>

            <View>
                <View style={{ margin: charPadding }}>
                    <HideableTextField show={show.udfChar01} label={labels.udfChar01} data={props.item.userDefinedFields.udfChar01} />
                    <HideableTextField show={show.udfChar02} label={labels.udfChar02} data={props.item.userDefinedFields.udfChar02} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar03} label={labels.udfChar03} data={props.item.userDefinedFields.udfChar03} />
                    <HideableTextField show={show.udfChar04} label={labels.udfChar04} data={props.item.userDefinedFields.udfChar04} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar05} label={labels.udfChar05} data={props.item.userDefinedFields.udfChar05} />
                    <HideableTextField show={show.udfChar06} label={labels.udfChar06} data={props.item.userDefinedFields.udfChar06} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar07} label={labels.udfChar07} data={props.item.userDefinedFields.udfChar07} />
                    <HideableTextField show={show.udfChar08} label={labels.udfChar08} data={props.item.userDefinedFields.udfChar08} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar09} label={labels.udfChar09} data={props.item.userDefinedFields.udfChar09} />
                    <HideableTextField show={show.udfChar10} label={labels.udfChar10} data={props.item.userDefinedFields.udfChar10} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar11} label={labels.udfChar11} data={props.item.userDefinedFields.udfChar11} />
                    <HideableTextField show={show.udfChar12} label={labels.udfChar12} data={props.item.userDefinedFields.udfChar12} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar13} label={labels.udfChar13} data={props.item.userDefinedFields.udfChar13} />
                    <HideableTextField show={show.udfChar14} label={labels.udfChar14} data={props.item.userDefinedFields.udfChar14} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar15} label={labels.udfChar15} data={props.item.userDefinedFields.udfChar15} />
                    <HideableTextField show={show.udfChar16} label={labels.udfChar16} data={props.item.userDefinedFields.udfChar16} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar17} label={labels.udfChar17} data={props.item.userDefinedFields.udfChar17} />
                    <HideableTextField show={show.udfChar18} label={labels.udfChar18} data={props.item.userDefinedFields.udfChar18} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar19} label={labels.udfChar19} data={props.item.userDefinedFields.udfChar19} />
                    <HideableTextField show={show.udfChar20} label={labels.udfChar20} data={props.item.userDefinedFields.udfChar20} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar21} label={labels.udfChar21} data={props.item.userDefinedFields.udfChar21} />
                    <HideableTextField show={show.udfChar22} label={labels.udfChar22} data={props.item.userDefinedFields.udfChar22} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar23} label={labels.udfChar23} data={props.item.userDefinedFields.udfChar23} />
                    <HideableTextField show={show.udfChar24} label={labels.udfChar24} data={props.item.userDefinedFields.udfChar24} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar25} label={labels.udfChar25} data={props.item.userDefinedFields.udfChar25} />
                    <HideableTextField show={show.udfChar26} label={labels.udfChar26} data={props.item.userDefinedFields.udfChar26} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar27} label={labels.udfChar27} data={props.item.userDefinedFields.udfChar27} />
                    <HideableTextField show={show.udfChar28} label={labels.udfChar28} data={props.item.userDefinedFields.udfChar28} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar29} label={labels.udfChar29} data={props.item.userDefinedFields.udfChar29} />
                    <HideableTextField show={show.udfChar30} label={labels.udfChar30} data={props.item.userDefinedFields.udfChar30} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar31} label={labels.udfChar31} data={props.item.userDefinedFields.udfChar31} />
                    <HideableTextField show={show.udfChar32} label={labels.udfChar32} data={props.item.userDefinedFields.udfChar32} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar33} label={labels.udfChar33} data={props.item.userDefinedFields.udfChar33} />
                    <HideableTextField show={show.udfChar34} label={labels.udfChar34} data={props.item.userDefinedFields.udfChar34} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar35} label={labels.udfChar35} data={props.item.userDefinedFields.udfChar35} />
                    <HideableTextField show={show.udfChar36} label={labels.udfChar36} data={props.item.userDefinedFields.udfChar36} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar37} label={labels.udfChar37} data={props.item.userDefinedFields.udfChar37} />
                    <HideableTextField show={show.udfChar38} label={labels.udfChar38} data={props.item.userDefinedFields.udfChar38} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar39} label={labels.udfChar39} data={props.item.userDefinedFields.udfChar39} />
                    <HideableTextField show={show.udfChar40} label={labels.udfChar40} data={props.item.userDefinedFields.udfChar40} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar41} label={labels.udfChar41} data={props.item.userDefinedFields.udfChar41} />
                    <HideableTextField show={show.udfChar42} label={labels.udfChar42} data={props.item.userDefinedFields.udfChar42} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar43} label={labels.udfChar43} data={props.item.userDefinedFields.udfChar43} />
                    <HideableTextField show={show.udfChar44} label={labels.udfChar44} data={props.item.userDefinedFields.udfChar44} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfChar45} label={labels.udfChar45} data={props.item.userDefinedFields.udfChar45} />
                </View>

                <View style={{ margin: numPadding }}>
                    <HideableTextField show={show.udfNum1} label={labels.udfNum1} data={props.item.userDefinedFields.udfNum1} />
                    <HideableTextField show={show.udfNum2} label={labels.udfNum2} data={props.item.userDefinedFields.udfNum2} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNum3} label={labels.udfNum3} data={props.item.userDefinedFields.udfNum3} />
                    <HideableTextField show={show.udfNum4} label={labels.udfNum4} data={props.item.userDefinedFields.udfNum4} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNum5} label={labels.udfNum5} data={props.item.userDefinedFields.udfNum5} />
                    <HideableTextField show={show.udfNum6} label={labels.udfNum6} data={props.item.userDefinedFields.udfNum6} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNum7} label={labels.udfNum7} data={props.item.userDefinedFields.udfNum7} />
                    <HideableTextField show={show.udfNum8} label={labels.udfNum8} data={props.item.userDefinedFields.udfNum8} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNum9} label={labels.udfNum9} data={props.item.userDefinedFields.udfNum9} />
                    <HideableTextField show={show.udfNum10} label={labels.udfNum10} data={props.item.userDefinedFields.udfNum10} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                </View>

                <View style={{ margin: datePadding }}>
                    <HideableTextField show={show.udfDate1} label={labels.udfDate1} data={props.item.userDefinedFields.udfDate1} />
                    <HideableTextField show={show.udfDate2} label={labels.udfDate2} data={props.item.userDefinedFields.udfDate2} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfDate3} label={labels.udfDate3} data={props.item.userDefinedFields.udfDate3} />
                    <HideableTextField show={show.udfDate4} label={labels.udfDate4} data={props.item.userDefinedFields.udfDate4} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfDate5} label={labels.udfDate5} data={props.item.userDefinedFields.udfDate5} />
                    <HideableTextField show={show.udfDate6} label={labels.udfDate6} data={props.item.userDefinedFields.udfDate6} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfDate7} label={labels.udfDate7} data={props.item.userDefinedFields.udfDate7} />
                    <HideableTextField show={show.udfDate8} label={labels.udfDate8} data={props.item.userDefinedFields.udfDate8} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfDate9} label={labels.udfDate9} data={props.item.userDefinedFields.udfDate9} />
                    <HideableTextField show={show.udfDate10} label={labels.udfDate10} data={props.item.userDefinedFields.udfDate10} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                </View>

                <View style={{ margin: checkPadding }}>
                    <HideableCheckBox show={show.udfChkBox01} label={labels.udfChkBox01} data={props.item.userDefinedFields.udfChkBox01} />
                    <HideableCheckBox show={show.udfChkBox02} label={labels.udfChkBox02} data={props.item.userDefinedFields.udfChkBox02} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableCheckBox show={show.udfChkBox03} label={labels.udfChkBox03} data={props.item.userDefinedFields.udfChkBox03} />
                    <HideableCheckBox show={show.udfChkBox04} label={labels.udfChkBox04} data={props.item.userDefinedFields.udfChkBox04} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableCheckBox show={show.udfChkBox05} label={labels.udfChkBox05} data={props.item.userDefinedFields.udfChkBox05} />
                    <HideableCheckBox show={show.udfChkBox06} label={labels.udfChkBox06} data={props.item.userDefinedFields.udfChkBox06} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableCheckBox show={show.udfChkBox07} label={labels.udfChkBox07} data={props.item.userDefinedFields.udfChkBox07} />
                    <HideableCheckBox show={show.udfChkBox08} label={labels.udfChkBox08} data={props.item.userDefinedFields.udfChkBox08} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableCheckBox show={show.udfChkBox09} label={labels.udfChkBox09} data={props.item.userDefinedFields.udfChkBox09} />
                    <HideableCheckBox show={show.udfChkBox10} label={labels.udfChkBox10} data={props.item.userDefinedFields.udfChkBox10} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                </View>

                <View style={{ margin: notePadding }}>
                    <HideableTextField show={show.udfNote01} label={labels.udfNote01} data={props.item.userDefinedFields.udfNote01} />
                    <HideableTextField show={show.udfNote02} label={labels.udfNote02} data={props.item.userDefinedFields.udfNote02} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNote03} label={labels.udfNote03} data={props.item.userDefinedFields.udfNote03} />
                    <HideableTextField show={show.udfNote04} label={labels.udfNote04} data={props.item.userDefinedFields.udfNote04} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNote05} label={labels.udfNote05} data={props.item.userDefinedFields.udfNote05} />
                    <HideableTextField show={show.udfNote06} label={labels.udfNote06} data={props.item.userDefinedFields.udfNote06} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNote07} label={labels.udfNote07} data={props.item.userDefinedFields.udfNote07} />
                    <HideableTextField show={show.udfNote08} label={labels.udfNote08} data={props.item.userDefinedFields.udfNote08} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                    <HideableTextField show={show.udfNote09} label={labels.udfNote09} data={props.item.userDefinedFields.udfNote09} />
                    <HideableTextField show={show.udfNote10} label={labels.udfNote10} data={props.item.userDefinedFields.udfNote10} />
                    <HideableLine rightLabel={labels.status} rightData={item.status} leftLabel={labels.organization} leftData={item.organization} rightShow={show.workOrderStatus} leftShow={show.organization} />
                </View>
            </View>
        </View>
    );
}

export default UserDefinedFields;