import React, { useState, useContext, useRef, useEffect } from "react";
import { Button, View, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Modal, Keyboard, RefreshControl } from "react-native";
import { useTheme } from '@react-navigation/native';
import CheckBox from '../../HomePage/UtilityComponents/CheckBox';
import Icon from "react-native-vector-icons/FontAwesome";
import Storage from '../../../classes/Storage/Storage';
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';
import * as Network from 'expo-network';
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const storage = new Storage();
const BACKGROUND_FETCH_TASK = 'background-fetch';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    console.log("Running async task")
    getData().then(() => { console.log("Task done") });
    return BackgroundFetch.BackgroundFetchResult.NewData;
});

const getFuckingData = async (url, times, list, storage) => {
    for (let index = 1; index <= times; index++) {

        console.log("fetching data with position: " + index + "01\nfrom: " + url);

        let newUrl = url.replace('&position=0', "&position=" + index + "01");
        fetch(newUrl).then((response) => response.json()).then((newData) => {
            list = list.concat(newData.list);
            list.sort(function (a, b) { return a.id - b.id; });
            if (url.includes("equipments")) storage.saveObject('assets', list);
            if (url.includes("positions")) storage.saveObject('positions', list);
            if (url.includes("systems")) storage.saveObject('systems', list);
            if (url.includes("organizations")) storage.saveObject('organizations', list);
            if (url.includes("departments")) storage.saveObject('departments', list);
        });

        await sleep(7500);
    }

};

const getDataFromUrl = async (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = async () => {
        if (xhr.readyState == 4) {
            let data = JSON.parse(xhr.response);
            let list = data.list;
            let times = Math.floor(data.records / 100);

            let storedList = [];

            if (url.includes("equipments")) storedList = await storage.getObject('assets');
            if (url.includes("positions")) storedList = await storage.getObject('positions');
            if (url.includes("systems")) storedList = await storage.getObject('systems');
            if (url.includes("organizations")) storedList = await storage.getObject('organizations');
            if (url.includes("departments")) storedList = await storage.getObject('departments');

            if (storedList == null || data.records > storedList.length) {

                if (url.includes("equipments")) storage.saveObject('assets', list);
                if (url.includes("positions")) storage.saveObject('positions', list);
                if (url.includes("systems")) storage.saveObject('systems', list);
                if (url.includes("organizations")) storage.saveObject('organizations', list);
                if (url.includes("departments")) storage.saveObject('departments', list);

                getFuckingData(url, times, list, storage);
            }
        }
    }

    xhr.send();
}

const getUserStatusAuth = async (host, token) => {
    let url = host + '/validate/status?token=' + token;
    fetch(url).then(response => response.json()).then((data) => { storage.saveObject("statusAuth", data); })
}

const getData = async () => {
    let networkState = await Network.getNetworkStateAsync();
    let lastUpdated = await storage.getObject("lastUpdated");
    let validated = await storage.getObject("userValidated");

    if (lastUpdated != new Date().getDate() && networkState.isConnected && validated) {

        let host = await storage.getArticle('usableHost');
        let token = await storage.getArticle('token');

        if (host != null && host != undefined && token != null && token != undefined) {

            getUserStatusAuth(host, token);

            fetch(host + '/mobile/userDefinedFieldsLabels?token=' + token).then(response => response.json()).then((data) => { storage.saveObject("labels", data) });
            fetch(host + '/mobile/fields2show?token=' + token).then(response => response.json()).then((data) => { storage.saveObject("showfields", data) });

            getDataFromUrl(host + '/mobile/equipments?token=' + token + "&position=0");
            getDataFromUrl(host + '/mobile/positions?token=' + token + "&position=0");
            getDataFromUrl(host + '/mobile/systems?token=' + token + "&position=0");

            getDataFromUrl(host + '/mobile/organizations?token=' + token + "&position=0");
            getDataFromUrl(host + '/mobile/departments?token=' + token + "&position=0");

            storage.saveObject("lastUpdated", new Date().getDate());
            storage.saveObject("gotData", true);
        }
    }
}

