import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';


const Schedule = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

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

            <HideableTextField show={false} label={labels.reportedBy}data={item.schedule.reportedBy} />
            <HideableTextField show={false} label={labels.reportedDate}data={item.schedule.reportedDate} />
            <HideableTextField show={false} label={labels.assignedBy}data={item.schedule.assignedBy} />
            <HideableTextField show={false} label={labels.assignedTo}data={item.schedule.assignedTo} />
            <HideableTextField show={false} label={labels.programedStartDate}data={item.schedule.programedStartDate} />
            <HideableTextField show={false} label={labels.programedEndDate}data={item.schedule.programedEndDate} />
            <HideableTextField show={false} label={labels.solicitedStartDate}data={item.schedule.solicitedStartDate} />
            <HideableTextField show={false} label={labels.solicitedEndDate}data={item.schedule.solicitedEndDate} />
            <HideableTextField show={false} label={labels.startDate}data={item.schedule.startDate} />
            <HideableTextField show={false} label={labels.endDate}data={item.schedule.endDate} />
            <HideableTextField show={false} label={labels.shift}data={item.schedule.shift} />
            <HideableTextField show={false} label={labels.budget}data={item.schedule.budget} />
            <HideableTextField show={false} label={labels.campaign}data={item.schedule.campaign} />
            <HideableTextField show={false} label={labels.serviceRequestCode}data={item.schedule.serviceRequestCode} />
        </View>
    );
}

export default Schedule;