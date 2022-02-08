import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const Schedule = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    if (item.schedule.reportedBy == ""
        && item.schedule.reportedDate == ""
        && item.schedule.assignedBy == ""
        && item.schedule.assignedTo == ""
        && item.schedule.programedStartDate == ""
        && item.schedule.programedEndDate == ""
        && item.schedule.solicitedStartDate == ""
        && item.schedule.solicitedEndDate == ""
        && item.schedule.startDate == ""
        && item.schedule.endDate == ""
        && item.schedule.shift == ""
        && item.schedule.campaign == ""
        && item.schedule.campaign == ""
        && item.schedule.campaignStatus == ""
        && item.schedule.serviceRequestCode == "") {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Programação</Text>

            <HideableTextField label="Reportado por" data={item.schedule.reportedBy} />
            <HideableTextField label="Data Reportada" data={item.schedule.reportedDate} />
            <HideableTextField label="Atribuído por" data={item.schedule.assignedBy} />
            <HideableTextField label="Atribuído a" data={item.schedule.assignedTo} />
            <HideableTextField label="Data de início progamada" data={item.schedule.programedStartDate} />
            <HideableTextField label="Data de fim progamada" data={item.schedule.programedEndDate} />
            <HideableTextField label="Data de início solicitada" data={item.schedule.solicitedStartDate} />
            <HideableTextField label="Data de fim solicitada" data={item.schedule.solicitedEndDate} />
            <HideableTextField label="Data de início" data={item.schedule.startDate} />
            <HideableTextField label="Data de fim" data={item.schedule.endDate} />
            <HideableTextField label="Turno" data={item.schedule.shift} />
            <HideableTextField label="Orçamento" data={item.schedule.campaign} />
            <HideableTextField label="Campanha" data={item.schedule.campaign} />
            <HideableTextField label="Status da Campanha" data={item.schedule.campaignStatus} />
            <HideableTextField label="SS-Nº da Solicitação de Serviço" data={item.schedule.serviceRequestCode} />
        </View>
    );
}

export default Schedule;