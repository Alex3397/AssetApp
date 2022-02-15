import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';

const UserDefinedFields = (props) => {

    const { colors } = useTheme();
    const [charPadding, setCharPadding] = useState(0);
    const [numPadding, setNumPadding] = useState(0);
    const [datePadding, setDatePadding] = useState(0);
    const [checkPadding, setCheckPadding] = useState(0);
    const [notePadding, setNotePadding] = useState(0);

    let labels = props.userLabels.userDefinedFields;

    if (
        props.item.userDefinedFields.udfChar01 == ""
        && props.item.userDefinedFields.udfChar02 == ""
        && props.item.userDefinedFields.udfChar03 == ""
        && props.item.userDefinedFields.udfChar04 == ""
        && props.item.userDefinedFields.udfChar05 == ""
        && props.item.userDefinedFields.udfChar06 == ""
        && props.item.userDefinedFields.udfChar07 == ""
        && props.item.userDefinedFields.udfChar08 == ""
        && props.item.userDefinedFields.udfChar09 == ""
        && props.item.userDefinedFields.udfChar10 == ""
        && props.item.userDefinedFields.udfChar11 == ""
        && props.item.userDefinedFields.udfChar12 == ""
        && props.item.userDefinedFields.udfChar13 == ""
        && props.item.userDefinedFields.udfChar14 == ""
        && props.item.userDefinedFields.udfChar10 == ""
        && props.item.userDefinedFields.udfChar16 == ""
        && props.item.userDefinedFields.udfChar17 == ""
        && props.item.userDefinedFields.udfChar18 == ""
        && props.item.userDefinedFields.udfChar19 == ""
        && props.item.userDefinedFields.udfChar20 == ""
        && props.item.userDefinedFields.udfChar21 == ""
        && props.item.userDefinedFields.udfChar22 == ""
        && props.item.userDefinedFields.udfChar23 == ""
        && props.item.userDefinedFields.udfChar24 == ""
        && props.item.userDefinedFields.udfChar25 == ""
        && props.item.userDefinedFields.udfChar26 == ""
        && props.item.userDefinedFields.udfChar27 == ""
        && props.item.userDefinedFields.udfChar28 == ""
        && props.item.userDefinedFields.udfChar29 == ""
        && props.item.userDefinedFields.udfChar30 == ""
        && props.item.userDefinedFields.udfChar31 == ""
        && props.item.userDefinedFields.udfChar32 == ""
        && props.item.userDefinedFields.udfChar33 == ""
        && props.item.userDefinedFields.udfChar34 == ""
        && props.item.userDefinedFields.udfChar35 == ""
        && props.item.userDefinedFields.udfChar36 == ""
        && props.item.userDefinedFields.udfChar37 == ""
        && props.item.userDefinedFields.udfChar38 == ""
        && props.item.userDefinedFields.udfChar39 == ""
        && props.item.userDefinedFields.udfChar40 == ""
        && props.item.userDefinedFields.udfChar41 == ""
        && props.item.userDefinedFields.udfChar42 == ""
        && props.item.userDefinedFields.udfChar43 == ""
        && props.item.userDefinedFields.udfChar44 == ""
        && props.item.userDefinedFields.udfChar45 == ""
        && props.item.userDefinedFields.udfNum1 == ""
        && props.item.userDefinedFields.udfNum2 == ""
        && props.item.userDefinedFields.udfNum3 == ""
        && props.item.userDefinedFields.udfNum4 == ""
        && props.item.userDefinedFields.udfNum5 == ""
        && props.item.userDefinedFields.udfNum6 == ""
        && props.item.userDefinedFields.udfNum7 == ""
        && props.item.userDefinedFields.udfNum8 == ""
        && props.item.userDefinedFields.udfNum9 == ""
        && props.item.userDefinedFields.udfNum10 == ""
        && props.item.userDefinedFields.udfDate1 == ""
        && props.item.userDefinedFields.udfDate2 == ""
        && props.item.userDefinedFields.udfDate3 == ""
        && props.item.userDefinedFields.udfDate4 == ""
        && props.item.userDefinedFields.udfDate5 == ""
        && props.item.userDefinedFields.udfDate6 == ""
        && props.item.userDefinedFields.udfDate7 == ""
        && props.item.userDefinedFields.udfDate8 == ""
        && props.item.userDefinedFields.udfDate9 == ""
        && props.item.userDefinedFields.udfDate10 == ""
        && (props.item.userDefinedFields.udfChkBox01 == "false" || props.item.userDefinedFields.udfChkBox01 == "")
        && (props.item.userDefinedFields.udfChkBox02 == "false" || props.item.userDefinedFields.udfChkBox02 == "")
        && (props.item.userDefinedFields.udfChkBox03 == "false" || props.item.userDefinedFields.udfChkBox03 == "")
        && (props.item.userDefinedFields.udfChkBox04 == "false" || props.item.userDefinedFields.udfChkBox04 == "")
        && (props.item.userDefinedFields.udfChkBox05 == "false" || props.item.userDefinedFields.udfChkBox05 == "")
        && (props.item.userDefinedFields.udfChkBox06 == "false" || props.item.userDefinedFields.udfChkBox06 == "")
        && (props.item.userDefinedFields.udfChkBox07 == "false" || props.item.userDefinedFields.udfChkBox07 == "")
        && (props.item.userDefinedFields.udfChkBox08 == "false" || props.item.userDefinedFields.udfChkBox08 == "")
        && (props.item.userDefinedFields.udfChkBox09 == "false" || props.item.userDefinedFields.udfChkBox09 == "")
        && (props.item.userDefinedFields.udfChkBox10 == "false" || props.item.userDefinedFields.udfChkBox10 == "")
        && props.item.userDefinedFields.udfNote01 == ""
        && props.item.userDefinedFields.udfNote02 == ""
        && props.item.userDefinedFields.udfNote03 == ""
        && props.item.userDefinedFields.udfNote04 == ""
        && props.item.userDefinedFields.udfNote05 == ""
        && props.item.userDefinedFields.udfNote06 == ""
        && props.item.userDefinedFields.udfNote07 == ""
        && props.item.userDefinedFields.udfNote08 == ""
        && props.item.userDefinedFields.udfNote09 == ""
        && props.item.userDefinedFields.udfNote10 == ""
    ) {
        return (<></>)
    }

    if (
        (props.item.userDefinedFields.udfChar01 != ""
            || props.item.userDefinedFields.udfChar02 != ""
            || props.item.userDefinedFields.udfChar03 != ""
            || props.item.userDefinedFields.udfChar04 != ""
            || props.item.userDefinedFields.udfChar05 != ""
            || props.item.userDefinedFields.udfChar06 != ""
            || props.item.userDefinedFields.udfChar07 != ""
            || props.item.userDefinedFields.udfChar08 != ""
            || props.item.userDefinedFields.udfChar09 != ""
            || props.item.userDefinedFields.udfChar10 != ""
            || props.item.userDefinedFields.udfChar11 != ""
            || props.item.userDefinedFields.udfChar12 != ""
            || props.item.userDefinedFields.udfChar13 != ""
            || props.item.userDefinedFields.udfChar14 != ""
            || props.item.userDefinedFields.udfChar10 != ""
            || props.item.userDefinedFields.udfChar16 != ""
            || props.item.userDefinedFields.udfChar17 != ""
            || props.item.userDefinedFields.udfChar18 != ""
            || props.item.userDefinedFields.udfChar19 != ""
            || props.item.userDefinedFields.udfChar20 != ""
            || props.item.userDefinedFields.udfChar21 != ""
            || props.item.userDefinedFields.udfChar22 != ""
            || props.item.userDefinedFields.udfChar23 != ""
            || props.item.userDefinedFields.udfChar24 != ""
            || props.item.userDefinedFields.udfChar25 != ""
            || props.item.userDefinedFields.udfChar26 != ""
            || props.item.userDefinedFields.udfChar27 != ""
            || props.item.userDefinedFields.udfChar28 != ""
            || props.item.userDefinedFields.udfChar29 != ""
            || props.item.userDefinedFields.udfChar30 != ""
            || props.item.userDefinedFields.udfChar31 != ""
            || props.item.userDefinedFields.udfChar32 != ""
            || props.item.userDefinedFields.udfChar33 != ""
            || props.item.userDefinedFields.udfChar34 != ""
            || props.item.userDefinedFields.udfChar35 != ""
            || props.item.userDefinedFields.udfChar36 != ""
            || props.item.userDefinedFields.udfChar37 != ""
            || props.item.userDefinedFields.udfChar38 != ""
            || props.item.userDefinedFields.udfChar39 != ""
            || props.item.userDefinedFields.udfChar40 != ""
            || props.item.userDefinedFields.udfChar41 != ""
            || props.item.userDefinedFields.udfChar42 != ""
            || props.item.userDefinedFields.udfChar43 != ""
            || props.item.userDefinedFields.udfChar44 != ""
            || props.item.userDefinedFields.udfChar45 != "") && charPadding != 10
    ) {
        setCharPadding(10);
    }

    if (
        (props.item.userDefinedFields.udfNum1 != ""
            || props.item.userDefinedFields.udfNum2 != ""
            || props.item.userDefinedFields.udfNum3 != ""
            || props.item.userDefinedFields.udfNum4 != ""
            || props.item.userDefinedFields.udfNum5 != ""
            || props.item.userDefinedFields.udfNum6 != ""
            || props.item.userDefinedFields.udfNum7 != ""
            || props.item.userDefinedFields.udfNum8 != ""
            || props.item.userDefinedFields.udfNum9 != ""
            || props.item.userDefinedFields.udfNum10 != "") && numPadding != 10
    ) {
        setNumPadding(10);
    }

    if (
        (props.item.userDefinedFields.udfDate1 != ""
            || props.item.userDefinedFields.udfDate2 != ""
            || props.item.userDefinedFields.udfDate3 != ""
            || props.item.userDefinedFields.udfDate4 != ""
            || props.item.userDefinedFields.udfDate5 != ""
            || props.item.userDefinedFields.udfDate6 != ""
            || props.item.userDefinedFields.udfDate7 != ""
            || props.item.userDefinedFields.udfDate8 != ""
            || props.item.userDefinedFields.udfDate9 != ""
            || props.item.userDefinedFields.udfDate10 != "") && datePadding != 10
    ) {
        setDatePadding(10);
    }

    if (
        ((props.item.userDefinedFields.udfChkBox01 != "false" && props.item.userDefinedFields.udfChkBox01 != "")
            || (props.item.userDefinedFields.udfChkBox02 != "false" && props.item.userDefinedFields.udfChkBox02 != "")
            || (props.item.userDefinedFields.udfChkBox03 != "false" && props.item.userDefinedFields.udfChkBox03 != "")
            || (props.item.userDefinedFields.udfChkBox04 != "false" && props.item.userDefinedFields.udfChkBox04 != "")
            || (props.item.userDefinedFields.udfChkBox05 != "false" && props.item.userDefinedFields.udfChkBox05 != "")
            || (props.item.userDefinedFields.udfChkBox06 != "false" && props.item.userDefinedFields.udfChkBox06 != "")
            || (props.item.userDefinedFields.udfChkBox07 != "false" && props.item.userDefinedFields.udfChkBox07 != "")
            || (props.item.userDefinedFields.udfChkBox08 != "false" && props.item.userDefinedFields.udfChkBox08 != "")
            || (props.item.userDefinedFields.udfChkBox09 != "false" && props.item.userDefinedFields.udfChkBox09 != "")
            || (props.item.userDefinedFields.udfChkBox10 != "false" && props.item.userDefinedFields.udfChkBox10 != "")) && checkPadding != 10
    ) {
        setCheckPadding(10);
    }

    if (
        (props.item.userDefinedFields.udfNote01 != ""
            || props.item.userDefinedFields.udfNote02 != ""
            || props.item.userDefinedFields.udfNote03 != ""
            || props.item.userDefinedFields.udfNote04 != ""
            || props.item.userDefinedFields.udfNote05 != ""
            || props.item.userDefinedFields.udfNote06 != ""
            || props.item.userDefinedFields.udfNote07 != ""
            || props.item.userDefinedFields.udfNote08 != ""
            || props.item.userDefinedFields.udfNote09 != ""
            || props.item.userDefinedFields.udfNote10 != "") && notePadding != 10
    ) {
        setNotePadding(10);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 10, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos definidos pelo usuário</Text>

            <View>
                <View style={{ margin: charPadding }}>
                    <HideableTextField show={false} label={labels.udfChar01} data={props.item.userDefinedFields.udfChar01} />
                    <HideableTextField show={false} label={labels.udfChar02} data={props.item.userDefinedFields.udfChar02} />
                    <HideableTextField show={false} label={labels.udfChar03} data={props.item.userDefinedFields.udfChar03} />
                    <HideableTextField show={false} label={labels.udfChar04} data={props.item.userDefinedFields.udfChar04} />
                    <HideableTextField show={false} label={labels.udfChar05} data={props.item.userDefinedFields.udfChar05} />
                    <HideableTextField show={false} label={labels.udfChar06} data={props.item.userDefinedFields.udfChar06} />
                    <HideableTextField show={false} label={labels.udfChar07} data={props.item.userDefinedFields.udfChar07} />
                    <HideableTextField show={false} label={labels.udfChar08} data={props.item.userDefinedFields.udfChar08} />
                    <HideableTextField show={false} label={labels.udfChar09} data={props.item.userDefinedFields.udfChar09} />
                    <HideableTextField show={false} label={labels.udfChar10} data={props.item.userDefinedFields.udfChar10} />
                    <HideableTextField show={false} label={labels.udfChar11} data={props.item.userDefinedFields.udfChar11} />
                    <HideableTextField show={false} label={labels.udfChar12} data={props.item.userDefinedFields.udfChar12} />
                    <HideableTextField show={false} label={labels.udfChar13} data={props.item.userDefinedFields.udfChar13} />
                    <HideableTextField show={false} label={labels.udfChar14} data={props.item.userDefinedFields.udfChar14} />
                    <HideableTextField show={false} label={labels.udfChar15} data={props.item.userDefinedFields.udfChar15} />
                    <HideableTextField show={false} label={labels.udfChar16} data={props.item.userDefinedFields.udfChar16} />
                    <HideableTextField show={false} label={labels.udfChar17} data={props.item.userDefinedFields.udfChar17} />
                    <HideableTextField show={false} label={labels.udfChar18} data={props.item.userDefinedFields.udfChar18} />
                    <HideableTextField show={false} label={labels.udfChar19} data={props.item.userDefinedFields.udfChar19} />
                    <HideableTextField show={false} label={labels.udfChar20} data={props.item.userDefinedFields.udfChar20} />
                    <HideableTextField show={false} label={labels.udfChar21} data={props.item.userDefinedFields.udfChar21} />
                    <HideableTextField show={false} label={labels.udfChar22} data={props.item.userDefinedFields.udfChar22} />
                    <HideableTextField show={false} label={labels.udfChar23} data={props.item.userDefinedFields.udfChar23} />
                    <HideableTextField show={false} label={labels.udfChar24} data={props.item.userDefinedFields.udfChar24} />
                    <HideableTextField show={false} label={labels.udfChar25} data={props.item.userDefinedFields.udfChar25} />
                    <HideableTextField show={false} label={labels.udfChar26} data={props.item.userDefinedFields.udfChar26} />
                    <HideableTextField show={false} label={labels.udfChar27} data={props.item.userDefinedFields.udfChar27} />
                    <HideableTextField show={false} label={labels.udfChar28} data={props.item.userDefinedFields.udfChar28} />
                    <HideableTextField show={false} label={labels.udfChar29} data={props.item.userDefinedFields.udfChar29} />
                    <HideableTextField show={false} label={labels.udfChar30} data={props.item.userDefinedFields.udfChar30} />
                    <HideableTextField show={false} label={labels.udfChar31} data={props.item.userDefinedFields.udfChar31} />
                    <HideableTextField show={false} label={labels.udfChar32} data={props.item.userDefinedFields.udfChar32} />
                    <HideableTextField show={false} label={labels.udfChar33} data={props.item.userDefinedFields.udfChar33} />
                    <HideableTextField show={false} label={labels.udfChar34} data={props.item.userDefinedFields.udfChar34} />
                    <HideableTextField show={false} label={labels.udfChar35} data={props.item.userDefinedFields.udfChar35} />
                    <HideableTextField show={false} label={labels.udfChar36} data={props.item.userDefinedFields.udfChar36} />
                    <HideableTextField show={false} label={labels.udfChar37} data={props.item.userDefinedFields.udfChar37} />
                    <HideableTextField show={false} label={labels.udfChar38} data={props.item.userDefinedFields.udfChar38} />
                    <HideableTextField show={false} label={labels.udfChar39} data={props.item.userDefinedFields.udfChar39} />
                    <HideableTextField show={false} label={labels.udfChar40} data={props.item.userDefinedFields.udfChar40} />
                    <HideableTextField show={false} label={labels.udfChar41} data={props.item.userDefinedFields.udfChar41} />
                    <HideableTextField show={false} label={labels.udfChar42} data={props.item.userDefinedFields.udfChar42} />
                    <HideableTextField show={false} label={labels.udfChar43} data={props.item.userDefinedFields.udfChar43} />
                    <HideableTextField show={false} label={labels.udfChar44} data={props.item.userDefinedFields.udfChar44} />
                    <HideableTextField show={false} label={labels.udfChar45} data={props.item.userDefinedFields.udfChar45} />
                </View>

                <View style={{ margin: numPadding }}>
                    <HideableTextField show={false} label={labels.udfNum1} data={props.item.userDefinedFields.udfNum1} />
                    <HideableTextField show={false} label={labels.udfNum2} data={props.item.userDefinedFields.udfNum2} />
                    <HideableTextField show={false} label={labels.udfNum3} data={props.item.userDefinedFields.udfNum3} />
                    <HideableTextField show={false} label={labels.udfNum4} data={props.item.userDefinedFields.udfNum4} />
                    <HideableTextField show={false} label={labels.udfNum5} data={props.item.userDefinedFields.udfNum5} />
                    <HideableTextField show={false} label={labels.udfNum6} data={props.item.userDefinedFields.udfNum6} />
                    <HideableTextField show={false} label={labels.udfNum7} data={props.item.userDefinedFields.udfNum7} />
                    <HideableTextField show={false} label={labels.udfNum8} data={props.item.userDefinedFields.udfNum8} />
                    <HideableTextField show={false} label={labels.udfNum9} data={props.item.userDefinedFields.udfNum9} />
                    <HideableTextField show={false} label={labels.udfNum10} data={props.item.userDefinedFields.udfNum10} />
                </View>

                <View style={{ margin: datePadding }}>
                    <HideableTextField show={false} label={labels.udfDate1} data={props.item.userDefinedFields.udfDate1} />
                    <HideableTextField show={false} label={labels.udfDate2} data={props.item.userDefinedFields.udfDate2} />
                    <HideableTextField show={false} label={labels.udfDate3} data={props.item.userDefinedFields.udfDate3} />
                    <HideableTextField show={false} label={labels.udfDate4} data={props.item.userDefinedFields.udfDate4} />
                    <HideableTextField show={false} label={labels.udfDate5} data={props.item.userDefinedFields.udfDate5} />
                    <HideableTextField show={false} label={labels.udfDate6} data={props.item.userDefinedFields.udfDate6} />
                    <HideableTextField show={false} label={labels.udfDate7} data={props.item.userDefinedFields.udfDate7} />
                    <HideableTextField show={false} label={labels.udfDate8} data={props.item.userDefinedFields.udfDate8} />
                    <HideableTextField show={false} label={labels.udfDate9} data={props.item.userDefinedFields.udfDate9} />
                    <HideableTextField show={false} label={labels.udfDate10} data={props.item.userDefinedFields.udfDate10} />
                </View>

                <View style={{ margin: checkPadding }}>
                    <HideableCheckBox show={false} label={labels.udfChkBox01} data={props.item.userDefinedFields.udfChkBox01} />
                    <HideableCheckBox show={false} label={labels.udfChkBox02} data={props.item.userDefinedFields.udfChkBox02} />
                    <HideableCheckBox show={false} label={labels.udfChkBox03} data={props.item.userDefinedFields.udfChkBox03} />
                    <HideableCheckBox show={false} label={labels.udfChkBox04} data={props.item.userDefinedFields.udfChkBox04} />
                    <HideableCheckBox show={false} label={labels.udfChkBox05} data={props.item.userDefinedFields.udfChkBox05} />
                    <HideableCheckBox show={false} label={labels.udfChkBox06} data={props.item.userDefinedFields.udfChkBox06} />
                    <HideableCheckBox show={false} label={labels.udfChkBox07} data={props.item.userDefinedFields.udfChkBox07} />
                    <HideableCheckBox show={false} label={labels.udfChkBox08} data={props.item.userDefinedFields.udfChkBox08} />
                    <HideableCheckBox show={false} label={labels.udfChkBox09} data={props.item.userDefinedFields.udfChkBox09} />
                    <HideableCheckBox show={false} label={labels.udfChkBox10} data={props.item.userDefinedFields.udfChkBox10} />
                </View>

                <View style={{ margin: notePadding }}>
                    <HideableTextField show={false} label={labels.udfNote01Labels} data={props.item.userDefinedFields.udfNote01} />
                    <HideableTextField show={false} label={labels.udfNote02Labels} data={props.item.userDefinedFields.udfNote02} />
                    <HideableTextField show={false} label={labels.udfNote03Labels} data={props.item.userDefinedFields.udfNote03} />
                    <HideableTextField show={false} label={labels.udfNote04Labels} data={props.item.userDefinedFields.udfNote04} />
                    <HideableTextField show={false} label={labels.udfNote05Labels} data={props.item.userDefinedFields.udfNote05} />
                    <HideableTextField show={false} label={labels.udfNote06Labels} data={props.item.userDefinedFields.udfNote06} />
                    <HideableTextField show={false} label={labels.udfNote07Labels} data={props.item.userDefinedFields.udfNote07} />
                    <HideableTextField show={false} label={labels.udfNote08Labels} data={props.item.userDefinedFields.udfNote08} />
                    <HideableTextField show={false} label={labels.udfNote09Labels} data={props.item.userDefinedFields.udfNote09} />
                    <HideableTextField show={false} label={labels.udfNote10Labels} data={props.item.userDefinedFields.udfNote10} />
                </View>
            </View>
        </View>
    );
}

export default UserDefinedFields;