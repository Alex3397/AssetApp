import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import LinearReferenceFrom from './LinearReferenceFrom';
import LinearReferenceTo from './LinearReferenceTo';
import LinearReferenceBase from './LinearReferenceBase';

const LinearReferenceDetails = (props) => {
    console.log("LinearReferenceDetails");

    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <View style={{ borderBottomColor: colors.text, borderBottomWidth: 0.2, marginBottom: 5, width: "100%" }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de referência linear</Text>
            </View>

            <LinearReferenceBase show={show} labels={labels} item={item} />
            <LinearReferenceFrom show={show} labels={labels} item={item} />
            <LinearReferenceTo show={show} labels={labels} item={item} />
        </View>
    );
}

export default LinearReferenceDetails;