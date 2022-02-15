import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';


const IncidentControl = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

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

            <HideableCheckBox show={false} label={labels.patientIncident.concat(": ")} data={item.incidentControl.patientIncident} />
            <HideableCheckBox show={false} label={labels.staffInjuryIncident.concat(": ")} data={item.incidentControl.staffInjuryIncident} />
            <HideableCheckBox show={false} label={labels.securityIncident.concat(": ")} data={item.incidentControl.securityIncident} />
            <HideableCheckBox show={false} label={labels.propertyDamageIncident.concat(": ")} data={item.incidentControl.propertyDamageIncident} />
            <HideableCheckBox show={false} label={labels.hazardousMaterialsIncident.concat(": ")} data={item.incidentControl.hazardousMaterialsIncident} />
            <HideableCheckBox show={false} label={labels.fireSafetyIncident.concat(": ")} data={item.incidentControl.fireSafetyIncident} />
            <HideableCheckBox show={false} label={labels.medicalEquipmentIncident.concat(": ")} data={item.incidentControl.medicalEquipmentIncident} />
            <HideableCheckBox show={false} label={labels.utilitySystemIncident.concat(": ")} data={item.incidentControl.utilitySystemIncident} />
        </View>
    );
}

export default IncidentControl;