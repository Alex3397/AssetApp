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
    const [organization, setOrganization] = useState(props.userGroup);

    let allStatus = props.status;
    let filteredStatus = [];

    for (let index = 0; index < allStatus.length; index++) {
        const element = allStatus[index];
        
        if (element.fromStatus == "-" && element.userGroupCode == props.userGroup) filteredStatus = filteredStatus.concat(element);
    }

    let filteredDepartments = []

    for (let index = 0; index < props.departments.length; index++) {
        const element = props.departments[index];
        
        if (element.organization == "*" || element.organization == organization) filteredDepartments = filteredDepartments.concat(element)
    }

    let filteredAssets = []

    for (let index = 0; index < props.assets.length; index++) {
        const element = props.assets[index];
        
        if (element.organization == "*" || element.organization == organization) filteredAssets = filteredAssets.concat(element)
    }

    for (let index = 0; index < props.positions.length; index++) {
        const element = props.positions[index];
        
        if (element.organization == "*" || element.organization == organization) filteredAssets = filteredAssets.concat(element)
    }

    for (let index = 0; index < props.systems.length; index++) {
        const element = props.systems[index];
        
        if (element.organization == "*" || element.organization == organization) filteredAssets = filteredAssets.concat(element)
    }

    return (
        <Modal animationType="slide" statusBarTranslucent={true} transparent={true} visible={props.visible} onRequestClose={() => { props.onRequestClose() }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                <View style={{ margin: 20, backgroundColor: colors.card, borderColor: colors.inverted, borderWidth: 1, borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, width: "80%" }}>
                    <Text style={{ marginBottom: 15, textAlign: "center", color: colors.text, fontSize: 22 }}>Nova Ordem de Serviço</Text>
                    <View style={{ width: "100%" }}>
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18 }}>Descrição: </Text>
                        <TextInput style={{ backgroundColor: colors.bubble, color: colors.text, borderColor: colors.inverted, borderWidth: 0.5, borderRadius: 15, margin: 2, padding: 5, paddingRight: 10, paddingLeft: 10, fontSize: 16 }} />
                        <Text style={{ textAlign: "center", color: colors.text, marginTop: 15, fontSize: 18 }}>Status: </Text>
                        <SelectDropdown
                            data={filteredStatus}
                            defaultButtonText="Status"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.inverted, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.toStatus + " : " + selectedItem.toStatusDescription }}
                            rowTextForSelection={(item) => { return item.toStatus + " : " + item.toStatusDescription }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Organização: </Text>
                        <SelectDropdown
                            data={props.organizations}
                            defaultButtonText={organization}
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.inverted, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setOrganization(selectedItem.code) }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code }}
                            rowTextForSelection={(item) => { return item.code }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Tipo: </Text>
                        <SelectDropdown
                            data={props.types}
                            defaultButtonText="Tipo"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.inverted, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + " : " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Departamento: </Text>
                        <SelectDropdown
                            data={filteredDepartments}
                            defaultButtonText="Departamento"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.inverted, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + " : " + item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Ativo: </Text>
                        <SelectDropdown
                            data={filteredAssets}
                            defaultButtonText="Ativos"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.inverted, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + ": " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />

                    </View>
                    <Pressable style={{ borderRadius: 15, padding: 8, elevation: 2, backgroundColor: "#2196F3", marginTop: 30 }} onPress={() => { props.onRequestClose() }} >
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 16 }}>Criar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}