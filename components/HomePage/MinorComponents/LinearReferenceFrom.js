import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceFrom = (props) => {
    console.log("LinearReferenceFrom");

    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.fromReference &&
        !show.fromOffset &&
        !show.fromOffsetPercentage &&
        !show.fromOffsetDirection &&
        !show.fromRelatedReference &&
        !show.fromRelatedOffset &&
        !show.fromRelatedOffsetDirection &&
        !show.fromCoordinateX &&
        !show.fromCoordinateY &&
        !show.fromLatitude &&
        !show.fromLongitude &&
        !show.fromVerticalRelationShip &&
        !show.fromHorizontalOffset &&
        !show.fromHorizontalOffsetType &&
        !show.fromVerticalOffset &&
        !show.fromVerticalOffsetType
    ) {
        return (<></>);
    }

    return (
        <View style={{ marginTop: 15 }}>
            <HideableTextField show={show.fromReference} label={labels.fromReference} data={item.linearReferenceDetails.fromReference} />
            <HideableTextField show={show.fromOffset} label={labels.fromOffset} data={item.linearReferenceDetails.fromOffset} />
            <HideableTextField show={show.fromOffsetPercentage} label={labels.fromOffsetPercentage} data={item.linearReferenceDetails.fromOffsetPercentage} />
            <HideableTextField show={show.fromOffsetDirection} label={labels.fromOffsetDirection} data={item.linearReferenceDetails.fromOffsetDirection} />
            <HideableTextField show={show.fromRelatedReference} label={labels.fromRelatedReference} data={item.linearReferenceDetails.fromRelatedReference} />
            <HideableTextField show={show.fromRelatedOffset} label={labels.fromRelatedOffset} data={item.linearReferenceDetails.fromRelatedOffset} />
            <HideableTextField show={show.fromRelatedOffsetDirection} label={labels.fromRelatedOffsetDirection} data={item.linearReferenceDetails.fromRelatedOffsetDirection} />

            <HideableTextField show={show.fromCoordinateX} label={labels.fromCoordinateX} data={item.linearReferenceDetails.fromCoordinateX} />
            <HideableTextField show={show.fromCoordinateY} label={labels.fromCoordinateY} data={item.linearReferenceDetails.fromCoordinateY} />
            <HideableTextField show={show.fromLatitude} label={labels.fromLatitude} data={item.linearReferenceDetails.fromLatitude} />
            <HideableTextField show={show.fromLongitude} label={labels.fromLongitude} data={item.linearReferenceDetails.fromLongitude} />
            <HideableTextField show={show.fromVerticalRelationShip} label={labels.fromVerticalRelationShip} data={item.linearReferenceDetails.fromVerticalRelationShip} />
            <HideableTextField show={show.fromHorizontalOffset} label={labels.fromHorizontalOffset} data={item.linearReferenceDetails.fromHorizontalOffset} />
            <HideableTextField show={show.fromHorizontalOffsetType} label={labels.fromHorizontalOffsetType} data={item.linearReferenceDetails.fromHorizontalOffsetType} />
            <HideableTextField show={show.fromVerticalOffset} label={labels.fromVerticalOffset} data={item.linearReferenceDetails.fromVerticalOffset} />
            <HideableTextField show={show.fromVerticalOffsetType} label={labels.fromVerticalOffsetType} data={item.linearReferenceDetails.fromVerticalOffsetType} />
        </View>
    );
}

export default LinearReferenceFrom;