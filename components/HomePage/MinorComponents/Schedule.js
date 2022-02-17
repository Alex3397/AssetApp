import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableLine from '../UtilityComponents/HideableLine';

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

            <HideableLine leftLabel={labels.reportedDate} leftData={item.schedule.reportedDate} leftShow={show.reportedDate} rightLabel={labels.reportedBy} rightData={item.schedule.reportedBy} rightShow={show.reportedBy} />
            <HideableLine leftLabel={labels.assignedBy} leftData={item.schedule.assignedBy} leftShow={show.assignedBy} rightLabel={labels.assignedTo} rightData={item.schedule.assignedTo} rightShow={show.assignedTo} />
            <HideableLine leftLabel={labels.programedStartDate} leftData={item.schedule.programedStartDate} leftShow={show.programedStartDate} rightLabel={labels.programedEndDate} rightData={item.schedule.programedEndDate} rightShow={show.programedEndDate} />
            <HideableLine leftLabel={labels.solicitedStartDate} leftData={item.schedule.solicitedStartDate} leftShow={show.solicitedStartDate} rightLabel={labels.solicitedEndDate} rightData={item.schedule.solicitedEndDate} rightShow={show.solicitedEndDate} />
            <HideableLine leftLabel={labels.startDate} leftData={item.schedule.startDate} leftShow={show.startDate} rightLabel={labels.endDate} rightData={item.schedule.endDate} rightShow={show.endDate} />
            <HideableLine leftLabel={labels.shift} leftData={item.schedule.shift} leftShow={show.shift} rightLabel={labels.budget} rightData={item.schedule.budget} rightShow={show.budget} />
            <HideableLine leftLabel={labels.campaign} leftData={item.schedule.campaign} leftShow={show.campaign} rightLabel={labels.serviceRequestCode} rightData={item.schedule.serviceRequestCode} rightShow={show.serviceRequestCode} />

        </View>
    );
}

export default Schedule;