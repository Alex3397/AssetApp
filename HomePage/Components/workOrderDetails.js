import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View, ScrollView } from "react-native";
import Storage from '../../classes/Storage/Storage';
import * as WorkOrderDetailsTemplate from '../../Templates/WorkOrderDetailsTemplate.json';
import * as Network from 'expo-network';
import { color } from 'react-native-reanimated';

export default function HomeScreen({ navigation, route }) {
    const storage = new Storage();
    const { colors } = useTheme();

    const [item, setData] = useState(WorkOrderDetailsTemplate);
    const [called, setCalled] = useState(false);
    const { workOrderLabels } = route.params;

    (() => {
        if (item.status == 500) {
            item.status = "Recuperando dados"
        }
    }
    )()

    async function getWorkOrderDetails(update) {
        var networkState = await Network.getNetworkStateAsync();
        var selectedItem = await storage.getObject('selectedItem');
        var key = selectedItem.workOrderCode + " : " + selectedItem.organization;

        if ((networkState.isConnected && networkState.type.includes('WIFI')) || (networkState.isConnected && update)) {

            var host = await storage.getArticle('host');
            var token = await storage.getArticle('token');

            var url = host + ':8080/mobile/workOrderDetails?token=' + token + '&workOrderCode=' + selectedItem.workOrderCode + '&organization=' + selectedItem.organization;
            fetch(url).then(response => response.json()).then((data) => { setData(data) })

        } else {
            var workOrderData = storage.getObject(key);
            setData(workOrderData)
        }
    }

    useEffect(async () => {
        navigation.addListener('focus', () => {
            console.log("getWorkData via Listener")
            if (!called) getWorkOrderDetails(false);
            setCalled(true)
        });
    }, [])

    return (
        <>
            <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "#2196F3", position: "absolute", top: -45, right: 50, borderColor: 'white', borderWidth: 1, zIndex: 9999999 }} onPress={() => { console.log('Pressed.'); getWorkOrderDetails(true) }} >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Procurar</Text>
            </Pressable>
            <ScrollView>

                <View>
                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{item.code} - {item.description}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Status: {item.status}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Organização: {item.organization}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo: {item.type}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Departamento: {item.department}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Criado por: {item.createdBy}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Criado em: {item.createdDate}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Localização: {item.locationCode} - {item.locationDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Espaço de Trabalho: {item.workspace}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Cobertura: {item.coverageType}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Site OEM/ID de Sistem: {item.oemSite}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança: {item.safety}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Garantia: {item.warranty}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Dependente: {item.depend}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Pesquisa: {item.survey}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Varios Equipamentos: {item.multipleEquipments}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Impresso: {item.printed}</Text>
                    </View>

                    <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, paddingTop: 10, borderRadius: 25 }}>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center", marginBottom: 5 }}>Equipamento</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{item.equipmentCode} - {item.equipmentDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo: {item.equipmentType}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Organização: {item.equipmentOrganization}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Posição: {item.positionCode} - {item.positionDescription}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Alias: {item.equipmentAlias}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Fabricante: {item.equipmentManufacturer}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Fornecedor: {item.supplier}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Número de série: {item.serialNumber}</Text>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }}>Modelo: {item.model}</Text>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Programação</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data Reportada: {item.schedule.reportedDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Atribuído por: {item.schedule.assignedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Atribuído a: {item.schedule.assignedTo}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de início progamada: {item.schedule.programedStartDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de fim progamada: {item.schedule.programedEndDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de início solicitada: {item.schedule.solicitedStartDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de fim solicitada: {item.schedule.solicitedEndDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de início: {item.schedule.startDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de fim: {item.schedule.endDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Turno: {item.schedule.shift}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Orçamento: {item.schedule.campaign}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Campanha: {item.schedule.campaign}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Status da Campanha: {item.schedule.campaignStatus}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>SS-Nº da Solicitação de Serviço: {item.schedule.serviceRequestCode}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de referência linear</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Ponto Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Descrição da Referência: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Referência Geográfica: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Ponto Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Descrição da Referência: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Referência Geográfica: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Direção de Inspeção: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Fluxo: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de relação: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "center" }}>Deixar expansível aqui</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Ponto de Referência Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>% de Deslocamento Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Direção do Deslocamento Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Referência Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento de Referência Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Direção do Deslocamento de Referência Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Coordenada X Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Coordenada Y Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Latitude Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Longitude Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de relação Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento Horizontal Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Deslocamento Horizontal Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento Vertical Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Deslocamento Vertical Inicial: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16, marginTop: 20 }}>Ponto de Referência Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>% de Deslocamento Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Direção do Deslocamento Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Referência Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento de Referência Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Direção do Deslocamento de Referência Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Coordenada X Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Coordenada Y Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Latitude Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Longitude Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de relação Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento Horizontal Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Deslocamento Horizontal Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Deslocamento Vertical Final: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Deslocamento Vertical Final: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes da OS</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Classe: {item.details.classId}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de Problema: {item.details.problemCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nível Critico: {item.details.criticality}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de MP: {item.details.ppmCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Plano de manutenção - Sequência: {item.details.maintenancePatternCode} - {item.details.maintenancePatterDescription}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>OS Principal: {item.details.parentWorkOrder}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Número AT: {item.details.cnNumber}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Sessão de Programação: {item.details.msProject}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Tipo de Sessão de Programação: {item.details.schedulingSessionType}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de Motivo: {item.details.causeCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Cliente: {item.details.customerCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Propriedade: {item.details.level1}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nome do Chamador: {item.details.callerName}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Motivo da Rejeição: {item.details.rejectionReason}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reaberto: {item.details.reOpened}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Contrato de Cliente: {item.details.customerContractCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Pacote de Serviços: {item.details.workPackage}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Alerta: {item.details.alertCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança Revisada por: {item.details.safetyReviewedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Autorizações Revisadas por: {item.details.permitReviewedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>OS Padrão: {item.details.standardWo}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Prioridade: {item.details.priorityCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de custo: {item.details.costCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Valor de Destino: {item.details.targetValue}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Última leitura do medidor: {item.details.lastMeterRating}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Ativar Evento: {item.details.triggerEvent}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de Falha: {item.details.failureCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de Ação: {item.details.actionCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Rota: {item.details.routeCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Status da Inspeção: {item.details.routeStatus}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Custo de Parada: {item.details.downTimeCost}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Horas de Parada: {item.details.downTimeHours}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de vencimento MP Original: Falta Achar</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>OS de Origem - Atividade: {item.details.originalWorkOrder}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Trabalho de Origem: Falta Achar</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Prioridade Calculada: {item.details.calculatedPriority}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Secundário: {item.details.minor}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Preservar Prioridade Calculada: {item.details.preserveCalculatedPriority}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Latitude: {item.details.latitude}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Longitude: {item.details.longitude}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Atividade</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos definidos pelo usuário</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Campos personalizados</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Controle de incidentes</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Produção</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Conformidade</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Reportado por: {item.schedule.reportedBy}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Assinatura Eletrônica: </Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "center" }}>{item.esigner}  -  {item.esignDate}  -  {item.esignType}</Text>
                </View>
            </ScrollView>
        </>
    );
}