import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';



const ComplianceDetails = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (
        item.compliance.aboveCeilingPermit == "false"
        && item.compliance.interimLifeSafety == "false"
        && item.compliance.interimInfectionControl == "false"
        && item.compliance.preConstructionRiskAssessment == "false"
        && item.compliance.planImprovement == "false"
        && item.compliance.statementOfCondition == "false"
        && item.compliance.buildMaintenanceProgram == "false"
        && item.compliance.personalProtectiveEquipment == "false"
        && item.compliance.lockout == "false"
        && item.compliance.burnPermit == "false"
        && item.compliance.confinedSpace == "false"
        && item.compliance.patientSafety == "false"
        && item.compliance.recallNotice == "false"
        && item.compliance.smda == "false"
        && item.compliance.hipaaConfidentiality == "false"
    ) return (<></>)

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Conformidade</Text>

            <HideableCheckBox show={false} label={labels.aboveCeilingPermit.concat(": ")} data={item.compliance.aboveCeilingPermit} />
            <HideableCheckBox show={false} label={labels.interimLifeSafety.concat(": ")} data={item.compliance.interimLifeSafety} />
            <HideableCheckBox show={false} label={labels.interimInfectionControl.concat(": ")} data={item.compliance.interimInfectionControl} />
            <HideableCheckBox show={false} label={labels.preConstructionRiskAssessment.concat(": ")} data={item.compliance.preConstructionRiskAssessment} />
            <HideableCheckBox show={false} label={labels.planImprovement.concat(": ")} data={item.compliance.planImprovement} />
            <HideableCheckBox show={false} label={labels.statementOfCondition.concat(": ")} data={item.compliance.statementOfCondition} />
            <HideableCheckBox show={false} label={labels.buildMaintenanceProgram.concat(": ")} data={item.compliance.buildMaintenanceProgram} />
            <HideableCheckBox show={false} label={labels.personalProtectiveEquipment.concat(": ")} data={item.compliance.personalProtectiveEquipment} />
            <HideableCheckBox show={false} label={labels.lockout.concat(": ")} data={item.compliance.lockout} />
            <HideableCheckBox show={false} label={labels.burnPermit.concat(": ")} data={item.compliance.burnPermit} />
            <HideableCheckBox show={false} label={labels.confinedSpace.concat(": ")} data={item.compliance.confinedSpace} />
            <HideableCheckBox show={false} label={labels.patientSafety.concat(": ")} data={item.compliance.patientSafety} />
            <HideableCheckBox show={false} label={labels.recallNotice.concat(": ")} data={item.compliance.recallNotice} />
            <HideableCheckBox show={false} label={labels.smda.concat(": ")} data={item.compliance.smda} />
            <HideableCheckBox show={false} label={labels.hipaaConfidentiality.concat(": ")} data={item.compliance.hipaaConfidentiality} />
        </View>
    );
}

export default ComplianceDetails;