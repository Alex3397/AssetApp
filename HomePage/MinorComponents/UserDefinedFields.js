import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const UserDefinedFields = (props) => {
    const storage = new Storage();
    console.log("Created")

    const { colors } = useTheme();
    const [charPadding, setCharPadding] = useState(0);
    const [numPadding, setNumPadding] = useState(0);
    const [datePadding, setDatePadding] = useState(0);
    const [checkPadding, setCheckPadding] = useState(0);
    const [notePadding, setNotePadding] = useState(0);

    (async () => {
        var chars = await storage.getArticle("chars");
        if (chars == "true") { setCharPadding(10) };

        var nums = await storage.getArticle("nums");
        if (nums == "true") { setNumPadding(10) };

        var dates = await storage.getArticle("dates");
        if (dates == "true") { setDatePadding(10) };

        var checks = await storage.getArticle("checks");
        if (checks == "true") { setCheckPadding(10) };

        var notes = await storage.getArticle("notes");
        if (notes == "true") { setNotePadding(10) };
    })()

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos definidos pelo usuário</Text>

            <View>
                <View style={{ margin: charPadding }}>
                    <HideableTextField label={props.userLabels.udfChar01Label} data={props.item.userDefinedFields.udfChar01} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar02Label} data={props.item.userDefinedFields.udfChar02} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar03Label} data={props.item.userDefinedFields.udfChar03} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar04Label} data={props.item.userDefinedFields.udfChar04} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar05Label} data={props.item.userDefinedFields.udfChar05} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar06Label} data={props.item.userDefinedFields.udfChar06} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar07Label} data={props.item.userDefinedFields.udfChar07} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar08Label} data={props.item.userDefinedFields.udfChar08} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar09Label} data={props.item.userDefinedFields.udfChar09} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar10Label} data={props.item.userDefinedFields.udfChar10} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar11Label} data={props.item.userDefinedFields.udfChar11} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar12Label} data={props.item.userDefinedFields.udfChar12} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar13Label} data={props.item.userDefinedFields.udfChar13} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar14Label} data={props.item.userDefinedFields.udfChar14} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar15Label} data={props.item.userDefinedFields.udfChar15} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar16Label} data={props.item.userDefinedFields.udfChar16} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar17Label} data={props.item.userDefinedFields.udfChar17} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar18Label} data={props.item.userDefinedFields.udfChar18} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar19Label} data={props.item.userDefinedFields.udfChar19} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar20Label} data={props.item.userDefinedFields.udfChar20} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar21Label} data={props.item.userDefinedFields.udfChar21} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar22Label} data={props.item.userDefinedFields.udfChar22} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar23Label} data={props.item.userDefinedFields.udfChar23} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar24Label} data={props.item.userDefinedFields.udfChar24} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar25Label} data={props.item.userDefinedFields.udfChar25} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar26Label} data={props.item.userDefinedFields.udfChar26} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar27Label} data={props.item.userDefinedFields.udfChar27} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar28Label} data={props.item.userDefinedFields.udfChar28} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar29Label} data={props.item.userDefinedFields.udfChar29} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar30Label} data={props.item.userDefinedFields.udfChar30} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar31Label} data={props.item.userDefinedFields.udfChar31} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar32Label} data={props.item.userDefinedFields.udfChar32} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar33Label} data={props.item.userDefinedFields.udfChar33} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar34Label} data={props.item.userDefinedFields.udfChar34} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar35Label} data={props.item.userDefinedFields.udfChar35} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar36Label} data={props.item.userDefinedFields.udfChar36} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar37Label} data={props.item.userDefinedFields.udfChar37} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar38Label} data={props.item.userDefinedFields.udfChar38} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar39Label} data={props.item.userDefinedFields.udfChar39} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar40Label} data={props.item.userDefinedFields.udfChar40} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar41Label} data={props.item.userDefinedFields.udfChar41} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar42Label} data={props.item.userDefinedFields.udfChar42} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar43Label} data={props.item.userDefinedFields.udfChar43} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar44Label} data={props.item.userDefinedFields.udfChar44} storageKey="chars" />
                    <HideableTextField label={props.userLabels.udfChar45Label} data={props.item.userDefinedFields.udfChar45} storageKey="chars" />
                </View>

                <View style={{ margin: numPadding }}>
                    <HideableTextField label={props.userLabels.udfNum1Label} data={props.item.userDefinedFields.udfNum1} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum2Label} data={props.item.userDefinedFields.udfNum2} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum3Label} data={props.item.userDefinedFields.udfNum3} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum4Label} data={props.item.userDefinedFields.udfNum4} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum5Label} data={props.item.userDefinedFields.udfNum5} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum6Label} data={props.item.userDefinedFields.udfNum6} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum7Label} data={props.item.userDefinedFields.udfNum7} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum8Label} data={props.item.userDefinedFields.udfNum8} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum9Label} data={props.item.userDefinedFields.udfNum9} storageKey="nums" />
                    <HideableTextField label={props.userLabels.udfNum10Label} data={props.item.userDefinedFields.udfNum10} storageKey="nums" />
                </View>

                <View style={{ margin: datePadding }}>
                    <HideableTextField label={props.userLabels.udfDate1Label} data={props.item.userDefinedFields.udfDate1} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate2Label} data={props.item.userDefinedFields.udfDate2} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate3Label} data={props.item.userDefinedFields.udfDate3} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate4Label} data={props.item.userDefinedFields.udfDate4} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate5Label} data={props.item.userDefinedFields.udfDate5} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate6Label} data={props.item.userDefinedFields.udfDate6} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate7Label} data={props.item.userDefinedFields.udfDate7} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate8Label} data={props.item.userDefinedFields.udfDate8} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate9Label} data={props.item.userDefinedFields.udfDate9} storageKey="dates" />
                    <HideableTextField label={props.userLabels.udfDate10Label} data={props.item.userDefinedFields.udfDate10} storageKey="dates" />
                </View>

                <View style={{ margin: checkPadding }}>
                    <HideableTextField label={props.userLabels.udfChkBox01Label} data={props.item.userDefinedFields.udfChkBox01} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox02Label} data={props.item.userDefinedFields.udfChkBox02} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox03Label} data={props.item.userDefinedFields.udfChkBox03} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox04Label} data={props.item.userDefinedFields.udfChkBox04} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox05Label} data={props.item.userDefinedFields.udfChkBox05} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox06Label} data={props.item.userDefinedFields.udfChkBox06} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox07Label} data={props.item.userDefinedFields.udfChkBox07} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox08Label} data={props.item.userDefinedFields.udfChkBox08} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox09Label} data={props.item.userDefinedFields.udfChkBox09} storageKey="checks" />
                    <HideableTextField label={props.userLabels.udfChkBox10Label} data={props.item.userDefinedFields.udfChkBox10} storageKey="checks" />
                </View>

                <View style={{ margin: notePadding }}>
                    <HideableTextField label={props.userLabels.udfNote01Labels} data={props.item.userDefinedFields.udfNote01} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote02Labels} data={props.item.userDefinedFields.udfNote02} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote03Labels} data={props.item.userDefinedFields.udfNote03} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote04Labels} data={props.item.userDefinedFields.udfNote04} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote05Labels} data={props.item.userDefinedFields.udfNote05} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote06Labels} data={props.item.userDefinedFields.udfNote06} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote07Labels} data={props.item.userDefinedFields.udfNote07} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote08Labels} data={props.item.userDefinedFields.udfNote08} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote09Labels} data={props.item.userDefinedFields.udfNote09} storageKey="notes" />
                    <HideableTextField label={props.userLabels.udfNote10Labels} data={props.item.userDefinedFields.udfNote10} storageKey="notes" />
                </View>
            </View>
        </View>
    );
}

export default UserDefinedFields;