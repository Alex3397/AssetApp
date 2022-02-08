import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';


const IncidentControl = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    if (
        item.incidentControl.patientIncident == "false"
        && item.incidentControl.staffInjuryIncident == "false"
        && item.incidentControl.securityIncident == "false"
        && item.incidentControl.propertyDamageIncident == "false"
        && item.incidentControl.hazardousMaterialsIncident == "false"
        && item.incidentControl.fireSafetyIncident == "false"
        && item.incidentControl.medicalEquipmentIncident == "false"
        && item.incidentControl.utilitySystemIncident == "false"
    ) return (<></>)

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Controle de incidentes</Text>

            <HideableCheckBox label="Lesão de paciente/visitante : " data={item.incidentControl.patientIncident} />
            <HideableCheckBox label="Lesão/Enfermidade de pessoal: " data={item.incidentControl.staffInjuryIncident} />
            <HideableCheckBox label="Incidente de Segurança: " data={item.incidentControl.securityIncident} />
            <HideableCheckBox label="Dano à Propriedade: " data={item.incidentControl.propertyDamageIncident} />
            <HideableCheckBox label="Incidente com Materiais Perigosos: " data={item.incidentControl.hazardousMaterialsIncident} />
            <HideableCheckBox label="Incidente de Segurança contra incêndios: " data={item.incidentControl.fireSafetyIncident} />
            <HideableCheckBox label="Incidente com Equipamentos Médicos: " data={item.incidentControl.medicalEquipmentIncident} />
            <HideableCheckBox label="Incidente no Sistema de Serviços Públicos: " data={item.incidentControl.utilitySystemIncident} />
        </View>
    );
}

export default IncidentControl;