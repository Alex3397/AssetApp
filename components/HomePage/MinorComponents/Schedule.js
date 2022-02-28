import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableLine from '../UtilityComponents/HideableLine';

const Schedule = (props) => {
    console.log("Schedule");
    
    const { colors } = useTheme();
    let item = props.item.schedule;
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
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Programação</Text>
            </View>

            <HideableLine leftLabel={labels.reportedDate} leftData={item.reportedDate} leftShow={show.reportedDate} rightLabel={labels.reportedBy} rightData={item.reportedBy} rightShow={show.reportedBy} />
            <HideableLine leftLabel={labels.assignedBy} leftData={item.assignedBy} leftShow={show.assignedBy} rightLabel={labels.assignedTo} rightData={item.assignedTo} rightShow={show.assignedTo} />
            <HideableLine leftLabel={labels.programedStartDate} leftData={item.programedStartDate} leftShow={show.programedStartDate} rightLabel={labels.programedEndDate} rightData={item.programedEndDate} rightShow={show.programedEndDate} />
            <HideableLine leftLabel={labels.solicitedStartDate} leftData={item.solicitedStartDate} leftShow={show.solicitedStartDate} rightLabel={labels.solicitedEndDate} rightData={item.solicitedEndDate} rightShow={show.solicitedEndDate} />
            <HideableLine leftLabel={labels.startDate} leftData={item.startDate} leftShow={show.startDate} rightLabel={labels.endDate} rightData={item.endDate} rightShow={show.endDate} />
            <HideableLine leftLabel={labels.shift} leftData={item.shift} leftShow={show.shift} rightLabel={labels.budget} rightData={item.budget} rightShow={show.budget} />
            <HideableLine leftLabel={labels.campaign} leftData={item.campaign} leftShow={show.campaign} rightLabel={labels.serviceRequestCode} rightData={item.serviceRequestCode} rightShow={show.serviceRequestCode} />

        </View>
    );
}

export default Schedule;