import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';


const IncidentControl = (props) => {
    console.log("IncidentControl");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.patientIncident &&
        !show.staffInjuryIncident &&
        !show.securityIncident &&
        !show.propertyDamageIncident &&
        !show.hazardousMaterialsIncident &&
        !show.fireSafetyIncident &&
        !show.medicalEquipmentIncident &&
        !show.utilitySystemIncident
    ) return (<></>)

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Controle de incidentes</Text>

            <HideableCheckBox show={show.patientIncident} label={labels.patientIncident.concat(": ")} data={item.incidentControl.patientIncident} />
            <HideableCheckBox show={show.staffInjuryIncident} label={labels.staffInjuryIncident.concat(": ")} data={item.incidentControl.staffInjuryIncident} />
            <HideableCheckBox show={show.securityIncident} label={labels.securityIncident.concat(": ")} data={item.incidentControl.securityIncident} />
            <HideableCheckBox show={show.propertyDamageIncident} label={labels.propertyDamageIncident.concat(": ")} data={item.incidentControl.propertyDamageIncident} />
            <HideableCheckBox show={show.hazardousMaterialsIncident} label={labels.hazardousMaterialsIncident.concat(": ")} data={item.incidentControl.hazardousMaterialsIncident} />
            <HideableCheckBox show={show.fireSafetyIncident} label={labels.fireSafetyIncident.concat(": ")} data={item.incidentControl.fireSafetyIncident} />
            <HideableCheckBox show={show.medicalEquipmentIncident} label={labels.medicalEquipmentIncident.concat(": ")} data={item.incidentControl.medicalEquipmentIncident} />
            <HideableCheckBox show={show.utilitySystemIncident} label={labels.utilitySystemIncident.concat(": ")} data={item.incidentControl.utilitySystemIncident} />
        </View>
    );
}

export default IncidentControl;