import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from '../UtilityComponents/HideableTextField';
import HideableLine from '../UtilityComponents/HideableLine';


const CustomerDetails = (props) => {
    console.log("CustomerDetails");

    const { colors } = useTheme();
    const [parentWidth, setParentWidth] = useState();

    function onLayout(event) {
        setParentWidth(event.nativeEvent.layout.width);
    }

    let item = props.item;
    let labels = props.labels;
    let show = props.show;

    if (
        !show.equipmentUsability &&
        !show.tempFixPromiseDate &&
        !show.supplierServiceCategoryCode &&
        !show.supplierServiceCategoryOrganization &&
        !show.providerServiceCategoryCode &&
        !show.providerServiceCategoryOrganization &&
        !show.workAddress &&
        !show.estimatedLaborCost &&
        !show.estimatedMaterialCost &&
        !show.estimatedMiscellaneousCost &&
        !show.estimatedTotalCost &&
        !show.permanentFixPromisedDate &&
        !show.temporaryFixDateCompleted &&
        !show.serviceProblemCode
    ) {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }} onLayout={(event) => onLayout(event)} >
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

            <HideableLine parentWidth={parentWidth} leftShow={show.equipmentUsability} rightShow={show.tempFixPromiseDate} leftLabel={labels.equipmentUsability} leftData={item.customerServiceDetails.equipmentUsability} rightLabel={labels.tempFixPromiseDate} rightData={item.customerServiceDetails.tempFixPromiseDate} />
            <HideableLine parentWidth={parentWidth} leftShow={show.supplierServiceCategoryCode} rightShow={show.supplierServiceCategoryOrganization} leftLabel={labels.supplierServiceCategoryCode} leftData={item.customerServiceDetails.supplierServiceCategoryCode} rightLabel={labels.supplierServiceCategoryOrganization} rightData={item.customerServiceDetails.supplierServiceCategoryOrganization} />
            <HideableLine parentWidth={parentWidth} leftShow={show.providerServiceCategoryCode} rightShow={show.providerServiceCategoryOrganization} leftLabel={labels.providerServiceCategoryCode} leftData={item.customerServiceDetails.providerServiceCategoryCode} rightLabel={labels.providerServiceCategoryOrganization} rightData={item.customerServiceDetails.providerServiceCategoryOrganization} />
            <HideableLine parentWidth={parentWidth} leftShow={show.workAddress} rightShow={show.estimatedLaborCost} leftLabel={labels.workAddress} leftData={item.customerServiceDetails.workAddress} rightLabel={labels.estimatedLaborCost} rightData={item.customerServiceDetails.estimatedLaborCost} />
            <HideableLine parentWidth={parentWidth} leftShow={show.estimatedMaterialCost} rightShow={show.estimatedMiscellaneousCost} leftLabel={labels.estimatedMaterialCost} leftData={item.customerServiceDetails.estimatedMaterialCost} rightLabel={labels.estimatedMiscellaneousCost} rightData={item.customerServiceDetails.estimatedMiscellaneousCost} />
            <HideableLine parentWidth={parentWidth} leftShow={show.estimatedTotalCost} rightShow={show.permanentFixPromisedDate} leftLabel={labels.estimatedTotalCost} leftData={item.customerServiceDetails.estimatedTotalCost} rightLabel={labels.permanentFixPromisedDate} rightData={item.customerServiceDetails.permanentFixPromisedDate} />
            <HideableLine parentWidth={parentWidth} leftShow={show.temporaryFixDateCompleted} rightShow={show.serviceProblemCode} leftLabel={labels.temporaryFixDateCompleted} leftData={item.customerServiceDetails.temporaryFixDateCompleted} rightLabel={labels.serviceProblemCode} rightData={item.customerServiceDetails.serviceProblemCode} />
        </View>
    );
}

export default CustomerDetails;