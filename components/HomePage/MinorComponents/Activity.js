import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const Activity = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

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

            <HideableTextField show={false} label={labels.activityCode} data={item.activity.activityCode} />
            <HideableTextField show={false} label={labels.tradeCode} data={item.activity.tradeCode} />
            <HideableTextField show={false} label={labels.taskCode} data={item.activity.taskCode} />
            <HideableTextField show={false} label={labels.materialList} data={item.activity.materialList} />
            <HideableTextField show={false} label={labels.repairReason} data={item.activity.repairReason} />
            <HideableTextField show={false} label={labels.workAccomplished} data={item.activity.workAccomplished} />
            <HideableTextField show={false} label={labels.technicianPartFailure} data={item.activity.technicianPartFailure} />
            <HideableTextField show={false} label={labels.manufacturerCode} data={item.activity.manufacturerCode} />
            <HideableTextField show={false} label={labels.activityStartDate} data={item.activity.activityStartDate} />
            <HideableTextField show={false} label={labels.activityEndDate} data={item.activity.activityEndDate} />
            <HideableTextField show={false} label={labels.estimatedHours} data={item.activity.estimatedHours} />
            <HideableTextField show={false} label={labels.hoursRemaining} data={item.activity.hoursRemaining} />
            <HideableTextField show={false} label={labels.persons} data={item.activity.persons} />
            <HideableTextField show={false} label={labels.systemLevel} data={item.activity.systemLevel} />
            <HideableTextField show={false} label={labels.assemblyLevel} data={item.activity.assemblyLevel} />
            <HideableTextField show={false} label={labels.componentLevel} data={item.activity.componentLevel} />
            <HideableTextField show={false} label={labels.partLocation} data={item.activity.partLocation} />
        </View>
    );
}

export default Activity;