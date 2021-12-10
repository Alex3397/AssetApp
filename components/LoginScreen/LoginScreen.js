import React, { useState, useContext, useRef } from "react";
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text, Modal } from "react-native";
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '../Utilities/CheckBox';
import Test from '../../classes/Test.js';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [saveUserInfo, setSaveUserInfo] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [warning, setWarning] = useState('');
    const [response, setResponse] = useState('');
    const image = colors.background.toString() === 'rgb(1, 1, 1)' ? require('./../../images/folk-pattern-black.png') : require('./../../images/folk-pattern.png');

    const passwordInput = useRef();

    const getArticle = async (key) => {
        try {
            return await AsyncStorage.getItem('@'.concat(key));
        } catch (e) {
            console.log(e);
        }
    };

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
            var url = 'http://192.168.1.102:8080/getPart?token=7cc743bb-d0d0-4d69-90ee-26a822d09ffe';
            xhr.open("GET", url);

            xhr.setRequestHeader("Accept", "*/*");

            xhr.onreadystatechange = function () {
                console.log(xhr.readyState)
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.response);
                    setModalVisible(true)
                    setResponse(xhr.response)
                }
            };

            xhr.send(null);
        }
        else {
            setWarning('Não é possivel conectar com o servidor. Verifique os parâmetros de configuração.')
        }
    }

    return (
        <>
            <ImageBackground
                source={image}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                resizeMode="repeat"
            >
                <Modal
                    animationType="fade"
                    statusBarTranslucent={true}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 }}>
                        <View style={{ margin: 20, backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}>
                            <Text style={{ marginBottom: 15, textAlign: "center" }}>Hello World!</Text>
                            <Text>{response}</Text>
                            <Pressable
                                style={{ borderRadius: 20,padding: 10, elevation: 2, backgroundColor: "#2196F3" }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 1.25, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: colors.text, fontSize: 50, fontFamily: 'serif' }}>Titulo</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: colors.background, padding: 25 }}>
                    <View style={{ position: 'absolute', top: 10, alignSelf: 'flex-start', marginTop: 25, marginLeft: 25 }}>
                        <Text style={{ color: colors.text, fontSize: 25, fontFamily: 'serif' }}>Onde eu estou?</Text>
                        <Text style={{ color: colors.text, fontFamily: 'serif' }}>Será que estou em lagoinha</Text>
                    </View>

                    <TextInput autoCapitalize='none' style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 25 }} placeholder="Usuário" placeholderTextColor={colors.text} onChangeText={user => setUser(user)} onSubmitEditing={() => { passwordInput.current.focus(); }} returnKeyType="next" />
                    <TextInput autoCapitalize='none' secureTextEntry={true} style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 5 }} placeholder="Senha" placeholderTextColor={colors.text} onChangeText={pass => setPass(pass)} ref={passwordInput} returnKeyType="send" onSubmitEditing={() => { validate() }} />

                    <Text style={{ color: 'red', fontSize: 12, alignSelf: 'center' }}>{warning}</Text>


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