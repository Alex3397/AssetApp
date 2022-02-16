import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const Schedule = (props) => {
    console.log("Schedule");
    
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.reportedBy &&
        !show.reportedDate &&
        !show.assignedBy &&
        !show.assignedTo &&
        !show.programedStartDate &&
        !show.programedEndDate &&
        !show.solicitedStartDate &&
        !show.solicitedEndDate &&
        !show.startDate &&
        !show.endDate &&
        !show.shift &&
        !show.budget &&
        !show.campaign &&
        !show.serviceRequestCode
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Programação</Text>

            <HideableTextField show={show.reportedBy} label={labels.reportedBy} data={item.schedule.reportedBy} />
            <HideableTextField show={show.reportedDate} label={labels.reportedDate} data={item.schedule.reportedDate} />
            <HideableTextField show={show.assignedBy} label={labels.assignedBy} data={item.schedule.assignedBy} />
            <HideableTextField show={show.assignedTo} label={labels.assignedTo} data={item.schedule.assignedTo} />
            <HideableTextField show={show.programedStartDate} label={labels.programedStartDate} data={item.schedule.programedStartDate} />
            <HideableTextField show={show.programedEndDate} label={labels.programedEndDate} data={item.schedule.programedEndDate} />
            <HideableTextField show={show.solicitedStartDate} label={labels.solicitedStartDate} data={item.schedule.solicitedStartDate} />
            <HideableTextField show={show.solicitedEndDate} label={labels.solicitedEndDate} data={item.schedule.solicitedEndDate} />
            <HideableTextField show={show.startDate} label={labels.startDate} data={item.schedule.startDate} />
            <HideableTextField show={show.endDate} label={labels.endDate} data={item.schedule.endDate} />
            <HideableTextField show={show.shift} label={labels.shift} data={item.schedule.shift} />
            <HideableTextField show={show.budget} label={labels.budget} data={item.schedule.budget} />
            <HideableTextField show={show.campaign} label={labels.campaign} data={item.schedule.campaign} />
            <HideableTextField show={show.serviceRequestCode} label={labels.serviceRequestCode} data={item.schedule.serviceRequestCode} />
        </View>
    );
}

export default Schedule;