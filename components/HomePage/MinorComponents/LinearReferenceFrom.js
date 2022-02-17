import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceFrom = (props) => {
    console.log("LinearReferenceFrom");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    return (
            <View style={{ margin: 15 }}>
                <Text style={{ color: colors.text }}>Problema : Inicio</Text>
                <View style={{ margin: 15 }}>
                    <HideableTextField show={show.fromReferenceCode} label={labels.fromReferenceCode} data={item.linearReferenceDetails.fromReferenceCode} />
                    <HideableTextField show={show.fromOffset} label={labels.fromOffset} data={item.linearReferenceDetails.fromOffset} />
                    <HideableTextField show={show.fromReferenceDescription} label={labels.fromReferenceDescription} data={item.linearReferenceDetails.fromReferenceDescription} />
                    <HideableTextField show={show.fromOffsetPercent} label={labels.fromOffsetPercent} data={item.linearReferenceDetails.fromOffsetPercent} />
                    <HideableTextField show={show.fromOffsetDirectionCode} label={labels.fromOffsetDirectionCode} data={item.linearReferenceDetails.fromOffsetDirectionCode} />
                    <HideableTextField show={show.fromOffsetDirectionDescription} label={labels.fromOffsetDirectionDescription} data={item.linearReferenceDetails.fromOffsetDirectionDescription} />
                    <HideableTextField show={show.fromOffsetLinearReferenceDetails} label={labels.fromOffsetLinearReferenceDetails} data={item.linearReferenceDetails.fromOffsetLinearReferenceDetails} />
                </View>
                <Text style={{ color: colors.text, marginBottom: 10 }}>Problema : Fim</Text>

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