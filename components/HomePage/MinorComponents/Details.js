import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';


const Details = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    var maintenancePlan = item.details.maintenancePatternCode + " - " + item.details.maintenancePatterDescription;
    var actionCode = String(item.details.actionCode).replace(".0","")
    
    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes da OS</Text>

            <HideableTextField label="Classe" data={item.details.classId} />
            <HideableTextField label="Código de Problema" data={item.details.problemCode} />
            <HideableTextField label="Nível Critico" data={item.details.criticality} />
            <HideableTextField label="Código de MP" data={item.details.ppmCode} />
            <HideableTextField label="Plano de manutenção - Sequência" data={maintenancePlan} />
            <HideableTextField label="OS Principal" data={item.details.parentWorkOrder} />
            <HideableTextField label="Número AT" data={item.details.cnNumber} />
            <HideableTextField label="Sessão de Programação" data={item.details.msProject} />
            <HideableTextField label="Tipo de Sessão de Programação" data={item.details.schedulingSessionType} />
            <HideableTextField label="Código de Motivo" data={item.details.causeCode} />
            <HideableTextField label="Cliente" data={item.details.customerCode} />
            <HideableTextField label="Propriedade" data={item.details.level1} />
            <HideableTextField label="Nome do Chamador" data={item.details.callerName} />
            <HideableTextField label="Motivo da Rejeição" data={item.details.rejectionReason} />
            <HideableCheckBox label="Reaberto" data={item.details.reOpened} />
            <HideableTextField label="Contrato de Cliente" data={item.details.customerContractCode} />
            <HideableTextField label="Pacote de Serviços" data={item.details.workPackage} />
            <HideableTextField label="Alerta" data={item.details.alertCode} />
            <HideableTextField label="Segurança Revisada por" data={item.details.safetyReviewedBy} />
            <HideableTextField label="Autorizações Revisadas por" data={item.details.permitReviewedBy} />
            <HideableTextField label="OS Padrão" data={item.details.standardWo} />
            <HideableTextField label="Prioridade" data={item.details.priorityCode} />
            <HideableTextField label="Código de custo" data={item.details.costCode} />
            <HideableTextField label="Valor de Destino" data={item.details.targetValue} />
            <HideableTextField label="Última leitura do medidor" data={item.details.lastMeterRating} />
            <HideableTextField label="Ativar Evento" data={item.details.triggerEvent} />
            <HideableTextField label="Código de Falha" data={item.details.failureCode} />
            <HideableTextField label="Código de Ação" data={actionCode} />
            <HideableTextField label="Rota" data={item.details.routeCode} />
            <HideableTextField label="Status da Inspeção" data={item.details.routeStatus} />
            <HideableTextField label="Custo de Parada" data={item.details.downTimeCost} />
            <HideableTextField label="Horas de Parada" data={item.details.downTimeHours} />
            <HideableTextField label="Data de vencimento MP Original" data={String("Falta Achar")} />
            <HideableTextField label="OS de Origem - Atividade" data={item.details.originalWorkOrder} />
            <HideableTextField label="Trabalho de Origem" data={String("Falta Achar")} />
            <HideableTextField label="Prioridade Calculada" data={item.details.calculatedPriority} />
            <HideableCheckBox label="Secundário" data={item.details.minor} />
            <HideableCheckBox label="Preservar Prioridade Calculada" data={item.details.preserveCalculatedPriority} />
            <HideableTextField label="Latitude" data={item.details.latitude} />
            <HideableTextField label="Longitude" data={item.details.longitude} />
        </View>
    );
}

export default Details;