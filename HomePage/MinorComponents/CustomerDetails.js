import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import Storage from '../../classes/Storage/Storage';

const CustomerDetails = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    if (item.customerServiceDetails.equipmentUsability == ""
        && item.customerServiceDetails.tempFixPromiseDate == ""
        && item.customerServiceDetails.supplierServiceCategoryCode == ""
        && item.customerServiceDetails.supplierServiceCategoryOrganization == ""
        && item.customerServiceDetails.providerServiceCategoryCode == ""
        && item.customerServiceDetails.providerServiceCategoryOrganization == ""
        && item.customerServiceDetails.workAddress == ""
        && item.customerServiceDetails.estimatedLaborCost == ""
        && item.customerServiceDetails.estimatedMaterialCost == ""
        && item.customerServiceDetails.estimatedMiscellaneousCost == ""
        && item.customerServiceDetails.estimatedTotalCost == ""
        && item.customerServiceDetails.permanentFixPromisedDate == ""
        && item.customerServiceDetails.temporaryFixDateCompleted == ""
        && item.customerServiceDetails.serviceProblemCode == "") {
        return (<></>);
    }

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

            <HideableTextField label="Capacidade de utilização do equipmento" data={item.customerServiceDetails.equipmentUsability} />
            <HideableTextField label="Data potencial de conserto temporário" data={item.customerServiceDetails.tempFixPromiseDate} />
            <HideableTextField label="Fornecedor" data={item.customerServiceDetails.supplierServiceCategoryCode} />
            <HideableTextField label="Organização do fornecedor" data={item.customerServiceDetails.supplierServiceCategoryOrganization} />
            <HideableTextField label="Categoria de serviço" data={item.customerServiceDetails.providerServiceCategoryCode} />
            <HideableTextField label="Organização da Categoria de serviço" data={item.customerServiceDetails.providerServiceCategoryOrganization} />
            <HideableTextField label="Endereço do trabalho" data={item.customerServiceDetails.workAddress} />
            <HideableTextField label="Custo Estimado de mão de obra" data={item.customerServiceDetails.estimatedLaborCost} />
            <HideableTextField label="Custo Estimado de material" data={item.customerServiceDetails.estimatedMaterialCost} />
            <HideableTextField label="Custo Estimado diversos" data={item.customerServiceDetails.estimatedMiscellaneousCost} />
            <HideableTextField label="Custo Estimado Totais" data={item.customerServiceDetails.estimatedTotalCost} />
            <HideableTextField label="Data potencial de conserto permanente" data={item.customerServiceDetails.permanentFixPromisedDate} />
            <HideableTextField label="Data de conclusão de conserto temporário" data={item.customerServiceDetails.temporaryFixDateCompleted} />
            <HideableTextField label="Código de serviço" data={item.customerServiceDetails.serviceProblemCode} />
        </View>
    );
}

export default CustomerDetails;