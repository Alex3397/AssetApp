import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';

const LinearReferenceDetails = (props) => {
    const { colors } = useTheme();
    let item = props.item;
    let labels = props.labels;

    if (item.linearReferenceDetails.fromPoint == ""
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
        
        && item.linearReferenceDetails.toReferenceCode == ""
        && item.linearReferenceDetails.toOffsetPercent == ""
        && item.linearReferenceDetails.toOffsetDirectionCode == ""
        && item.linearReferenceDetails.toReferenceDescription == ""
        && item.linearReferenceDetails.toOffset == ""
        && item.linearReferenceDetails.toOffsetLinearReferenceDetails == ""
        && item.linearReferenceDetails.toCoordinateX == ""
        && item.linearReferenceDetails.toCoordinateY == ""
        && item.linearReferenceDetails.toLatitude == ""
        && item.linearReferenceDetails.toLongitude == ""
        && item.linearReferenceDetails.toVerticalRelationShip == ""
        && item.linearReferenceDetails.toHorizontalOffset == ""
        && item.linearReferenceDetails.toHorizontalOffsetType == ""
        && item.linearReferenceDetails.toVerticalOffset == ""
        && item.linearReferenceDetails.toVerticalOffsetType == ""
        && item.linearReferenceDetails.toReferenceCode == ""
        && item.linearReferenceDetails.toOffsetPercent == ""
        && item.linearReferenceDetails.toOffsetDirectionCode == ""
        && item.linearReferenceDetails.toReferenceDescription == ""
        && item.linearReferenceDetails.toOffset == ""
        && item.linearReferenceDetails.toOffsetLinearReferenceDetails == ""
        && item.linearReferenceDetails.toCoordinateX == ""
        && item.linearReferenceDetails.toCoordinateY == ""
        && item.linearReferenceDetails.toLatitude == ""
        && item.linearReferenceDetails.toLongitude == ""
        && item.linearReferenceDetails.toVerticalRelationShip == ""
        && item.linearReferenceDetails.toHorizontalOffset == ""
        && item.linearReferenceDetails.toHorizontalOffsetType == ""
        && item.linearReferenceDetails.toVerticalOffset == ""
        && item.linearReferenceDetails.toVerticalOffsetType == ""
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de referência linear</Text>

            <HideableTextField show={false} label={labels.fromPoint} data={item.linearReferenceDetails.fromPoint}/>
            <HideableTextField show={false} label={labels.fromRefDescription} data={item.linearReferenceDetails.fromRefDescription}/>
            <HideableTextField show={false} label={labels.fromGeoRef} data={item.linearReferenceDetails.fromGeoRef}/>
            <HideableTextField show={false} label={labels.toPoint} data={item.linearReferenceDetails.toPoint}/>
            <HideableTextField show={false} label={labels.toRefDescription} data={item.linearReferenceDetails.toRefDescription}/>
            <HideableTextField show={false} label={labels.toGeoRef} data={item.linearReferenceDetails.toGeoRef}/>
            <HideableTextField show={false} label={labels.inspectionDirection} data={item.linearReferenceDetails.inspectionDirection}/>
            <HideableTextField show={false} label={labels.flow} data={item.linearReferenceDetails.flow}/>
            <HideableTextField show={false} label={labels.relationship} data={item.linearReferenceDetails.relationship}/>

            <HideableTextField show={false} label={labels.fromReferenceCode} data={item.linearReferenceDetails.fromReferenceCode}/>
            <HideableTextField show={false} label={labels.fromOffsetPercent} data={item.linearReferenceDetails.fromOffsetPercent}/>
            <HideableTextField show={false} label={labels.fromOffsetDirectionCode} data={item.linearReferenceDetails.fromOffsetDirectionCode}/>
            <HideableTextField show={false} label={labels.fromReferenceDescription} data={item.linearReferenceDetails.fromReferenceDescription}/>
            <HideableTextField show={false} label={labels.fromOffset} data={item.linearReferenceDetails.fromOffset}/>
            <HideableTextField show={false} label={labels.fromOffsetLinearReferenceDetails} data={item.linearReferenceDetails.fromOffsetLinearReferenceDetails}/>
            <HideableTextField show={false} label={labels.fromCoordinateX} data={item.linearReferenceDetails.fromCoordinateX}/>
            <HideableTextField show={false} label={labels.fromCoordinateY} data={item.linearReferenceDetails.fromCoordinateY}/>
            <HideableTextField show={false} label={labels.fromLatitude} data={item.linearReferenceDetails.fromLatitude}/>
            <HideableTextField show={false} label={labels.fromLongitude} data={item.linearReferenceDetails.fromLongitude}/>
            <HideableTextField show={false} label={labels.fromVerticalRelationShip} data={item.linearReferenceDetails.fromVerticalRelationShip}/>
            <HideableTextField show={false} label={labels.fromHorizontalOffset} data={item.linearReferenceDetails.fromHorizontalOffset}/>
            <HideableTextField show={false} label={labels.fromHorizontalOffsetType} data={item.linearReferenceDetails.fromHorizontalOffsetType}/>
            <HideableTextField show={false} label={labels.fromVerticalOffset} data={item.linearReferenceDetails.fromVerticalOffset}/>
            <HideableTextField show={false} label={labels.fromVerticalOffsetType} data={item.linearReferenceDetails.fromVerticalOffsetType}/>

            <HideableTextField show={false} label={labels.toReferenceCode} data={item.linearReferenceDetails.toReferenceCode}/>
            <HideableTextField show={false} label={labels.toOffsetPercent} data={item.linearReferenceDetails.toOffsetPercent}/>
            <HideableTextField show={false} label={labels.toOffsetDirectionCode} data={item.linearReferenceDetails.toOffsetDirectionCode}/>
            <HideableTextField show={false} label={labels.toReferenceDescription} data={item.linearReferenceDetails.toReferenceDescription}/>
            <HideableTextField show={false} label={labels.toOffset} data={item.linearReferenceDetails.toOffset}/>
            <HideableTextField show={false} label={labels.toOffsetLinearReferenceDetails} data={item.linearReferenceDetails.toOffsetLinearReferenceDetails}/>
            <HideableTextField show={false} label={labels.toCoordinateX} data={item.linearReferenceDetails.toCoordinateX}/>
            <HideableTextField show={false} label={labels.toCoordinateY} data={item.linearReferenceDetails.toCoordinateY}/>
            <HideableTextField show={false} label={labels.toLatitude} data={item.linearReferenceDetails.toLatitude}/>
            <HideableTextField show={false} label={labels.toLongitude} data={item.linearReferenceDetails.toLongitude}/>
            <HideableTextField show={false} label={labels.toVerticalRelationShip} data={item.linearReferenceDetails.toVerticalRelationShip}/>
            <HideableTextField show={false} label={labels.toHorizontalOffset} data={item.linearReferenceDetails.toHorizontalOffset}/>
            <HideableTextField show={false} label={labels.toHorizontalOffsetType} data={item.linearReferenceDetails.toHorizontalOffsetType}/>
            <HideableTextField show={false} label={labels.toVerticalOffset} data={item.linearReferenceDetails.toVerticalOffset}/>
            <HideableTextField show={false} label={labels.toVerticalOffsetType} data={item.linearReferenceDetails.toVerticalOffsetType}/>
        </View>
    );
}

export default LinearReferenceDetails;