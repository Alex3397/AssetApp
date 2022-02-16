import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const Activity = (props) => {
    console.log("Activity");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.activityCode &&
        !show.tradeCode &&
        !show.taskCode &&
        !show.materialList &&
        !show.repairReason &&
        !show.workAccomplished &&
        !show.technicianPartFailure &&
        !show.manufacturerCode &&
        !show.activityStartDate &&
        !show.activityEndDate &&
        !show.estimatedHours &&
        !show.hoursRemaining &&
        !show.persons &&
        !show.systemLevel &&
        !show.assemblyLevel &&
        !show.componentLevel &&
        !show.partLocation
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Atividade</Text>

            <HideableTextField show={show.activityCode} label={labels.activityCode} data={item.activity.activityCode} />
            <HideableTextField show={show.tradeCode} label={labels.tradeCode} data={item.activity.tradeCode} />
            <HideableTextField show={show.taskCode} label={labels.taskCode} data={item.activity.taskCode} />
            <HideableTextField show={show.materialList} label={labels.materialList} data={item.activity.materialList} />
            <HideableTextField show={show.repairReason} label={labels.repairReason} data={item.activity.repairReason} />
            <HideableTextField show={show.workAccomplished} label={labels.workAccomplished} data={item.activity.workAccomplished} />
            <HideableTextField show={show.technicianPartFailure} label={labels.technicianPartFailure} data={item.activity.technicianPartFailure} />
            <HideableTextField show={show.manufacturerCode} label={labels.manufacturerCode} data={item.activity.manufacturerCode} />
            <HideableTextField show={show.activityStartDate} label={labels.activityStartDate} data={item.activity.activityStartDate} />
            <HideableTextField show={show.activityEndDate} label={labels.activityEndDate} data={item.activity.activityEndDate} />
            <HideableTextField show={show.estimatedHours} label={labels.estimatedHours} data={item.activity.estimatedHours} />
            <HideableTextField show={show.hoursRemaining} label={labels.hoursRemaining} data={item.activity.hoursRemaining} />
            <HideableTextField show={show.persons} label={labels.persons} data={item.activity.persons} />
            <HideableTextField show={show.systemLevel} label={labels.systemLevel} data={item.activity.systemLevel} />
            <HideableTextField show={show.assemblyLevel} label={labels.assemblyLevel} data={item.activity.assemblyLevel} />
            <HideableTextField show={show.componentLevel} label={labels.componentLevel} data={item.activity.componentLevel} />
            <HideableTextField show={show.partLocation} label={labels.partLocation} data={item.activity.partLocation} />
        </View>
    );
}

export default Activity;