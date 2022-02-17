import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceTo = (props) => {
    console.log("LinearReferenceTo");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    return (
            <View style={{ margin: 15 }}>
                <Text style={{ color: colors.text }}>Problema : Inicio</Text>
                <View style={{ margin: 15 }}>
                    <HideableTextField show={show.toReferenceCode} label={labels.toReferenceCode} data={item.linearReferenceDetails.toReferenceCode} />
                    <HideableTextField show={show.toOffset} label={labels.toOffset} data={item.linearReferenceDetails.toOffset} />
                    <HideableTextField show={show.toOffsetPercent} label={labels.toOffsetPercent} data={item.linearReferenceDetails.toOffsetPercent} />
                    <HideableTextField show={show.toOffsetDirectionCode} label={labels.toOffsetDirectionCode} data={item.linearReferenceDetails.toOffsetDirectionCode} />
                    <HideableTextField show={show.toReferenceDescription} label={labels.toReferenceDescription} data={item.linearReferenceDetails.toReferenceDescription} />
                    <HideableTextField show={show.toOffsetDirectionDescription} label={labels.toOffsetDirectionDescription} data={item.linearReferenceDetails.toOffsetDirectionDescription} />
                    <HideableTextField show={show.toOffsetLinearReferenceDetails} label={labels.toOffsetLinearReferenceDetails} data={item.linearReferenceDetails.toOffsetLinearReferenceDetails} />
                </View>
                <Text style={{ color: colors.text, marginBottom: 10 }}>Problema : Fim</Text>

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