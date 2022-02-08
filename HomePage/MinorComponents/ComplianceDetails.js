import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const ComplianceDetails = (props) => {
    const storage = new Storage();
    const { colors } = useTheme();
    var item = props.item

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Conformidade</Text>

            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Licença de Obra Acima do Teto: {item.compliance.aboveCeilingPermit}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança de Vida Provisória: {item.compliance.interimLifeSafety}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Controle de Infecção Provisório: {item.compliance.interimInfectionControl}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Avaliação de Riscos Pré-construção: {item.compliance.preConstructionRiskAssessment}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Plano de Aperfeiçoamento: {item.compliance.planImprovement}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Declaração de Condições: {item.compliance.statementOfCondition}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Programa de Manutenção Predial: {item.compliance.buildMaintenanceProgram}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Equipamento de Proteção Individual: {item.compliance.personalProtectiveEquipment}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Bloqueio/Etiquetagem: {item.compliance.lockout}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Autorização Foco de Incêndio: {item.compliance.burnPermit}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Espaço Confinado: {item.compliance.confinedSpace}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança do Paciente: {item.compliance.patientSafety}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Aviso de Recall: {item.compliance.recallNotice}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>SMDA: {item.compliance.smda}</Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Confidencialidade HIPAA: {item.compliance.hipaaConfidentiality}</Text>
        </View>
    );
}

export default ComplianceDetails;