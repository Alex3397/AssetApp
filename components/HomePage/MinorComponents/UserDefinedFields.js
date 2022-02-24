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
    const [parentWidth, setParentWidth] = useState();

    function onLayout(event) {
        setParentWidth(event.nativeEvent.layout.width);
    }

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
        <View style={{ backgroundColor: colors.card, padding: 10, margin: 10, borderRadius: 25 }} onLayout={(event) => onLayout(event)} >
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos definidos pelo usuário</Text>
            </View>

            <View>
                <View style={{ margin: charPadding }}>
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar02} rightData={props.item.userDefinedFields.udfChar02} leftLabel={labels.udfChar01} leftData={props.item.userDefinedFields.udfChar01} rightShow={show.udfChar02} leftShow={show.udfChar01} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar04} rightData={props.item.userDefinedFields.udfChar04} leftLabel={labels.udfChar03} leftData={props.item.userDefinedFields.udfChar03} rightShow={show.udfChar04} leftShow={show.udfChar03} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar06} rightData={props.item.userDefinedFields.udfChar06} leftLabel={labels.udfChar05} leftData={props.item.userDefinedFields.udfChar05} rightShow={show.udfChar06} leftShow={show.udfChar05} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar08} rightData={props.item.userDefinedFields.udfChar08} leftLabel={labels.udfChar07} leftData={props.item.userDefinedFields.udfChar07} rightShow={show.udfChar08} leftShow={show.udfChar07} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar10} rightData={props.item.userDefinedFields.udfChar10} leftLabel={labels.udfChar09} leftData={props.item.userDefinedFields.udfChar09} rightShow={show.udfChar10} leftShow={show.udfChar09} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar12} rightData={props.item.userDefinedFields.udfChar12} leftLabel={labels.udfChar11} leftData={props.item.userDefinedFields.udfChar11} rightShow={show.udfChar12} leftShow={show.udfChar11} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar14} rightData={props.item.userDefinedFields.udfChar14} leftLabel={labels.udfChar13} leftData={props.item.userDefinedFields.udfChar13} rightShow={show.udfChar14} leftShow={show.udfChar13} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar16} rightData={props.item.userDefinedFields.udfChar16} leftLabel={labels.udfChar15} leftData={props.item.userDefinedFields.udfChar15} rightShow={show.udfChar16} leftShow={show.udfChar15} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar18} rightData={props.item.userDefinedFields.udfChar18} leftLabel={labels.udfChar17} leftData={props.item.userDefinedFields.udfChar17} rightShow={show.udfChar18} leftShow={show.udfChar17} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar20} rightData={props.item.userDefinedFields.udfChar20} leftLabel={labels.udfChar19} leftData={props.item.userDefinedFields.udfChar19} rightShow={show.udfChar20} leftShow={show.udfChar19} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar22} rightData={props.item.userDefinedFields.udfChar22} leftLabel={labels.udfChar21} leftData={props.item.userDefinedFields.udfChar21} rightShow={show.udfChar22} leftShow={show.udfChar21} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar24} rightData={props.item.userDefinedFields.udfChar24} leftLabel={labels.udfChar23} leftData={props.item.userDefinedFields.udfChar23} rightShow={show.udfChar24} leftShow={show.udfChar23} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar26} rightData={props.item.userDefinedFields.udfChar26} leftLabel={labels.udfChar25} leftData={props.item.userDefinedFields.udfChar25} rightShow={show.udfChar26} leftShow={show.udfChar25} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar28} rightData={props.item.userDefinedFields.udfChar28} leftLabel={labels.udfChar27} leftData={props.item.userDefinedFields.udfChar27} rightShow={show.udfChar28} leftShow={show.udfChar27} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar30} rightData={props.item.userDefinedFields.udfChar30} leftLabel={labels.udfChar29} leftData={props.item.userDefinedFields.udfChar29} rightShow={show.udfChar30} leftShow={show.udfChar29} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar32} rightData={props.item.userDefinedFields.udfChar32} leftLabel={labels.udfChar31} leftData={props.item.userDefinedFields.udfChar31} rightShow={show.udfChar32} leftShow={show.udfChar31} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar34} rightData={props.item.userDefinedFields.udfChar34} leftLabel={labels.udfChar33} leftData={props.item.userDefinedFields.udfChar33} rightShow={show.udfChar34} leftShow={show.udfChar33} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar36} rightData={props.item.userDefinedFields.udfChar36} leftLabel={labels.udfChar35} leftData={props.item.userDefinedFields.udfChar35} rightShow={show.udfChar36} leftShow={show.udfChar35} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar38} rightData={props.item.userDefinedFields.udfChar38} leftLabel={labels.udfChar37} leftData={props.item.userDefinedFields.udfChar37} rightShow={show.udfChar38} leftShow={show.udfChar37} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar40} rightData={props.item.userDefinedFields.udfChar40} leftLabel={labels.udfChar39} leftData={props.item.userDefinedFields.udfChar39} rightShow={show.udfChar40} leftShow={show.udfChar39} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar42} rightData={props.item.userDefinedFields.udfChar42} leftLabel={labels.udfChar41} leftData={props.item.userDefinedFields.udfChar41} rightShow={show.udfChar42} leftShow={show.udfChar41} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChar44} rightData={props.item.userDefinedFields.udfChar44} leftLabel={labels.udfChar43} leftData={props.item.userDefinedFields.udfChar43} rightShow={show.udfChar44} leftShow={show.udfChar43} />
                    <HideableTextField show={show.udfChar45} label={labels.udfChar45} data={props.item.userDefinedFields.udfChar45} />
                </View>
                <View style={{ margin: numPadding }}>
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNum2} rightData={props.item.userDefinedFields.udfNum2} leftLabel={labels.udfNum1} leftData={props.item.userDefinedFields.udfNum1} rightShow={show.udfNum2} leftShow={show.udfNum1} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNum4} rightData={props.item.userDefinedFields.udfNum4} leftLabel={labels.udfNum3} leftData={props.item.userDefinedFields.udfNum3} rightShow={show.udfNum4} leftShow={show.udfNum3} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNum6} rightData={props.item.userDefinedFields.udfNum6} leftLabel={labels.udfNum5} leftData={props.item.userDefinedFields.udfNum5} rightShow={show.udfNum6} leftShow={show.udfNum5} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNum8} rightData={props.item.userDefinedFields.udfNum8} leftLabel={labels.udfNum7} leftData={props.item.userDefinedFields.udfNum7} rightShow={show.udfNum8} leftShow={show.udfNum7} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNum10} rightData={props.item.userDefinedFields.udfNum10} leftLabel={labels.udfNum9} leftData={props.item.userDefinedFields.udfNum9} rightShow={show.udfNum10} leftShow={show.udfNum9} />
                </View>
                <View style={{ margin: datePadding }}>
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfDate2} rightData={props.item.userDefinedFields.udfDate2} leftLabel={labels.udfDate1} leftData={props.item.userDefinedFields.udfDate1} rightShow={show.udfDate2} leftShow={show.udfDate1} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfDate4} rightData={props.item.userDefinedFields.udfDate4} leftLabel={labels.udfDate3} leftData={props.item.userDefinedFields.udfDate3} rightShow={show.udfDate4} leftShow={show.udfDate3} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfDate6} rightData={props.item.userDefinedFields.udfDate6} leftLabel={labels.udfDate5} leftData={props.item.userDefinedFields.udfDate5} rightShow={show.udfDate6} leftShow={show.udfDate5} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfDate8} rightData={props.item.userDefinedFields.udfDate8} leftLabel={labels.udfDate7} leftData={props.item.userDefinedFields.udfDate7} rightShow={show.udfDate8} leftShow={show.udfDate7} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfDate10} rightData={props.item.userDefinedFields.udfDate10} leftLabel={labels.udfDate9} leftData={props.item.userDefinedFields.udfDate9} rightShow={show.udfDate10} leftShow={show.udfDate9} />
                </View>
                <View style={{ margin: checkPadding }}>
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChkBox02} rightData={props.item.userDefinedFields.udfChkBox02} leftLabel={labels.udfChkBox01} leftData={props.item.userDefinedFields.udfChkBox01} rightShow={show.udfChkBox02} leftShow={show.udfChkBox01} type="checkbox" />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChkBox04} rightData={props.item.userDefinedFields.udfChkBox04} leftLabel={labels.udfChkBox03} leftData={props.item.userDefinedFields.udfChkBox03} rightShow={show.udfChkBox04} leftShow={show.udfChkBox03} type="checkbox" />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChkBox06} rightData={props.item.userDefinedFields.udfChkBox06} leftLabel={labels.udfChkBox05} leftData={props.item.userDefinedFields.udfChkBox05} rightShow={show.udfChkBox06} leftShow={show.udfChkBox05} type="checkbox" />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChkBox08} rightData={props.item.userDefinedFields.udfChkBox08} leftLabel={labels.udfChkBox07} leftData={props.item.userDefinedFields.udfChkBox07} rightShow={show.udfChkBox08} leftShow={show.udfChkBox07} type="checkbox" />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfChkBox10} rightData={props.item.userDefinedFields.udfChkBox10} leftLabel={labels.udfChkBox09} leftData={props.item.userDefinedFields.udfChkBox09} rightShow={show.udfChkBox10} leftShow={show.udfChkBox09} type="checkbox" />
                </View>
                <View style={{ margin: notePadding }}>
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNote02} rightData={props.item.userDefinedFields.udfNote02} leftLabel={labels.udfNote01} leftData={props.item.userDefinedFields.udfNote01} rightShow={show.udfNote02} leftShow={show.udfNote01} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNote04} rightData={props.item.userDefinedFields.udfNote04} leftLabel={labels.udfNote03} leftData={props.item.userDefinedFields.udfNote03} rightShow={show.udfNote04} leftShow={show.udfNote03} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNote06} rightData={props.item.userDefinedFields.udfNote06} leftLabel={labels.udfNote05} leftData={props.item.userDefinedFields.udfNote05} rightShow={show.udfNote06} leftShow={show.udfNote05} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNote08} rightData={props.item.userDefinedFields.udfNote08} leftLabel={labels.udfNote07} leftData={props.item.userDefinedFields.udfNote07} rightShow={show.udfNote08} leftShow={show.udfNote07} />
                    <HideableLine parentWidth={parentWidth} rightLabel={labels.udfNote10} rightData={props.item.userDefinedFields.udfNote10} leftLabel={labels.udfNote09} leftData={props.item.userDefinedFields.udfNote09} rightShow={show.udfNote10} leftShow={show.udfNote09} />
                </View>
            </View>
        </View>
    );
}

export default UserDefinedFields;