export default function HomeScreen({ navigation }) {
    const { colors, dark } = useTheme();

    const [modalVisible, setModalVisible] = useState(false);
    const [saveUserInfo, setSaveUserInfo] = useState(false);
    const [iconName, setIconName] = useState('eye');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [response, setResponse] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [savedOrganization, setOrg] = useState('');
    const [savedTenant, setTenant] = useState('');
    const [savedUrl, setUrl] = useState('');
    const [savedCon, setCon] = useState('');
    const [savedCustomUrl, setCustomUrl] = useState('');
    const [savedCustomBool, setCustomBool] = useState(false);
    const [savedPort, setPort] = useState('');
    const [warning, setWarning] = useState('');
    const image = dark ? require('../../../assets/images/folk-pattern-black.jpg') : require('../../../assets/images/folk-pattern.jpg');

    async function registerBackgroundFetchAsync() {
        console.log("Registering async task");
        return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
            minimumInterval: 60 * 15, // 15 minutes
            stopOnTerminate: false, // android only,
            startOnBoot: true, // android only
        });
    }

    async function unRegisterBackgroundFetchAsync() {
        console.log("Unregistering async task");

        return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
    }

    let language = {};

    if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
    else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
    else if (language != Locale.en) language = Locale.en;

    const passwordInput = useRef();
    const saveUserData = async (user, pass) => {
        try {
            storage.saveArticle('username', user);
            storage.saveArticle('password', pass);
        } catch (e) {
            console.log(e)
        }
    }

    const validate = async () => {
        let organization = await storage.getArticle('organization');
        let tenant = await storage.getArticle('tenant');
        let host = await storage.getArticle('usableHost');

        if ((tenant == null || tenant == undefined) && (organization == null || organization == undefined)) {
            setWarning('Tenant and Organization must not be blank');
        } else if (tenant == null || tenant == undefined) setWarning('Tenant must not be blank');
        else if (organization == null || organization == undefined) setWarning('Organization must not be blank');
        else setWarning('');

        if (host != null && host != undefined && tenant != null && tenant != undefined && organization != null && organization != undefined) {

            let xhr = new XMLHttpRequest();
            let url = host + '/validate';
            xhr.open("POST", url);

            xhr.setRequestHeader("Accept", "*/*");
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.timeout = 2000;
            xhr.ontimeout = () => { xhr.abort }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {

                    if (xhr.responseText.includes("User validated.")) {
                        setModalTitle(language.login.modal.positive.title);
                        setResponse(language.login.modal.positive.response);
                        setButtonText(language.login.modal.positive.button);
                        let token = xhr.responseText.replace("User validated.", "");
                        storage.saveArticle('token', token);
                        storage.saveObject('userValidated', true);
                        registerBackgroundFetchAsync();
                        getData();
                    } else {
                        unRegisterBackgroundFetchAsync();
                        if (xhr.status == 0) {
                            setModalTitle(language.login.modal.connectionError.title);
                            setResponse(language.login.modal.connectionError.response);
                            setButtonText(language.login.modal.connectionError.button);
                        } else if (xhr.responseText.includes("Please make certain all credentials are entered correctly.")) {
                            console.log(xhr.responseText)
                            setModalTitle(language.login.modal.invalidUser.title);
                            setResponse(language.login.modal.invalidUser.response);
                            setButtonText(language.login.modal.invalidUser.button);
                        }
                        else if (xhr.responseText.includes('Connection timed out')) {
                            console.log(xhr.responseText)
                            setModalTitle(language.login.modal.timedOut.title);
                            setResponse(language.login.modal.timedOut.response);
                            setButtonText(language.login.modal.timedOut.button);
                        }
                        else if (xhr.responseText.includes('lockout')) {
                            console.log(xhr.responseText)
                            setModalTitle(language.login.modal.unknown.title);
                            setResponse(xhr.response);
                            setButtonText(language.login.modal.unknown.button)
                        }
                        else {
                            console.log(xhr.responseText)
                            setModalTitle(language.login.modal.unknown.title);
                            setResponse(xhr.response);
                            setButtonText(language.login.modal.unknown.button)
                        }
                    }
                    setModalVisible(true);
                    if (saveUserInfo) {
                        saveUserData(user, pass);
                    }
                }
            };

            let data = {
                userName: user,
                password: pass,
                organization: organization,
                tenant: tenant
            };
            xhr.send(JSON.stringify(data));
        }
        else {
            registerBackgroundFetchAsync();
            setModalTitle("Undefined Host");
            setResponse("Unable to connect, cause: Missing connection data.\n\nOnce connection is established any data generated within the app will be sent to the server and synced.\nAny data previously stored will be used.\n\nOtherwise app will be rendered in preview mode.\nSetting up offline mode.");
            setButtonText("Continue");
            setModalVisible(true);
        }
    }

    const getSavedVariables = async () => {
        let organization = await storage.getArticle('organization');
        let tenant = await storage.getArticle('tenant');
        let host = await storage.getArticle('host');
        let con = await storage.getArticle('con');
        let custBool = await storage.getObject('customBool');
        let custUrl = await storage.getArticle('customUrl');
        let port = await storage.getArticle('port');

        setOrg(organization == null ? "" : organization);
        setTenant(tenant == null ? "" : tenant);
        setUrl(host == null ? "" : host.replace(/[^0-9.]/g, ''));
        setCon(con == null ? "" : con);
        setCustomBool(custBool == null ? "" : custBool);
        setCustomUrl(custUrl == null ? "" : custUrl);
        setPort(port == null ? "" : port);
    }

    (async () => {
        getSavedVariables()

        let saveData = JSON.parse(await storage.getArticle('savedata'));
        if (saveData != null) setSaveUserInfo(saveData);
    })()

    useEffect(async () => {
        storage.getObject('savedata').then((saveUserInfo) => {
            if (saveUserInfo) {
                storage.getArticle('username').then((username) => { if (username != null) setUser(username); });
                storage.getArticle('password').then((password) => { if (password != null) setPass(password); });
            }
        })
        navigation.addListener('focus', () => {
            getSavedVariables();
        });
    }, [])

    return (
        <>
            <ImageBackground source={image} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode="repeat">
                <Modal animationType="fade" statusBarTranslucent={true} transparent={true} visible={modalVisible}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                        <View style={{ margin: 20, backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
                            <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{modalTitle}</Text>
                            <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{response}</Text>
                            <Pressable style={{ borderRadius: 20, padding: 8, elevation: 2, backgroundColor: "#2196F3" }} onPress={async () => { setModalVisible(false); navigation.navigate('HomePage'); }} >
                                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{buttonText}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: colors.text, fontSize: 50, fontFamily: 'serif', fontStyle: "italic" }}>Asset</Text>
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: colors.background, padding: 25 }}>
                    <View style={{ position: 'absolute', top: 10, alignSelf: 'flex-start', marginTop: 25, marginLeft: 25 }}>
                        <Text style={{ color: colors.text, fontSize: 25, fontFamily: 'serif' }}>{language.login.title}</Text>
                        <Text style={{ color: colors.text, fontFamily: 'serif' }}>{language.login.sub}</Text>
                    </View>

                    <TextInput autoCapitalize='characters' style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 80, marginBottom: 20 }} placeholder={language.login.user} placeholderTextColor={colors.text} onChangeText={user => { setUser(user); saveUserData(user, pass); }} onSubmitEditing={() => { passwordInput.current.focus(); }} defaultValue={user} returnKeyType="next" blurOnSubmit={false} />
                    <View>
                        <TextInput autoCapitalize='none' secureTextEntry={iconName == 'eye' ? true : false} style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 20, marginBottom: 5 }} placeholder={language.login.password} placeholderTextColor={colors.text} onChangeText={pass => { setPass(pass); saveUserData(user, pass); }} ref={passwordInput} returnKeyType="send" onSubmitEditing={() => { validate(); }} defaultValue={pass} blurOnSubmit={false} />

                        <Pressable style={{ position: "absolute", alignSelf: "flex-end", marginTop: 25, padding: 2, paddingRight: 6 }} onPress={() => { iconName == 'eye' ? setIconName('eye-slash') : setIconName('eye') }}>
                            <Icon name={iconName} style={{ fontSize: 20 }} color={colors.text} />
                        </Pressable>
                    </View>

                    <Text style={{ color: 'red', fontSize: 12, alignSelf: 'center' }}>{warning}</Text>
                    <CheckBox label={language.login.checkbox} labelSide="right" labelStyle={{ color: colors.text }} value={saveUserInfo} onChange={() => { setSaveUserInfo(!saveUserInfo); storage.saveObject('savedata', !saveUserInfo); !saveUserInfo ? saveUserData(user, pass) : saveUserData('', '') }} />

                    <Pressable style={{ marginTop: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => { validate(); }} >
                        <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.text }}>{language.login.login}</Text>
                    </Pressable>
                    <Pressable style={{ marginTop: 25, marginBottom: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => { getSavedVariables(); navigation.navigate('Settings', { savedOrganization, savedTenant, savedUrl, savedCon, language, savedCustomBool, savedCustomUrl, savedPort }) }} >
                        <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.primary }}>{language.login.config}</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </>
    );
}