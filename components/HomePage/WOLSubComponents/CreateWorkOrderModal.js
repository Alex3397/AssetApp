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

export default function CreateWorkOrderModal(props) {
    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const { colors } = useTheme();

    return (
        <Modal animationType="slide" statusBarTranslucent={true} transparent={true} visible={props.visible} onRequestClose={() => { props.onRequestClose() }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                <View style={{ margin: 20, backgroundColor: colors.card, borderColor: colors.inverted, borderWidth: 1, borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
                    <Text style={{ marginBottom: 15, textAlign: "center", color: colors.text, fontSize: 22 }}>Nova Ordem de Serviço</Text>
                    <View>
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 16 }}>Descrição: </Text>
                        <TextInput style={{ backgroundColor: colors.bubble, borderRadius: 15, margin: 2, padding: 2, paddingRight: 10, paddingLeft: 10 }} />
                        <Text style={{ textAlign: "center", color: colors.text, marginTop: 15, fontSize: 16 }}>Status: </Text>
                        <SelectDropdown
                            data={props.status}
                            defaultButtonText="Status"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 5, borderColor: colors.border, height: 40, borderRadius: 15 }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 16, marginTop: 15 }}>Organização: </Text>
                        <SelectDropdown
                            data={props.organizations}
                            defaultButtonText="Organização"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 5, borderColor: colors.border, height: 40, borderRadius: 15 }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 16, marginTop: 15 }}>Tipo: </Text>
                        <SelectDropdown
                            data={props.types}
                            defaultButtonText="Tipo"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 5, borderColor: colors.border, height: 40, borderRadius: 15 }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 16, marginTop: 15 }}>Departamento: </Text>
                        <SelectDropdown
                            data={props.departments}
                            defaultButtonText="Departamento"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 5, borderColor: colors.border, height: 40, borderRadius: 15 }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 16, marginTop: 15 }}>Ativos: </Text>
                        <SelectDropdown
                            data={props.assets}
                            defaultButtonText="Ativos"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 5, borderColor: colors.border, height: 40, borderRadius: 15 }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />

                    </View>
                    <Pressable style={{ borderRadius: 20, padding: 8, elevation: 2, backgroundColor: "#2196F3", marginTop: 30 }} onPress={() => { props.onRequestClose() }} >
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 16 }}>Create</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}