import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableCheckBox from '../UtilityComponents/HideableCheckBox';


const Details = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    let maintenancePlan = item.details.maintenancePatternCode + " - " + item.details.maintenancePatterDescription;
    let actionCode = String(item.details.actionCode).replace(".0","")
    
    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes da OS</Text>

            <HideableTextField show={false} label={labels.classId} data={item.details.classId} />
            <HideableTextField show={false} label={labels.problemCode} data={item.details.problemCode} />
            <HideableTextField show={false} label={labels.criticality} data={item.details.criticality} />
            <HideableTextField show={false} label={labels.ppmCode} data={item.details.ppmCode} />
            <HideableTextField show={false} label={labels.maintenancePatternCode} data={maintenancePlan} />
            <HideableTextField show={false} label={labels.parentWorkOrder} data={item.details.parentWorkOrder} />
            <HideableTextField show={false} label={labels.cnNumber} data={item.details.cnNumber} />
            <HideableTextField show={false} label={labels.msProject} data={item.details.msProject} />
            <HideableTextField show={false} label={labels.schedulingSessionType} data={item.details.schedulingSessionType} />
            <HideableTextField show={false} label={labels.causeCode} data={item.details.causeCode} />
            <HideableTextField show={false} label={labels.customerCode} data={item.details.customerCode} />
            <HideableTextField show={false} label={labels.level1} data={item.details.level1} />
            <HideableTextField show={false} label={labels.callerName} data={item.details.callerName} />
            <HideableTextField show={false} label={labels.rejectionReason} data={item.details.rejectionReason} />
            <HideableCheckBox show={false} label={labels.reOpened} data={item.details.reOpened} />
            <HideableTextField show={false} label={labels.customerContractCode} data={item.details.customerContractCode} />
            <HideableTextField show={false} label={labels.workPackage} data={item.details.workPackage} />
            <HideableTextField show={false} label={labels.alertCode} data={item.details.alertCode} />
            <HideableTextField show={false} label={labels.safetyReviewedBy} data={item.details.safetyReviewedBy} />
            <HideableTextField show={false} label={labels.permitReviewedBy} data={item.details.permitReviewedBy} />
            <HideableTextField show={false} label={labels.standardWo} data={item.details.standardWo} />
            <HideableTextField show={false} label={labels.priorityCode} data={item.details.priorityCode} />
            <HideableTextField show={false} label={labels.costCode} data={item.details.costCode} />
            <HideableTextField show={false} label={labels.targetValue} data={item.details.targetValue} />
            <HideableTextField show={false} label={labels.lastMeterRating} data={item.details.lastMeterRating} />
            <HideableTextField show={false} label={labels.triggerEvent} data={item.details.triggerEvent} />
            <HideableTextField show={false} label={labels.failureCode} data={item.details.failureCode} />
            <HideableTextField show={false} label={labels.actionCode} data={actionCode} />
            <HideableTextField show={false} label={labels.routeCode} data={item.details.routeCode} />
            <HideableTextField show={false} label={labels.routeStatus} data={item.details.routeStatus} />
            <HideableTextField show={false} label={labels.downTimeCost} data={item.details.downTimeCost} />
            <HideableTextField show={false} label={labels.downTimeHours} data={item.details.downTimeHours} />
            <HideableTextField show={false} label={labels.originalWorkOrder} data={item.details.originalWorkOrder} />
            <HideableTextField show={false} label={labels.calculatedPriority} data={item.details.calculatedPriority} />
            <HideableCheckBox show={false} label={labels.minor} data={item.details.minor} />
            <HideableCheckBox show={false} label={labels.preserveCalculatedPriority} data={item.details.preserveCalculatedPriority} />
            <HideableTextField show={false} label={labels.latitude} data={item.details.latitude} />
            <HideableTextField show={false} label={labels.longitude} data={item.details.longitude} />
        </View>
    );
}

export default Details;