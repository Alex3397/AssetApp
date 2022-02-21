import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceTo = (props) => {
    console.log("LinearReferenceTo");

    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.toReference &&
        !show.toOffset &&
        !show.toOffsetPercentage &&
        !show.toOffsetDirection &&
        !show.toRelatedReference &&
        !show.toRelatedOffset &&
        !show.toRelatedOffsetDirection &&
        !show.toCoordinateX &&
        !show.toCoordinateY &&
        !show.toLatitude &&
        !show.toLongitude &&
        !show.toVerticalRelationShip &&
        !show.toHorizontalOffset &&
        !show.toHorizontalOffsetType &&
        !show.toVerticalOffset &&
        !show.toVerticalOffsetType
    ) {
        return (<></>);
    }

    return (
        <View style={{ marginTop: 15 }}>
            <HideableTextField show={show.toReference} label={labels.toReference} data={item.linearReferenceDetails.toReference} />
            <HideableTextField show={show.toOffset} label={labels.toOffset} data={item.linearReferenceDetails.toOffset} />
            <HideableTextField show={show.toOffsetPercentage} label={labels.toOffsetPercentage} data={item.linearReferenceDetails.toOffsetPercentage} />
            <HideableTextField show={show.toOffsetDirection} label={labels.toOffsetDirection} data={item.linearReferenceDetails.toOffsetDirection} />
            <HideableTextField show={show.toRelatedReference} label={labels.toRelatedReference} data={item.linearReferenceDetails.toRelatedReference} />
            <HideableTextField show={show.toRelatedOffset} label={labels.toRelatedOffset} data={item.linearReferenceDetails.toRelatedOffset} />
            <HideableTextField show={show.toRelatedOffsetDirection} label={labels.toRelatedOffsetDirection} data={item.linearReferenceDetails.toRelatedOffsetDirection} />

            <HideableTextField show={show.toCoordinateX} label={labels.toCoordinateX} data={item.linearReferenceDetails.toCoordinateX} />
            <HideableTextField show={show.toCoordinateY} label={labels.toCoordinateY} data={item.linearReferenceDetails.toCoordinateY} />
            <HideableTextField show={show.toLatitude} label={labels.toLatitude} data={item.linearReferenceDetails.toLatitude} />
            <HideableTextField show={show.toLongitude} label={labels.toLongitude} data={item.linearReferenceDetails.toLongitude} />
            <HideableTextField show={show.toVerticalRelationShip} label={labels.toVerticalRelationShip} data={item.linearReferenceDetails.toVerticalRelationShip} />
            <HideableTextField show={show.toHorizontalOffset} label={labels.toHorizontalOffset} data={item.linearReferenceDetails.toHorizontalOffset} />
            <HideableTextField show={show.toHorizontalOffsetType} label={labels.toHorizontalOffsetType} data={item.linearReferenceDetails.toHorizontalOffsetType} />
            <HideableTextField show={show.toVerticalOffset} label={labels.toVerticalOffset} data={item.linearReferenceDetails.toVerticalOffset} />
            <HideableTextField show={show.toVerticalOffsetType} label={labels.toVerticalOffsetType} data={item.linearReferenceDetails.toVerticalOffsetType} />
        </View>
    );
}

export default LinearReferenceTo;