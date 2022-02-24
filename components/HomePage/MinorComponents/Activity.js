import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableLine from '../UtilityComponents/HideableLine';

const Activity = (props) => {
    console.log("Activity");

    const { colors } = useTheme();
    const [parentWidth, setParentWidth] = useState();

    function onLayout(event) {
        setParentWidth(event.nativeEvent.layout.width);
    }

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
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }} onLayout={(event) => onLayout(event)} >
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Atividade</Text>
            </View>

            <HideableLine parentWidth={parentWidth} leftShow={show.activityCode} rightShow={show.tradeCode} leftLabel={labels.activityCode} rightLabel={labels.tradeCode} leftData={item.activity.activityCode} rightData={item.activity.tradeCode} />
            <HideableLine parentWidth={parentWidth} leftShow={show.taskCode} rightShow={show.materialList} leftLabel={labels.taskCode} leftData={item.activity.taskCode} rightLabel={labels.materialList} rightData={item.activity.materialList} />
            <HideableLine parentWidth={parentWidth} leftShow={show.repairReason} rightShow={show.workAccomplished} leftLabel={labels.repairReason} leftData={item.activity.repairReason} rightLabel={labels.workAccomplished} rightData={item.activity.workAccomplished} />
            <HideableLine parentWidth={parentWidth} leftShow={show.technicianPartFailure} rightShow={show.manufacturerCode} leftLabel={labels.technicianPartFailure} leftData={item.activity.technicianPartFailure} rightLabel={labels.manufacturerCode} rightData={item.activity.manufacturerCode} />
            <HideableLine parentWidth={parentWidth} leftShow={show.activityStartDate} rightShow={show.activityEndDate} leftLabel={labels.activityStartDate} leftData={item.activity.activityStartDate} rightLabel={labels.activityEndDate} rightData={item.activity.activityEndDate} />
            <HideableLine parentWidth={parentWidth} leftShow={show.estimatedHours} rightShow={show.hoursRemaining} leftLabel={labels.estimatedHours} leftData={item.activity.estimatedHours} rightLabel={labels.hoursRemaining} rightData={item.activity.hoursRemaining} />
            <HideableLine parentWidth={parentWidth} leftShow={show.persons} rightShow={show.systemLevel} leftLabel={labels.persons} leftData={item.activity.persons} rightLabel={labels.systemLevel} rightData={item.activity.systemLevel} />
            <HideableLine parentWidth={parentWidth} leftShow={show.assemblyLevel} rightShow={show.componentLevel} leftLabel={labels.assemblyLevel} leftData={item.activity.assemblyLevel} rightLabel={labels.componentLevel} rightData={item.activity.componentLevel} />
            <HideableTextField parentWidth={parentWidth} show={show.partLocation} label={labels.partLocation} data={item.activity.partLocation} />
        </View>
    );
}

export default Activity;