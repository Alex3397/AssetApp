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
                    <HideableTextField show={false} label={props.userLabels.udfChar01Label} data={props.item.userDefinedFields.udfChar01} />
                    <HideableTextField show={false} label={props.userLabels.udfChar02Label} data={props.item.userDefinedFields.udfChar02} />
                    <HideableTextField show={false} label={props.userLabels.udfChar03Label} data={props.item.userDefinedFields.udfChar03} />
                    <HideableTextField show={false} label={props.userLabels.udfChar04Label} data={props.item.userDefinedFields.udfChar04} />
                    <HideableTextField show={false} label={props.userLabels.udfChar05Label} data={props.item.userDefinedFields.udfChar05} />
                    <HideableTextField show={false} label={props.userLabels.udfChar06Label} data={props.item.userDefinedFields.udfChar06} />
                    <HideableTextField show={false} label={props.userLabels.udfChar07Label} data={props.item.userDefinedFields.udfChar07} />
                    <HideableTextField show={false} label={props.userLabels.udfChar08Label} data={props.item.userDefinedFields.udfChar08} />
                    <HideableTextField show={false} label={props.userLabels.udfChar09Label} data={props.item.userDefinedFields.udfChar09} />
                    <HideableTextField show={false} label={props.userLabels.udfChar10Label} data={props.item.userDefinedFields.udfChar10} />
                    <HideableTextField show={false} label={props.userLabels.udfChar11Label} data={props.item.userDefinedFields.udfChar11} />
                    <HideableTextField show={false} label={props.userLabels.udfChar12Label} data={props.item.userDefinedFields.udfChar12} />
                    <HideableTextField show={false} label={props.userLabels.udfChar13Label} data={props.item.userDefinedFields.udfChar13} />
                    <HideableTextField show={false} label={props.userLabels.udfChar14Label} data={props.item.userDefinedFields.udfChar14} />
                    <HideableTextField show={false} label={props.userLabels.udfChar15Label} data={props.item.userDefinedFields.udfChar15} />
                    <HideableTextField show={false} label={props.userLabels.udfChar16Label} data={props.item.userDefinedFields.udfChar16} />
                    <HideableTextField show={false} label={props.userLabels.udfChar17Label} data={props.item.userDefinedFields.udfChar17} />
                    <HideableTextField show={false} label={props.userLabels.udfChar18Label} data={props.item.userDefinedFields.udfChar18} />
                    <HideableTextField show={false} label={props.userLabels.udfChar19Label} data={props.item.userDefinedFields.udfChar19} />
                    <HideableTextField show={false} label={props.userLabels.udfChar20Label} data={props.item.userDefinedFields.udfChar20} />
                    <HideableTextField show={false} label={props.userLabels.udfChar21Label} data={props.item.userDefinedFields.udfChar21} />
                    <HideableTextField show={false} label={props.userLabels.udfChar22Label} data={props.item.userDefinedFields.udfChar22} />
                    <HideableTextField show={false} label={props.userLabels.udfChar23Label} data={props.item.userDefinedFields.udfChar23} />
                    <HideableTextField show={false} label={props.userLabels.udfChar24Label} data={props.item.userDefinedFields.udfChar24} />
                    <HideableTextField show={false} label={props.userLabels.udfChar25Label} data={props.item.userDefinedFields.udfChar25} />
                    <HideableTextField show={false} label={props.userLabels.udfChar26Label} data={props.item.userDefinedFields.udfChar26} />
                    <HideableTextField show={false} label={props.userLabels.udfChar27Label} data={props.item.userDefinedFields.udfChar27} />
                    <HideableTextField show={false} label={props.userLabels.udfChar28Label} data={props.item.userDefinedFields.udfChar28} />
                    <HideableTextField show={false} label={props.userLabels.udfChar29Label} data={props.item.userDefinedFields.udfChar29} />
                    <HideableTextField show={false} label={props.userLabels.udfChar30Label} data={props.item.userDefinedFields.udfChar30} />
                    <HideableTextField show={false} label={props.userLabels.udfChar31Label} data={props.item.userDefinedFields.udfChar31} />
                    <HideableTextField show={false} label={props.userLabels.udfChar32Label} data={props.item.userDefinedFields.udfChar32} />
                    <HideableTextField show={false} label={props.userLabels.udfChar33Label} data={props.item.userDefinedFields.udfChar33} />
                    <HideableTextField show={false} label={props.userLabels.udfChar34Label} data={props.item.userDefinedFields.udfChar34} />
                    <HideableTextField show={false} label={props.userLabels.udfChar35Label} data={props.item.userDefinedFields.udfChar35} />
                    <HideableTextField show={false} label={props.userLabels.udfChar36Label} data={props.item.userDefinedFields.udfChar36} />
                    <HideableTextField show={false} label={props.userLabels.udfChar37Label} data={props.item.userDefinedFields.udfChar37} />
                    <HideableTextField show={false} label={props.userLabels.udfChar38Label} data={props.item.userDefinedFields.udfChar38} />
                    <HideableTextField show={false} label={props.userLabels.udfChar39Label} data={props.item.userDefinedFields.udfChar39} />
                    <HideableTextField show={false} label={props.userLabels.udfChar40Label} data={props.item.userDefinedFields.udfChar40} />
                    <HideableTextField show={false} label={props.userLabels.udfChar41Label} data={props.item.userDefinedFields.udfChar41} />
                    <HideableTextField show={false} label={props.userLabels.udfChar42Label} data={props.item.userDefinedFields.udfChar42} />
                    <HideableTextField show={false} label={props.userLabels.udfChar43Label} data={props.item.userDefinedFields.udfChar43} />
                    <HideableTextField show={false} label={props.userLabels.udfChar44Label} data={props.item.userDefinedFields.udfChar44} />
                    <HideableTextField show={false} label={props.userLabels.udfChar45Label} data={props.item.userDefinedFields.udfChar45} />
                </View>

                <View style={{ margin: numPadding }}>
                    <HideableTextField show={false} label={props.userLabels.udfNum1Label} data={props.item.userDefinedFields.udfNum1} />
                    <HideableTextField show={false} label={props.userLabels.udfNum2Label} data={props.item.userDefinedFields.udfNum2} />
                    <HideableTextField show={false} label={props.userLabels.udfNum3Label} data={props.item.userDefinedFields.udfNum3} />
                    <HideableTextField show={false} label={props.userLabels.udfNum4Label} data={props.item.userDefinedFields.udfNum4} />
                    <HideableTextField show={false} label={props.userLabels.udfNum5Label} data={props.item.userDefinedFields.udfNum5} />
                    <HideableTextField show={false} label={props.userLabels.udfNum6Label} data={props.item.userDefinedFields.udfNum6} />
                    <HideableTextField show={false} label={props.userLabels.udfNum7Label} data={props.item.userDefinedFields.udfNum7} />
                    <HideableTextField show={false} label={props.userLabels.udfNum8Label} data={props.item.userDefinedFields.udfNum8} />
                    <HideableTextField show={false} label={props.userLabels.udfNum9Label} data={props.item.userDefinedFields.udfNum9} />
                    <HideableTextField show={false} label={props.userLabels.udfNum10Label} data={props.item.userDefinedFields.udfNum10} />
                </View>

                <View style={{ margin: datePadding }}>
                    <HideableTextField show={false} label={props.userLabels.udfDate1Label} data={props.item.userDefinedFields.udfDate1} />
                    <HideableTextField show={false} label={props.userLabels.udfDate2Label} data={props.item.userDefinedFields.udfDate2} />
                    <HideableTextField show={false} label={props.userLabels.udfDate3Label} data={props.item.userDefinedFields.udfDate3} />
                    <HideableTextField show={false} label={props.userLabels.udfDate4Label} data={props.item.userDefinedFields.udfDate4} />
                    <HideableTextField show={false} label={props.userLabels.udfDate5Label} data={props.item.userDefinedFields.udfDate5} />
                    <HideableTextField show={false} label={props.userLabels.udfDate6Label} data={props.item.userDefinedFields.udfDate6} />
                    <HideableTextField show={false} label={props.userLabels.udfDate7Label} data={props.item.userDefinedFields.udfDate7} />
                    <HideableTextField show={false} label={props.userLabels.udfDate8Label} data={props.item.userDefinedFields.udfDate8} />
                    <HideableTextField show={false} label={props.userLabels.udfDate9Label} data={props.item.userDefinedFields.udfDate9} />
                    <HideableTextField show={false} label={props.userLabels.udfDate10Label} data={props.item.userDefinedFields.udfDate10} />
                </View>

                <View style={{ margin: checkPadding }}>
                    <HideableCheckBox label={props.userLabels.udfChkBox01Label} data={props.item.userDefinedFields.udfChkBox01} />
                    <HideableCheckBox label={props.userLabels.udfChkBox02Label} data={props.item.userDefinedFields.udfChkBox02} />
                    <HideableCheckBox label={props.userLabels.udfChkBox03Label} data={props.item.userDefinedFields.udfChkBox03} />
                    <HideableCheckBox label={props.userLabels.udfChkBox04Label} data={props.item.userDefinedFields.udfChkBox04} />
                    <HideableCheckBox label={props.userLabels.udfChkBox05Label} data={props.item.userDefinedFields.udfChkBox05} />
                    <HideableCheckBox label={props.userLabels.udfChkBox06Label} data={props.item.userDefinedFields.udfChkBox06} />
                    <HideableCheckBox label={props.userLabels.udfChkBox07Label} data={props.item.userDefinedFields.udfChkBox07} />
                    <HideableCheckBox label={props.userLabels.udfChkBox08Label} data={props.item.userDefinedFields.udfChkBox08} />
                    <HideableCheckBox label={props.userLabels.udfChkBox09Label} data={props.item.userDefinedFields.udfChkBox09} />
                    <HideableCheckBox label={props.userLabels.udfChkBox10Label} data={props.item.userDefinedFields.udfChkBox10} />
                </View>

                <View style={{ margin: notePadding }}>
                    <HideableTextField show={false} label={props.userLabels.udfNote01Labels} data={props.item.userDefinedFields.udfNote01} />
                    <HideableTextField show={false} label={props.userLabels.udfNote02Labels} data={props.item.userDefinedFields.udfNote02} />
                    <HideableTextField show={false} label={props.userLabels.udfNote03Labels} data={props.item.userDefinedFields.udfNote03} />
                    <HideableTextField show={false} label={props.userLabels.udfNote04Labels} data={props.item.userDefinedFields.udfNote04} />
                    <HideableTextField show={false} label={props.userLabels.udfNote05Labels} data={props.item.userDefinedFields.udfNote05} />
                    <HideableTextField show={false} label={props.userLabels.udfNote06Labels} data={props.item.userDefinedFields.udfNote06} />
                    <HideableTextField show={false} label={props.userLabels.udfNote07Labels} data={props.item.userDefinedFields.udfNote07} />
                    <HideableTextField show={false} label={props.userLabels.udfNote08Labels} data={props.item.userDefinedFields.udfNote08} />
                    <HideableTextField show={false} label={props.userLabels.udfNote09Labels} data={props.item.userDefinedFields.udfNote09} />
                    <HideableTextField show={false} label={props.userLabels.udfNote10Labels} data={props.item.userDefinedFields.udfNote10} />
                </View>
            </View>
        </View>
    );
}

export default UserDefinedFields;