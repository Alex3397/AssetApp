import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceDetails = (props) => {
    console.log("LinearReferenceDetails");

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
            !show.relationship &&
            !show.fromReferenceCode &&
            !show.fromOffsetPercent &&
            !show.fromOffsetDirectionCode &&
            !show.fromReferenceDescription &&
            !show.fromOffset &&
            !show.fromOffsetLinearReferenceDetails &&
            !show.fromCoordinateX &&
            !show.fromCoordinateY &&
            !show.fromLatitude &&
            !show.fromLongitude &&
            !show.fromVerticalRelationShip &&
            !show.fromHorizontalOffset &&
            !show.fromHorizontalOffsetType &&
            !show.fromVerticalOffset &&
            !show.fromVerticalOffsetType &&
            !show.toReferenceCode &&
            !show.toOffsetPercent &&
            !show.toOffsetDirectionCode &&
            !show.toReferenceDescription &&
            !show.toOffset &&
            !show.toOffsetLinearReferenceDetails &&
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
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de referência linear</Text>

            <HideableTextField show={show.fromPoint} label={labels.fromPoint} data={item.linearReferenceDetails.fromPoint} />
            <HideableTextField show={show.fromRefDescription} label={labels.fromRefDescription} data={item.linearReferenceDetails.fromRefDescription} />
            <HideableTextField show={show.fromGeoRef} label={labels.fromGeoRef} data={item.linearReferenceDetails.fromGeoRef} />
            
            <HideableTextField show={show.toPoint} label={labels.toPoint} data={item.linearReferenceDetails.toPoint} />
            <HideableTextField show={show.toRefDescription} label={labels.toRefDescription} data={item.linearReferenceDetails.toRefDescription} />
            <HideableTextField show={show.toGeoRef} label={labels.toGeoRef} data={item.linearReferenceDetails.toGeoRef} />

            <HideableTextField show={show.inspectionDirection} label={labels.inspectionDirection} data={item.linearReferenceDetails.inspectionDirection} />
            <HideableTextField show={show.flow} label={labels.flow} data={item.linearReferenceDetails.flow} />
            <HideableTextField show={show.relationship} label={labels.relationship} data={item.linearReferenceDetails.relationship} />

            <HideableTextField show={show.fromReferenceCode} label={labels.fromReferenceCode} data={item.linearReferenceDetails.fromReferenceCode} />
            <HideableTextField show={show.fromOffsetPercent} label={labels.fromOffsetPercent} data={item.linearReferenceDetails.fromOffsetPercent} />
            <HideableTextField show={show.fromOffsetDirectionCode} label={labels.fromOffsetDirectionCode} data={item.linearReferenceDetails.fromOffsetDirectionCode} />
            <HideableTextField show={show.fromReferenceDescription} label={labels.fromReferenceDescription} data={item.linearReferenceDetails.fromReferenceDescription} />
            <HideableTextField show={show.fromOffset} label={labels.fromOffset} data={item.linearReferenceDetails.fromOffset} />
            <HideableTextField show={show.fromOffsetLinearReferenceDetails} label={labels.fromOffsetLinearReferenceDetails} data={item.linearReferenceDetails.fromOffsetLinearReferenceDetails} />
            <HideableTextField show={show.fromCoordinateX} label={labels.fromCoordinateX} data={item.linearReferenceDetails.fromCoordinateX} />
            <HideableTextField show={show.fromCoordinateY} label={labels.fromCoordinateY} data={item.linearReferenceDetails.fromCoordinateY} />
            <HideableTextField show={show.fromLatitude} label={labels.fromLatitude} data={item.linearReferenceDetails.fromLatitude} />
            <HideableTextField show={show.fromLongitude} label={labels.fromLongitude} data={item.linearReferenceDetails.fromLongitude} />
            <HideableTextField show={show.fromVerticalRelationShip} label={labels.fromVerticalRelationShip} data={item.linearReferenceDetails.fromVerticalRelationShip} />
            <HideableTextField show={show.fromHorizontalOffset} label={labels.fromHorizontalOffset} data={item.linearReferenceDetails.fromHorizontalOffset} />
            <HideableTextField show={show.fromHorizontalOffsetType} label={labels.fromHorizontalOffsetType} data={item.linearReferenceDetails.fromHorizontalOffsetType} />
            <HideableTextField show={show.fromVerticalOffset} label={labels.fromVerticalOffset} data={item.linearReferenceDetails.fromVerticalOffset} />
            <HideableTextField show={show.fromVerticalOffsetType} label={labels.fromVerticalOffsetType} data={item.linearReferenceDetails.fromVerticalOffsetType} />

            <HideableTextField show={show.toReferenceCode} label={labels.toReferenceCode} data={item.linearReferenceDetails.toReferenceCode} />
            <HideableTextField show={show.toOffsetPercent} label={labels.toOffsetPercent} data={item.linearReferenceDetails.toOffsetPercent} />
            <HideableTextField show={show.toOffsetDirectionCode} label={labels.toOffsetDirectionCode} data={item.linearReferenceDetails.toOffsetDirectionCode} />
            <HideableTextField show={show.toReferenceDescription} label={labels.toReferenceDescription} data={item.linearReferenceDetails.toReferenceDescription} />
            <HideableTextField show={show.toOffset} label={labels.toOffset} data={item.linearReferenceDetails.toOffset} />
            <HideableTextField show={show.toOffsetLinearReferenceDetails} label={labels.toOffsetLinearReferenceDetails} data={item.linearReferenceDetails.toOffsetLinearReferenceDetails} />
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

export default LinearReferenceDetails;