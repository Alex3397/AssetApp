import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const LinearReferenceDetails = (props) => {
    const storage = new Storage();
    const { colors } = useTheme();
    var item = props.item;

    if (
        item.linearReferenceDetails.fromPoint == ""
        && item.linearReferenceDetails.fromRefDescription == ""
        && item.linearReferenceDetails.fromGeoRef == ""
        && item.linearReferenceDetails.toPoint == ""
        && item.linearReferenceDetails.toRefDescription == ""
        && item.linearReferenceDetails.toGeoRef == ""
        && item.linearReferenceDetails.inspectionDirection == ""
        && item.linearReferenceDetails.flow == ""
        && item.linearReferenceDetails.relationship == ""
        && item.linearReferenceDetails.fromReferenceCode == ""
        && item.linearReferenceDetails.fromOffsetPercent == ""
        && item.linearReferenceDetails.fromOffsetDirectionCode == ""
        && item.linearReferenceDetails.fromReferenceDescription == ""
        && item.linearReferenceDetails.fromOffset == ""
        && item.linearReferenceDetails.fromOffsetLinearReferenceDetails == ""
        && item.linearReferenceDetails.fromCoordinateX == ""
        && item.linearReferenceDetails.fromCoordinateY == ""
        && item.linearReferenceDetails.fromLatitude == ""
        && item.linearReferenceDetails.fromLongitude == ""
        && item.linearReferenceDetails.fromVerticalRelationShip == ""
        && item.linearReferenceDetails.fromHorizontalOffset == ""
        && item.linearReferenceDetails.fromHorizontalOffsetType == ""
        && item.linearReferenceDetails.fromVerticalOffset == ""
        && item.linearReferenceDetails.fromVerticalOffsetType == ""
        && item.linearReferenceDetails.fromReferenceCode == ""
        && item.linearReferenceDetails.fromOffsetPercent == ""
        && item.linearReferenceDetails.fromOffsetDirectionCode == ""
        && item.linearReferenceDetails.fromReferenceDescription == ""
        && item.linearReferenceDetails.fromOffset == ""
        && item.linearReferenceDetails.fromOffsetLinearReferenceDetails == ""
        && item.linearReferenceDetails.fromCoordinateX == ""
        && item.linearReferenceDetails.fromCoordinateY == ""
        && item.linearReferenceDetails.fromLatitude == ""
        && item.linearReferenceDetails.fromLongitude == ""
        && item.linearReferenceDetails.fromVerticalRelationShip == ""
        && item.linearReferenceDetails.fromHorizontalOffset == ""
        && item.linearReferenceDetails.fromHorizontalOffsetType == ""
        && item.linearReferenceDetails.fromVerticalOffset == ""
        && item.linearReferenceDetails.fromVerticalOffsetType == ""
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de referência linear</Text>

            <HideableTextField label="Ponto Inicial" data={item.linearReferenceDetails.fromPoint}/>
            <HideableTextField label="Descrição da Referência" data={item.linearReferenceDetails.fromRefDescription}/>
            <HideableTextField label="Referência Geográfica" data={item.linearReferenceDetails.fromGeoRef}/>
            <HideableTextField label="Ponto Final" data={item.linearReferenceDetails.toPoint}/>
            <HideableTextField label="Descrição da Referência" data={item.linearReferenceDetails.toRefDescription}/>
            <HideableTextField label="Referência Geográfica" data={item.linearReferenceDetails.toGeoRef}/>
            <HideableTextField label="Direção de Inspeção" data={item.linearReferenceDetails.inspectionDirection}/>
            <HideableTextField label="Fluxo" data={item.linearReferenceDetails.flow}/>
            <HideableTextField label="Tipo de relação" data={item.linearReferenceDetails.relationship}/>

            <HideableTextField label="Ponto de Referência Inicial" data={item.linearReferenceDetails.fromReferenceCode}/>
            <HideableTextField label="% de Deslocamento Inicial" data={item.linearReferenceDetails.fromOffsetPercent}/>
            <HideableTextField label="Direção do Deslocamento Inicial" data={item.linearReferenceDetails.fromOffsetDirectionCode}/>
            <HideableTextField label="Referência Inicial" data={item.linearReferenceDetails.fromReferenceDescription}/>
            <HideableTextField label="Deslocamento de Referência Inicial" data={item.linearReferenceDetails.fromOffset}/>
            <HideableTextField label="Direção do Deslocamento de Referência Inicial" data={item.linearReferenceDetails.fromOffsetLinearReferenceDetails}/>
            <HideableTextField label="Coordenada X Inicial" data={item.linearReferenceDetails.fromCoordinateX}/>
            <HideableTextField label="Coordenada Y Inicial" data={item.linearReferenceDetails.fromCoordinateY}/>
            <HideableTextField label="Latitude Inicial" data={item.linearReferenceDetails.fromLatitude}/>
            <HideableTextField label="Longitude Inicial" data={item.linearReferenceDetails.fromLongitude}/>
            <HideableTextField label="Tipo de relação Inicial" data={item.linearReferenceDetails.fromVerticalRelationShip}/>
            <HideableTextField label="Deslocamento Horizontal Inicial" data={item.linearReferenceDetails.fromHorizontalOffset}/>
            <HideableTextField label="Tipo de Deslocamento Horizontal Inicial" data={item.linearReferenceDetails.fromHorizontalOffsetType}/>
            <HideableTextField label="Deslocamento Vertical Inicial" data={item.linearReferenceDetails.fromVerticalOffset}/>
            <HideableTextField label="Tipo de Deslocamento Vertical Inicial" data={item.linearReferenceDetails.fromVerticalOffsetType}/>

            <HideableTextField label="Ponto de Referência Final" data={item.linearReferenceDetails.fromReferenceCode}/>
            <HideableTextField label="% de Deslocamento Final" data={item.linearReferenceDetails.fromOffsetPercent}/>
            <HideableTextField label="Direção do Deslocamento Final" data={item.linearReferenceDetails.fromOffsetDirectionCode}/>
            <HideableTextField label="Referência Final" data={item.linearReferenceDetails.fromReferenceDescription}/>
            <HideableTextField label="Deslocamento de Referência Final" data={item.linearReferenceDetails.fromOffset}/>
            <HideableTextField label="Direção do Deslocamento de Referência Final" data={item.linearReferenceDetails.fromOffsetLinearReferenceDetails}/>
            <HideableTextField label="Coordenada X Final" data={item.linearReferenceDetails.fromCoordinateX}/>
            <HideableTextField label="Coordenada Y Final" data={item.linearReferenceDetails.fromCoordinateY}/>
            <HideableTextField label="Latitude Final" data={item.linearReferenceDetails.fromLatitude}/>
            <HideableTextField label="Longitude Final" data={item.linearReferenceDetails.fromLongitude}/>
            <HideableTextField label="Tipo de relação Final" data={item.linearReferenceDetails.fromVerticalRelationShip}/>
            <HideableTextField label="Deslocamento Horizontal Final" data={item.linearReferenceDetails.fromHorizontalOffset}/>
            <HideableTextField label="Tipo de Deslocamento Horizontal Final" data={item.linearReferenceDetails.fromHorizontalOffsetType}/>
            <HideableTextField label="Deslocamento Vertical Final" data={item.linearReferenceDetails.fromVerticalOffset}/>
            <HideableTextField label="Tipo de Deslocamento Vertical Final" data={item.linearReferenceDetails.fromVerticalOffsetType}/>
        </View>
    );
}

export default LinearReferenceDetails;