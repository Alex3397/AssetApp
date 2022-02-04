import React, { useState, useContext, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Button, Pressable, FlatList, View, ScrollView } from "react-native";
import Storage from '../../classes/Storage/Storage';
import * as WorkOrderDetailsTemplate from '../../Templates/WorkOrderDetailsTemplate.json';
import * as UserDefinedFieldsLabels from '../../Templates/UserDefinedFieldsLabels.json';
import * as Network from 'expo-network';
import { color } from 'react-native-reanimated';
import UserDefinedFields from '../MinorComponents/UserDefinedFields';

export default function HomeScreen({ navigation, route }) {
    const storage = new Storage();
    const { colors } = useTheme();

    const [item, setData] = useState(WorkOrderDetailsTemplate);
    const [userLabels, setLabels] = useState(UserDefinedFieldsLabels)
    const [called, setCalled] = useState(false);

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

            var labelUrl = host + ':8080/mobile/userDefinedFieldsLabels?token=' + token;
            fetch(labelUrl).then(response => response.json()).then((data) => {setLabels(data); storage.saveObject("labels",data)})
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

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Atividade: {item.activity.activityCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nível: {item.activity.tradeCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Plano de tarefa: {item.activity.taskCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Lista de materiais: {item.activity.materialList}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Motivo do reparo: {item.activity.repairReason}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Trabalho executado: {item.activity.workAccomplished}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Falha da peça segundo técnico: {item.activity.technicianPartFailure}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Fabricante: {item.activity.manufacturerCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de Inicio: {item.activity.activityStartDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de Término: {item.activity.activityEndDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Horas Estimadas: {item.activity.estimatedHours}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Horas Restantes: {item.activity.hoursRemaining}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Pessoal Requerido: {item.activity.persons}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nível do Sistema: {item.activity.systemLevel}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nível de Montagem: {item.activity.assemblyLevel}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Nível de Componente: {item.activity.componentLevel}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Localização do Componente: {item.activity.partLocation}</Text>
                </View>

                

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de serviço ao cliente</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Capacidade de utilização do equipmento: {item.customerServiceDetails.equipmentUsability}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data potencial de conserto temporário: {item.customerServiceDetails.tempFixPromiseDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Fornecedor: {item.customerServiceDetails.supplierServiceCategoryCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Organização do fornecedor: {item.customerServiceDetails.supplierServiceCategoryOrganization}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Categoria de serviço: {item.customerServiceDetails.providerServiceCategoryCode}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Organização da Categoria de serviço: {item.customerServiceDetails.providerServiceCategoryOrganization}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Endereço do trabalho: {item.customerServiceDetails.workAddress}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Custo Estimado de mão de obra: {item.customerServiceDetails.estimatedLaborCost}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Custo Estimado de material: {item.customerServiceDetails.estimatedMaterialCost}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Custo Estimado diversos: {item.customerServiceDetails.estimatedMiscellaneousCost}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Custo Estimado Totais: {item.customerServiceDetails.estimatedTotalCost}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data potencial de conserto permanente: {item.customerServiceDetails.permanentFixPromisedDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de conclusão de conserto temporário: {item.customerServiceDetails.temporaryFixDateCompleted}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Código de serviço: {item.customerServiceDetails.problemCode}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Controle de incidentes</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Lesão de paciente/visitante : {item.incidentControl.patientIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Lesão/Enfermidade de pessoal: {item.incidentControl.staffInjuryIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente de Segurança: {item.incidentControl.securityIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Dano à Propriedade: {item.incidentControl.propertyDamageIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente com Materiais Perigosos: {item.incidentControl.hazardousMaterialsIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente de Segurança contra incêndios: {item.incidentControl.fireSafetyIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente com Equipamentos Médicos: {item.incidentControl.medicalEquipmentIncident}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Incidente no Sistema de Serviços Públicos: {item.incidentControl.utilitySystemIncident}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Produção</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Solicitação de Produção: {item.productionDetails.productionRequest}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Revisão da Solicitação de Produção: {item.productionDetails.productionRequestRevision}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Ordem de Produção: {item.productionDetails.productionOrder}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Propriedade de Produção: {item.productionDetails.productionPriority}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Descrição da Propriedade de Produção: {item.productionDetails.productionPriorityDescription}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de Inicio da Produção: {item.productionDetails.productionStartDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Data de Término da Produção: {item.productionDetails.productionEndDate}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Entidade Contábil: {item.productionDetails.accountingEntity}</Text>
                </View>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Detalhes de Conformidade</Text>

                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Licença de Obra Acima do Teto: {item.compliance.aboveCeilingPermit}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança de Vida Provisória: {item.compliance.interimLifeSafety}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Controle de Infecção Provisório: {item.compliance.interimInfectionControl}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Avaliação de Riscos Pré-construção: {item.compliance.preConstructionRiskAssessment}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Plano de Aperfeiçoamento: {item.compliance.planImprovement}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Declaração de Condições: {item.compliance.statementOfCondition}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Programa de Manutenção Predial: {item.compliance.buildMaintenanceProgram}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Equipamento de Proteção Individual: {item.compliance.personalProtectiveEquipment}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Bloqueio/Etiquetagem: {item.compliance.lockout}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Autorização Foco de Incêndio: {item.compliance.burnPermit}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Espaço Confinado: {item.compliance.confinedSpace}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Segurança do Paciente: {item.compliance.patientSafety}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Aviso de Recall: {item.compliance.recallNotice}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>SMDA: {item.compliance.smda}</Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>Confidencialidade HIPAA: {item.compliance.hipaaConfidentiality}</Text>
                </View>

                <UserDefinedFields userLabels={userLabels} item={item}/>

                <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Assinatura Eletrônica: </Text>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "center" }}>{item.esigner}  -  {item.esignDate}  -  {item.esignType}</Text>
                </View>
            </ScrollView>
        </>
    );
}