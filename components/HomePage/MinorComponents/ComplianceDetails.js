import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';



const ComplianceDetails = (props) => {
    const { colors } = useTheme();
    var item = props.item

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

            <HideableCheckBox label="Licença de Obra Acima do Teto: " data={item.compliance.aboveCeilingPermit} />
            <HideableCheckBox label="Segurança de Vida Provisória: " data={item.compliance.interimLifeSafety} />
            <HideableCheckBox label="Controle de Infecção Provisório: " data={item.compliance.interimInfectionControl} />
            <HideableCheckBox label="Avaliação de Riscos Pré-construção: " data={item.compliance.preConstructionRiskAssessment} />
            <HideableCheckBox label="Plano de Aperfeiçoamento: " data={item.compliance.planImprovement} />
            <HideableCheckBox label="Declaração de Condições: " data={item.compliance.statementOfCondition} />
            <HideableCheckBox label="Programa de Manutenção Predial: " data={item.compliance.buildMaintenanceProgram} />
            <HideableCheckBox label="Equipamento de Proteção Individual: " data={item.compliance.personalProtectiveEquipment} />
            <HideableCheckBox label="Bloqueio/Etiquetagem: " data={item.compliance.lockout} />
            <HideableCheckBox label="Autorização Foco de Incêndio: " data={item.compliance.burnPermit} />
            <HideableCheckBox label="Espaço Confinado: " data={item.compliance.confinedSpace} />
            <HideableCheckBox label="Segurança do Paciente: " data={item.compliance.patientSafety} />
            <HideableCheckBox label="Aviso de Recall: " data={item.compliance.recallNotice} />
            <HideableCheckBox label="SMDA: " data={item.compliance.smda} />
            <HideableCheckBox label="Confidencialidade HIPAA: " data={item.compliance.hipaaConfidentiality} />
        </View>
    );
}

export default ComplianceDetails;