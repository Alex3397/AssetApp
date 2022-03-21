import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { TextInput, Text, Pressable, View, Modal } from "react-native";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';
import SelectDropdown from 'react-native-select-dropdown';

export default function CreateWorkOrderModal(props) {
    let language = {};
    let userGroup = props.userGroup;
    const { colors } = useTheme();

    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [organization, setOrganization] = useState('');
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedWorkOrderType, setSelectedWorkOrderType] = useState('');
    const [selectedWorkOrderStatus, setSelectedWorkOrderStatus] = useState('');
    const [selectedWorkOrderStatusDescription, setSelectedWorkOrderStatusDescription] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [selectedEquipmentOrganization, setSelectedEquipmentOrganization] = useState('');

    const [descriptionBorderWidth, setDescriptionBorderWidth] = useState(0.5);
    const [descriptionBorderColor, setDescriptionBorderColor] = useState(colors.inverted);

    const [statusBorderWidth, setStatusBorderWidth] = useState(0.5);
    const [statusBorderColor, setStatusBorderColor] = useState(colors.inverted);

    const [organizationBorderWidth, setOrganizationBorderWidth] = useState(0.5);
    const [organizationBorderColor, setOrganizationBorderColor] = useState(colors.inverted);

    const [typeBorderWidth, setTypeBorderWidth] = useState(0.5);
    const [typeBorderColor, setTypeBorderColor] = useState(colors.inverted);

    const [departmentBorderWidth, setDepartmentBorderWidth] = useState(0.5);
    const [departmentBorderColor, setDepartmentBorderColor] = useState(colors.inverted);

    const [assetBorderWidth, setAssetBorderWidth] = useState(0.5);
    const [assetBorderColor, setAssetBorderColor] = useState(colors.inverted);


    let requestObject = {
        id: 0,
        workOrderCode: "Ordem de serviço criada",
        organization: selectedOrganization,
        description: selectedDescription,
        workOrderType: selectedWorkOrderType,
        workOrderStatus: selectedWorkOrderStatus,
        department: selectedDepartment,
        equipment: selectedEquipment,
        equipmentOrganization: selectedEquipmentOrganization,
        workOrderClass: "",
        workOrderStatusDescription: selectedWorkOrderStatusDescription,
        scheduledStartDate: "",
        reportedBy: "",
        dueDate: "",
        updatedCount: "",
        equipmentSystemType: "",
        relatedFromReference: "",
        relatedToReference: "",
        reasonForRepair: "",
        workAccomplished: "",
        technicalPartFailure: "",
        manufacturer: "",
        systemLevel: "",
        assemblyLevel: "",
        componentLevel: "",
        componentLocation: ""
    }

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    let organizations = [];
    if (props.organizations != null && props.organizations != undefined) organizations = props.organizations;

    let types = [];
    if (props.types != null && props.types != undefined) types = props.types.list;
    let filteredTypes = [];

    if (types != null && types != undefined) {
        for (let index = 0; index < types.length; index++) {
            const element = types[index];
    
            let filteredType = {code: "", description: ""};
            if ( (element.userGroup == userGroup && element.status.includes("ALLSTATS")) && !element.notUsed && element.code != "IS") {
                filteredType.code = element.code;
                filteredType.description = element.description;
                filteredTypes.push(filteredType);
            }
        }
    }

    let allStatus = props.status;
    let filteredStatus = [];

    if (props.status != null && props.status != undefined) {
        for (let index = 0; index < allStatus.length; index++) {
            const element = allStatus[index];

            if ((element.fromStatus == "-" && element.userGroupCode == props.userGroup) && (element.userCode == "*" || element.userCode == props.user) ) filteredStatus = filteredStatus.concat(element);
        }
    }

    let filteredDepartments = []

    if (props.departments != null && props.departments != undefined) {
        for (let index = 0; index < props.departments.length; index++) {
            const element = props.departments[index];

            if (element.organization == "*" || element.organization == organization) filteredDepartments = filteredDepartments.concat(element)
        }
    }

    let filteredAssets = []

    if (props.assets != null && props.assets != undefined) {
        for (let index = 0; index < props.assets.length; index++) {
            const element = props.assets[index];

            if ((element.organization == "*" || element.organization == organization) && element.status != "D") filteredAssets = filteredAssets.concat(element)
        }
    }

    if (props.positions != null && props.positions != undefined) {
        for (let index = 0; index < props.positions.length; index++) {
            const element = props.positions[index];

            if ((element.organization == "*" || element.organization == organization) && element.status != "D") filteredAssets = filteredAssets.concat(element)
        }
    }

    if (props.systems != null && props.systems != undefined) {
        for (let index = 0; index < props.systems.length; index++) {
            const element = props.systems[index];

            if ((element.organization == "*" || element.organization == organization) && element.status != "D") filteredAssets = filteredAssets.concat(element)
        }
    }

    const createWorkOrder = (requestObject) => {
        if (requestObject.organization == "") { setOrganizationBorderWidth(1); setOrganizationBorderColor("red"); } else { setOrganizationBorderWidth(0.5); setOrganizationBorderColor(colors.inverted); }
        if (requestObject.description == "") { setDescriptionBorderWidth(1); setDescriptionBorderColor("red"); } else { setDescriptionBorderWidth(0.5); setDescriptionBorderColor(colors.inverted); }
        if (requestObject.workOrderType == "") { setTypeBorderWidth(1); setTypeBorderColor("red"); } else { setTypeBorderWidth(0.5); setTypeBorderColor(colors.inverted); }
        if (requestObject.workOrderStatus == "") { setStatusBorderWidth(1); setStatusBorderColor("red"); } else { setStatusBorderWidth(0.5); setStatusBorderColor(colors.inverted); }
        if (requestObject.department == "") { setDepartmentBorderWidth(1); setDepartmentBorderColor("red"); } else { setDepartmentBorderWidth(0.5); setDepartmentBorderColor(colors.inverted); }
        if (requestObject.equipment == "" && requestObject.equipmentOrganization == "") { setAssetBorderWidth(1); setAssetBorderColor("red"); } else { setAssetBorderWidth(0.5); setAssetBorderColor(colors.inverted); }
        if (requestObject.organization != "" && requestObject.description != "" && requestObject.workOrderType != "" && requestObject.workOrderStatus != "" && requestObject.department != "" && (requestObject.equipment != "" || requestObject.equipmentOrganization != "")) {
            props.onCreateWorkOrder(requestObject);
            props.onRequestClose()
        }
    }

    return (
        <Modal animationType="fade" statusBarTranslucent={true} transparent={true} visible={props.visible} onRequestClose={() => { props.onRequestClose() }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                <View style={{ margin: 20, backgroundColor: colors.card, borderColor: colors.inverted, borderWidth: 1, borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, width: "80%" }}>
                    <Text style={{ marginBottom: 15, textAlign: "center", color: colors.text, fontSize: 22 }}>Nova Ordem de Serviço</Text>
                    <View style={{ width: "100%" }}>
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18 }}>Descrição: </Text>
                        <TextInput style={{ backgroundColor: colors.bubble, color: colors.text, borderColor: descriptionBorderColor, borderWidth: descriptionBorderWidth, borderRadius: 15, margin: 2, padding: 5, paddingRight: 10, paddingLeft: 10, fontSize: 16 }} onChangeText={(input) => { setSelectedDescription(input) }} />
                        <Text style={{ textAlign: "center", color: colors.text, marginTop: 15, fontSize: 18 }}>Status: </Text>
                        <SelectDropdown
                            data={filteredStatus}
                            defaultButtonText="Status"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderColor: statusBorderColor, borderWidth: statusBorderWidth, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setSelectedWorkOrderStatus(selectedItem.toStatus); setSelectedWorkOrderStatusDescription(selectedItem.toStatusDescription); }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.toStatus + " : " + selectedItem.toStatusDescription }}
                            rowTextForSelection={(item) => { return item.toStatus + " : " + item.toStatusDescription }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Organização: </Text>
                        <SelectDropdown
                            data={organizations}
                            defaultButtonText={"Organização"}
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderColor: organizationBorderColor, borderWidth: organizationBorderWidth, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setOrganization(selectedItem.code); setSelectedOrganization(selectedItem.code); }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code }}
                            rowTextForSelection={(item) => { return item.code }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Tipo: </Text>
                        <SelectDropdown
                            data={filteredTypes}
                            defaultButtonText="Tipo"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderColor: typeBorderColor, borderWidth: typeBorderWidth, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setSelectedWorkOrderType(selectedItem.code); }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.description }}
                            rowTextForSelection={(item) => { return item.description }}
                        />
                        <Text style={{ textAlign: "center", color: colors.text, fontSize: 18, marginTop: 15 }}>Departamento: </Text>
                        <SelectDropdown
                            data={filteredDepartments}
                            defaultButtonText="Departamento"
                            dropdownBackgroundColor={colors.card}
                            dropdownStyle={{ marginTop: -25, borderRadius: 10, borderWidth: 3, borderColor: colors.border }}
                            rowStyle={{ borderBottomColor: colors.border, borderBottomWidth: 2 }}
                            rowTextStyle={{ color: colors.text, fontSize: 14 }}
                            buttonStyle={{ backgroundColor: colors.card, borderColor: departmentBorderColor, borderWidth: departmentBorderWidth, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setSelectedDepartment(selectedItem.code); }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + " : " + selectedItem.description }}
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
                            buttonStyle={{ backgroundColor: colors.card, borderColor: assetBorderColor, borderWidth: assetBorderWidth, height: 40, borderRadius: 15, width: "100%" }}
                            buttonTextStyle={{ color: colors.text, textAlignVertical: "center", textAlign: "center", fontSize: 14 }}
                            onSelect={(selectedItem) => { setSelectedEquipment(selectedItem.code); setSelectedEquipmentOrganization(selectedItem.organization) }}
                            buttonTextAfterSelection={(selectedItem) => { return selectedItem.code + " : " + selectedItem.description }}
                            rowTextForSelection={(item) => { return item.code + ": " + item.description }}
                        />

                    </View>
                    <Pressable style={{ borderRadius: 15, padding: 8, elevation: 2, backgroundColor: "#2196F3", marginTop: 30 }} onPress={() => { createWorkOrder(requestObject); }} >
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 16 }}>Criar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}