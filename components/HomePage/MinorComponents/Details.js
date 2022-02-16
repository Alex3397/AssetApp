import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';

const Details = (props) => {
    console.log("Details");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    let maintenancePlan = item.details.maintenancePatternCode + " - " + item.details.maintenancePatterDescription;
    let actionCode = String(item.details.actionCode).replace(".0", "")

    if (
        !show.classId &&
        !show.problemCode &&
        !show.criticality &&
        !show.ppmCode &&
        !show.maintenancePatternCode &&
        !show.parentWorkOrder &&
        !show.cnNumber &&
        !show.msProject &&
        !show.schedulingSessionType &&
        !show.causeCode &&
        !show.customerCode &&
        !show.level1 &&
        !show.callerName &&
        !show.rejectionReason &&
        !show.reOpened &&
        !show.customerContractCode &&
        !show.workPackage &&
        !show.alertCode &&
        !show.safetyReviewedBy &&
        !show.permitReviewedBy &&
        !show.standardWo &&
        !show.priorityCode &&
        !show.costCode &&
        !show.targetValue &&
        !show.lastMeterRating &&
        !show.triggerEvent &&
        !show.failureCode &&
        !show.actionCode &&
        !show.routeCode &&
        !show.routeStatus &&
        !show.downTimeCost &&
        !show.downTimeHours &&
        !show.originalWorkOrder &&
        !show.calculatedPriority &&
        !show.minor &&
        !show.preserveCalculatedPriority &&
        !show.latitude &&
        !show.longitude
    ) return (<></>);

        return (
            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes da OS</Text>

                <HideableTextField show={show.classId} label={labels.classId} data={item.details.classId} />
                <HideableTextField show={show.problemCode} label={labels.problemCode} data={item.details.problemCode} />
                <HideableTextField show={show.criticality} label={labels.criticality} data={item.details.criticality} />
                <HideableTextField show={show.ppmCode} label={labels.ppmCode} data={item.details.ppmCode} />
                <HideableTextField show={show.maintenancePatternCode} label={labels.maintenancePatternCode} data={maintenancePlan} />
                <HideableTextField show={show.parentWorkOrder} label={labels.parentWorkOrder} data={item.details.parentWorkOrder} />
                <HideableTextField show={show.cnNumber} label={labels.cnNumber} data={item.details.cnNumber} />
                <HideableTextField show={show.msProject} label={labels.msProject} data={item.details.msProject} />
                <HideableTextField show={show.schedulingSessionType} label={labels.schedulingSessionType} data={item.details.schedulingSessionType} />
                <HideableTextField show={show.causeCode} label={labels.causeCode} data={item.details.causeCode} />
                <HideableTextField show={show.customerCode} label={labels.customerCode} data={item.details.customerCode} />
                <HideableTextField show={show.level1} label={labels.level1} data={item.details.level1} />
                <HideableTextField show={show.callerName} label={labels.callerName} data={item.details.callerName} />
                <HideableTextField show={show.rejectionReason} label={labels.rejectionReason} data={item.details.rejectionReason} />
                <HideableCheckBox show={show.reOpened} label={labels.reOpened} data={item.details.reOpened} />
                <HideableTextField show={show.customerContractCode} label={labels.customerContractCode} data={item.details.customerContractCode} />
                <HideableTextField show={show.workPackage} label={labels.workPackage} data={item.details.workPackage} />
                <HideableTextField show={show.alertCode} label={labels.alertCode} data={item.details.alertCode} />
                <HideableTextField show={show.safetyReviewedBy} label={labels.safetyReviewedBy} data={item.details.safetyReviewedBy} />
                <HideableTextField show={show.permitReviewedBy} label={labels.permitReviewedBy} data={item.details.permitReviewedBy} />
                <HideableTextField show={show.standardWo} label={labels.standardWo} data={item.details.standardWo} />
                <HideableTextField show={show.priorityCode} label={labels.priorityCode} data={item.details.priorityCode} />
                <HideableTextField show={show.costCode} label={labels.costCode} data={item.details.costCode} />
                <HideableTextField show={show.targetValue} label={labels.targetValue} data={item.details.targetValue} />
                <HideableTextField show={show.lastMeterRating} label={labels.lastMeterRating} data={item.details.lastMeterRating} />
                <HideableTextField show={show.triggerEvent} label={labels.triggerEvent} data={item.details.triggerEvent} />
                <HideableTextField show={show.failureCode} label={labels.failureCode} data={item.details.failureCode} />
                <HideableTextField show={show.actionCode} label={labels.actionCode} data={actionCode} />
                <HideableTextField show={show.routeCode} label={labels.routeCode} data={item.details.routeCode} />
                <HideableTextField show={show.routeStatus} label={labels.routeStatus} data={item.details.routeStatus} />
                <HideableTextField show={show.downTimeCost} label={labels.downTimeCost} data={item.details.downTimeCost} />
                <HideableTextField show={show.downTimeHours} label={labels.downTimeHours} data={item.details.downTimeHours} />
                <HideableTextField show={show.originalWorkOrder} label={labels.originalWorkOrder} data={item.details.originalWorkOrder} />
                <HideableTextField show={show.calculatedPriority} label={labels.calculatedPriority} data={item.details.calculatedPriority} />
                <HideableCheckBox show={show.minor} label={labels.minor} data={item.details.minor} />
                <HideableCheckBox show={show.preserveCalculatedPriority} label={labels.preserveCalculatedPriority} data={item.details.preserveCalculatedPriority} />
                <HideableTextField show={show.latitude} label={labels.latitude} data={item.details.latitude} />
                <HideableTextField show={show.longitude} label={labels.longitude} data={item.details.longitude} />
            </View>
        );
}

export default Details;