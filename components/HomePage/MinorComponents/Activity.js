import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const Activity = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    if (
        item.activity.activityCode == ""
        && item.activity.tradeCode == ""
        && item.activity.taskCode == ""
        && item.activity.materialList == ""
        && item.activity.repairReason == ""
        && item.activity.workAccomplished == ""
        && item.activity.technicianPartFailure == ""
        && item.activity.manufacturerCode == ""
        && item.activity.activityStartDate == ""
        && item.activity.activityEndDate == ""
        && item.activity.estimatedHours == ""
        && item.activity.hoursRemaining == ""
        && item.activity.persons == ""
        && item.activity.systemLevel == ""
        && item.activity.assemblyLevel == ""
        && item.activity.componentLevel == ""
        && item.activity.partLocation == ""
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Atividade</Text>

            <HideableTextField label="Atividade" data={item.activity.activityCode} />
            <HideableTextField label="Nível" data={item.activity.tradeCode} />
            <HideableTextField label="Plano de tarefa" data={item.activity.taskCode} />
            <HideableTextField label="Lista de materiais" data={item.activity.materialList} />
            <HideableTextField label="Motivo do reparo" data={item.activity.repairReason} />
            <HideableTextField label="Trabalho executado" data={item.activity.workAccomplished} />
            <HideableTextField label="Falha da peça segundo técnico" data={item.activity.technicianPartFailure} />
            <HideableTextField label="Fabricante" data={item.activity.manufacturerCode} />
            <HideableTextField label="Data de Inicio" data={item.activity.activityStartDate} />
            <HideableTextField label="Data de Término" data={item.activity.activityEndDate} />
            <HideableTextField label="Horas Estimadas" data={item.activity.estimatedHours} />
            <HideableTextField label="Horas Restantes" data={item.activity.hoursRemaining} />
            <HideableTextField label="Pessoal Requerido" data={item.activity.persons} />
            <HideableTextField label="Nível do Sistema" data={item.activity.systemLevel} />
            <HideableTextField label="Nível de Montagem" data={item.activity.assemblyLevel} />
            <HideableTextField label="Nível de Componente" data={item.activity.componentLevel} />
            <HideableTextField label="Localização do Componente" data={item.activity.partLocation} />
        </View>
    );
}

export default Activity;