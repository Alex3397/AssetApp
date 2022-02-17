import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceBase = (props) => {
    console.log("LinearReferenceBase");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.fromPoint &&
        !show.fromRefDescription &&
        !show.fromGeoRef &&
        !show.toPoint &&
        !show.toRefDescription &&
        !show.toGeoRef &&
        !show.inspectionDirection &&
        !show.flow &&
        !show.relationship
    ) {
        return (<></>);
    }

    return (
        <View style={{ margin: 15 }}>
                <HideableTextField show={show.fromPoint} label={labels.fromPoint} data={item.linearReferenceDetails.fromPoint} />
                <HideableTextField show={show.fromRefDescription} label={labels.fromRefDescription} data={item.linearReferenceDetails.fromRefDescription} />
                <HideableTextField show={show.fromGeoRef} label={labels.fromGeoRef} data={item.linearReferenceDetails.fromGeoRef} />
                <HideableTextField show={show.toPoint} label={labels.toPoint} data={item.linearReferenceDetails.toPoint} />
                <HideableTextField show={show.toRefDescription} label={labels.toRefDescription} data={item.linearReferenceDetails.toRefDescription} />
                <HideableTextField show={show.toGeoRef} label={labels.toGeoRef} data={item.linearReferenceDetails.toGeoRef} />
                <HideableTextField show={show.inspectionDirection} label={labels.inspectionDirection} data={item.linearReferenceDetails.inspectionDirection} />
                <HideableTextField show={show.flow} label={labels.flow} data={item.linearReferenceDetails.flow} />
                <HideableTextField show={show.relationship} label={labels.relationship} data={item.linearReferenceDetails.relationship} />
            </View>
    );
}

export default LinearReferenceBase;