import React, { useState, useContext, useRef } from "react";
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Modal } from "react-native";
import { useTheme } from '@react-navigation/native';
import CheckBox from '../Utilities/CheckBox';
import Icon from "react-native-vector-icons/FontAwesome";
import TextBox from 'react-native-password-eye';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [saveUserInfo, setSaveUserInfo] = useState(false);
    const [iconName, setIconName] = useState('eye');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [warning, setWarning] = useState('');
    const [response, setResponse] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const image = colors.background.toString() === 'rgb(1, 1, 1)' ? require('./../../images/folk-pattern-black.png') : require('./../../images/folk-pattern.png');

    const passwordInput = useRef();

    const getArticle = async (key) => {
        try {
            return await AsyncStorage.getItem('@'.concat(key));
        } catch (e) {
            console.log(e);
        }
    };

    const saveArticle = async (key, value) => {
        try {

            await AsyncStorage.setItem('@'.concat(key), value);
            console.log('Saving ' + value + ' using ' + key)
        } catch (e) {
            console.log(e);
        }
    };

    const saveUserData = async (user, pass) => {
        try {
            console.log('saving user data');
            saveArticle('username', user);
            saveArticle('password', pass);
            console.log('saved user data');
        } catch (e) {
            console.log(e)
        }
    }

    const validate = async () => {

        var organization = await getArticle('organization');
        var tenant = await getArticle('tenant');
        var host = await getArticle('host');

        console.log(organization)
        console.log(tenant)
        console.log(host)
        console.log(user)
        console.log(pass)

        if ((!user || !pass)) {
            setWarning('Usuário e senha não podem estar em branco.')
        } else if (organization != null && tenant != null && host != null) {

            var xhr = new XMLHttpRequest();
            var url = host + ':8080/validate';
            xhr.open("POST", url);

            xhr.setRequestHeader("Accept", "*/*");
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.timeout = 2500;
            xhr.ontimeout = () => { xhr.abort }

            xhr.onreadystatechange = function () {
                console.log(xhr.readyState)
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.response);
                    setModalVisible(true)

                    if (xhr.responseText.includes("User validated.")) {
                        setModalTitle('Bem vindo.');
                        setResponse('Seu usuário foi validado com sucesso.');
                        setButtonText('Continuar.')
                    } else {
                        if (xhr.status == 0) {
                            setModalTitle('Erro de rede.');
                            setResponse('Não foi possível se conectar ao servidor, qualquer dado que for gerado dentro do aplicativo ficará salvo e será enviado ao servidor assim que a conexão for restabelecida.');
                            setButtonText('Tudo bem.')
                        } else if (xhr.responseText.includes("Please make certain all credentials are entered correctly.")) {
                            setModalTitle('Usuário inválido.')
                            setResponse('O usuário e/ou senha estão incorretos.\n\nVerifique se as credenciais foram inseridas corretamente.\nVocê poderá continuar utilizando o aplicativo. Todos os dados que forem gerados dentro do aplicativo ficarão salvos, mas somente quando você estabelecer a conexão com o servidor de forma correta os dados serão enviados.')
                            setButtonText('Tudo bem.')
                        }
                        else {
                            setModalTitle('Erro não previsto.');
                            setResponse(xhr.response);
                            setButtonText('Puts.')
                        }
                    }
                    if (saveUserInfo) {
                        saveUserData(user, pass);
                    }
                }
            };

            console.log('before sending data: ')
            console.log(user)
            console.log(pass)
            console.log(organization)
            console.log(tenant)

            var data = {
                userName: user,
                password: pass,
                organization: organization,
                tenant: tenant
            };
            xhr.send(JSON.stringify(data));
        }
        else {
            setWarning('Usuário e/ou senha incorretos.')
        }
    }

    (async () => {
        var saveData = JSON.parse(await getArticle('savedata'));
        console.log(saveData);
        if (saveData != null) setSaveUserInfo(saveData);

        if (saveUserInfo) {
            var username = await getArticle('username');
            var password = await getArticle('password');

            if (username != null) setUser(username);
            if (password != null) setPass(password);
        }
    }) ()

    return (
        <>
            <ImageBackground source={image} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode="repeat">
                <Modal animationType="fade" statusBarTranslucent={true} transparent={true} visible={modalVisible}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                        <View style={{ margin: 20, backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
                            <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{modalTitle}</Text>
                            <Text style={{ marginBottom: 15, textAlign: "center", color: "black" }}>{response}</Text>
                            <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "#2196F3" }} onPress={() => {setModalVisible(false); navigation.navigate('HomePage')}} >
                                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{buttonText}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: colors.text, fontSize: 50, fontFamily: 'serif' }}>Asset</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: colors.background, padding: 25 }}>
                    <View style={{ position: 'absolute', top: 10, alignSelf: 'flex-start', marginTop: 25, marginLeft: 25 }}>
                        <Text style={{ color: colors.text, fontSize: 25, fontFamily: 'serif' }}>Faça login</Text>
                        <Text style={{ color: colors.text, fontFamily: 'serif' }}>Insira suas credenciais</Text>
                    </View>

                    <TextInput autoCapitalize='characters' style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 25 }} placeholder="Usuário" placeholderTextColor={colors.text} onChangeText={user => { setUser(user); saveUserData(user,pass); }} onSubmitEditing={() => { passwordInput.current.focus(); }} returnKeyType="next" defaultValue={user} />
                    <View>
                        <TextInput autoCapitalize='none' secureTextEntry={iconName == 'eye' ? true : false} style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 5 }} placeholder="Senha" placeholderTextColor={colors.text} onChangeText={ pass => {setPass(pass); saveUserData(user,pass); }} ref={passwordInput} returnKeyType="send" onSubmitEditing={() => { validate() }} defaultValue={pass} />

                        <Pressable style={{ position: "absolute", alignSelf: "flex-end", marginTop: 25, padding: 8 }} onPress={() => { iconName == 'eye' ? setIconName('eye-slash') : setIconName('eye') }}>
                            <Icon name={iconName} style={{ fontSize: 20 }} color={colors.text} />
                        </Pressable>
                    </View>

                    <Text style={{ color: 'red', fontSize: 12, alignSelf: 'center' }}>{warning}</Text>
                    <CheckBox label="Lembrar informações" labelSide="right" labelStyle={{ color: colors.text }} value={saveUserInfo} onChange={() => { setSaveUserInfo(!saveUserInfo); saveArticle('savedata', JSON.stringify(!saveUserInfo)); saveUserInfo ? saveUserData(user,pass) : saveUserData('','') }} />

                    <Pressable style={{ marginTop: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => { validate(); }} >
                        <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.text }}>Entrar</Text>
                    </Pressable>
                    <Pressable style={{ marginTop: 15, marginBottom: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => navigation.navigate('Settings')} >
                        <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.primary }}>Configuração</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </>
    );
}