import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { TextInput, Text, RefreshControl, Pressable, FlatList, View, Keyboard, Modal } from "react-native";
import Storage from '../../../classes/Storage/Storage';
import * as Network from 'expo-network';
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';
import SelectDropdown from 'react-native-select-dropdown';

export default function WorkOrderListItem(props) {
    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const { colors } = useTheme();
    const item = props.item;

    return (
        <Pressable style={{ padding: 8, backgroundColor: colors.background }} onPress={() => { props.onPress() }}>
            <View style={[{ backgroundColor: colors.card, padding: 12.5, borderRadius: 15, marginBottom: 5 }, item.style]}>
                <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5 }}>
                    <Text style={{ color: colors.text, fontSize: 17, alignSelf: "flex-start" }}>{item.workOrderCode + ' - ' + item.description}</Text>
                </View>
                <View style={{ marginTop: 2 }}>
                    <View style={{ marginBottom: -5, marginBottom: 8 }}>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.status}: {item.workOrderStatusDescription}</Text>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.organization}: {item.organization}</Text>
                    </View>
                    <View style={{ marginBottom: -5, marginBottom: 8 }}>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.equipment}: {item.equipment}</Text>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.department}: {item.department}</Text>
                    </View>
                    <View style={{ marginBottom: -5, marginBottom: 8 }}>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-start" }} >{language.list.scheduledStartDate}: {item.scheduledStartDate}</Text>
                        <Text style={{ color: colors.text, fontSize: 13, alignSelf: "flex-end", top: -15, marginBottom: -15 }} >{language.list.dueDate}: {item.dueDate}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}