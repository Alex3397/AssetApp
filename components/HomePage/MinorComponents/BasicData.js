import React, { useState, useContext, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableLine from '../UtilityComponents/HideableLine';
import Equipment from '../MinorComponents/Equipment';

const BasicData = (props) => {
    const { colors } = useTheme();
    var item = props.item;

    return (
        <View>
            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{item.code} - {item.description}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Status: {item.status}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Organização: {item.organization}</Text>
                <HideableLine rightLabel="Tipo" rightData={item.type} leftLabel="Departamento" leftData={item.department} />
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Criado por: {item.createdBy}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Criado em: {item.createdDate}</Text>
            </View>

            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, marginTop: 0, borderRadius: 25 }}>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Localização: {item.locationCode} - {item.locationDescription}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Espaço de Trabalho: {item.workspace}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Cobertura: {item.coverageType}</Text>
                <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Site OEM/ID de Sistem: {item.oemSite}</Text>
            </View>

            <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, marginTop: 0, borderRadius: 25 }}>
                <HideableLine rightLabel="Segurança" rightData={item.safety} leftLabel="Garantia" leftData={item.warranty} type="checkbox" rightShow={false} leftShow={false} />
                <HideableLine rightLabel="Dependente" rightData={item.depend} leftLabel="Pesquisa" leftData={item.survey} type="checkbox" rightShow={false} leftShow={false} />
                <HideableLine rightLabel="Varios Equipamentos" rightData={item.multipleEquipments} leftLabel="Impresso" leftData={item.printed} type="checkbox" rightShow={false} leftShow={false} />
            </View>

            <Equipment item={item} />
        </View>
    );
}

export default BasicData;