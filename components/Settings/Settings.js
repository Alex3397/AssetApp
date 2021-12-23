import React, { useState, useContext, useRef, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Storage from '../../classes/Storage/Storage';

export default function Settings({ navigation, route }) {
  const storage = new Storage();

  const { savedOrganization, savedTenant, savedUrl } = route.params;

  const [org, setOrg] = useState(savedOrganization);
  const [tenant, setTenant] = useState(savedTenant);
  const [url, setUrl] = useState(savedUrl);
  const { colors } = useTheme();
  const image = colors.background.toString() === 'rgb(1, 1, 1)' ? require('./../../images/folk-pattern-black.png') : require('./../../images/folk-pattern.png');

  const saveData = async () => {
    storage.saveArticle('organization', org);
    storage.saveArticle('tenant', tenant);
    storage.saveArticle('host', "http://".concat(url));
  }

  const tenantInput = useRef();
  const urlInput = useRef();

  return (
    <>
      <ImageBackground
        source={image}
        style={{ width: '100%', height: '100%' }}
        resizeMode="repeat"
      >
        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ color: colors.text, fontSize: 50, fontFamily: 'serif' }}>Asset</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: colors.background, padding: 25 }}>
          <View style={{ position: 'absolute', top: 10, alignSelf: 'flex-start', marginTop: 25, marginLeft: 25 }}>
            <Text style={{ color: colors.text, fontSize: 25, fontFamily: 'serif' }}>Configurações</Text>
            <Text style={{ color: colors.text, fontFamily: 'serif' }}>Insira os valores nos campos adequados</Text>
          </View>

          <TextInput autoCapitalize="characters" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 25 }} placeholder="Organização" defaultValue={org} placeholderTextColor={colors.text} onChangeText={org => { setOrg(org); storage.saveArticle('organization', org); }} onSubmitEditing={() => { tenantInput.current.focus(); }} returnKeyType="next" />
          <TextInput autoCapitalize="characters" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 25 }} placeholder="Tenant" defaultValue={tenant} placeholderTextColor={colors.text} onChangeText={tenant => { setTenant(tenant); storage.saveArticle('tenant', tenant); }} ref={tenantInput} onSubmitEditing={() => { urlInput.current.focus(); }} returnKeyType="next" />
          <TextInput autoCapitalize="none" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 25, marginBottom: 25 }} placeholder="Endereço do servidor" defaultValue={url} placeholderTextColor={colors.text} onChangeText={url => { setUrl(url); storage.saveArticle('host', "http://".concat(url)); }} ref={urlInput} onSubmitEditing={() => { navigation.navigate('Login'); saveData(); }} returnKeyType="send" />

          <Pressable style={{ marginTop: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => { navigation.navigate('Login'); saveData(); }} >
            <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.text }}>Concluído</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </>
  );
}