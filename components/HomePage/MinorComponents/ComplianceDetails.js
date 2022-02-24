import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';



const ComplianceDetails = (props) => {
    console.log("ComplianceDetails");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.aboveCeilingPermit &&
        !show.interimLifeSafety &&
        !show.interimInfectionControl &&
        !show.preConstructionRiskAssessment &&
        !show.planImprovement &&
        !show.statementOfCondition &&
        !show.buildMaintenanceProgram &&
        !show.personalProtectiveEquipment &&
        !show.lockout &&
        !show.burnPermit &&
        !show.confinedSpace &&
        !show.patientSafety &&
        !show.recallNotice &&
        !show.smda &&
        !show.hipaaConfidentiality
    ) return (<></>)

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Conformidade</Text>
            </View>

            <HideableCheckBox show={show.aboveCeilingPermit} label={labels.aboveCeilingPermit.concat(": ")} data={item.compliance.aboveCeilingPermit} />
            <HideableCheckBox show={show.interimLifeSafety} label={labels.interimLifeSafety.concat(": ")} data={item.compliance.interimLifeSafety} />
            <HideableCheckBox show={show.interimInfectionControl} label={labels.interimInfectionControl.concat(": ")} data={item.compliance.interimInfectionControl} />
            <HideableCheckBox show={show.preConstructionRiskAssessment} label={labels.preConstructionRiskAssessment.concat(": ")} data={item.compliance.preConstructionRiskAssessment} />
            <HideableCheckBox show={show.planImprovement} label={labels.planImprovement.concat(": ")} data={item.compliance.planImprovement} />
            <HideableCheckBox show={show.statementOfCondition} label={labels.statementOfCondition.concat(": ")} data={item.compliance.statementOfCondition} />
            <HideableCheckBox show={show.buildMaintenanceProgram} label={labels.buildMaintenanceProgram.concat(": ")} data={item.compliance.buildMaintenanceProgram} />
            <HideableCheckBox show={show.personalProtectiveEquipment} label={labels.personalProtectiveEquipment.concat(": ")} data={item.compliance.personalProtectiveEquipment} />
            <HideableCheckBox show={show.lockout} label={labels.lockout.concat(": ")} data={item.compliance.lockout} />
            <HideableCheckBox show={show.burnPermit} label={labels.burnPermit.concat(": ")} data={item.compliance.burnPermit} />
            <HideableCheckBox show={show.confinedSpace} label={labels.confinedSpace.concat(": ")} data={item.compliance.confinedSpace} />
            <HideableCheckBox show={show.patientSafety} label={labels.patientSafety.concat(": ")} data={item.compliance.patientSafety} />
            <HideableCheckBox show={show.recallNotice} label={labels.recallNotice.concat(": ")} data={item.compliance.recallNotice} />
            <HideableCheckBox show={show.smda} label={labels.smda.concat(": ")} data={item.compliance.smda} />
            <HideableCheckBox show={show.hipaaConfidentiality} label={labels.hipaaConfidentiality.concat(": ")} data={item.compliance.hipaaConfidentiality} />
        </View>
    );
}

export default ComplianceDetails;