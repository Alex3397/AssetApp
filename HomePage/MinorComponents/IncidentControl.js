import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const IncidentControl = (props) => {
    const storage = new Storage();
    const { colors } = useTheme();
    var item = props.item;

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Controle de incidentes</Text>

            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Lesão de paciente/visitante : {item.incidentControl.patientIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Lesão/Enfermidade de pessoal: {item.incidentControl.staffInjuryIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente de Segurança: {item.incidentControl.securityIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Dano à Propriedade: {item.incidentControl.propertyDamageIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente com Materiais Perigosos: {item.incidentControl.hazardousMaterialsIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente de Segurança contra incêndios: {item.incidentControl.fireSafetyIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente com Equipamentos Médicos: {item.incidentControl.medicalEquipmentIncident}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente no Sistema de Serviços Públicos: {item.incidentControl.utilitySystemIncident}</Text>
        </View>
    );
}

export default IncidentControl;