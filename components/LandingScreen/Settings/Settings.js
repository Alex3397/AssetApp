import React, { useState, useContext, useRef, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View, Button, Animated, Pressable, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Storage from '../../../classes/Storage/Storage';
import { ScrollView } from "react-native-gesture-handler";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { set } from "react-native-reanimated";
import CheckBox from "../../HomePage/UtilityComponents/CheckBox";
import * as Localization from 'expo-localization';
import * as Locale from '../../../Localization/Localization.json';

export default function Settings({ navigation, route }) {
  let language = {};

  if (Localization.locale.includes("pt-BR") && language != Locale["pt-BR"]) language = Locale["pt-BR"];
  else if (Localization.locale.includes("es") && language != Locale.es) language = Locale.es;
  else if (language != Locale.en) language = Locale.en;

  const storage = new Storage();

  const { savedOrganization, savedTenant, savedUrl, savedCon } = route.params;

  const [currentOffset, setCurrentOffset] = useState("Stopped");
  const [viewFlex, setViewFlex] = useState(1.5);
  const [org, setOrg] = useState(savedOrganization);
  const [tenant, setTenant] = useState(savedTenant);
  const [url, setUrl] = useState(savedUrl);
  const [conLabel, setConLabel] = useState(language.config.con.concat(": HTTP"));
  const [con, setCon] = useState(savedCon)
  const [conBool, setConBool] = useState(false);
  const { colors } = useTheme();
  const image = colors.background.toString() === 'rgb(1, 1, 1)' ? require('../../../images/folk-pattern-black.png') : require('../../../images/folk-pattern.png');


  const saveData = async () => {
    storage.saveArticle('organization', org);
    storage.saveArticle('tenant', tenant);
    storage.saveArticle('host', con.concat(url));
    storage.saveArticle('con', con);
  }

  (() => {
    if (con == "") {
      setCon("http://")
    } else if (con == "https://" && !conBool && conLabel != language.config.con.concat(": HTTPS")) {
      setConLabel(language.config.con.concat(": HTTPS"));
      setConBool(true);
    }
    if (conBool && conLabel != language.config.con.concat(": HTTPS") && con != "https://") {
      setConLabel(language.config.con.concat(": HTTPS"));
      setCon("https://");
    }
    if (!conBool && conLabel != language.config.con.concat(": HTTP") && con != "http://") {
      setConLabel(language.config.con.concat(": HTTP"));
      setCon("http://");
    }
  })()

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const animateUp = async () => {
    if (viewFlex < 8 && currentOffset == "Stopped") {
      setCurrentOffset("going up")
      for (let i = 1.5; i <= 8; i = i + 0.25) {
        setViewFlex(i);
        await sleep(0.000000001);
      }
      setCurrentOffset("Stopped")
      console.log(currentOffset)
    }
  }

  const animateDown = async () => {
    if (viewFlex > 1.5 && currentOffset == "Stopped") {
      setCurrentOffset("going down")
      for (let i = 8; i >= 1.5; i = i - 0.25) {
        setViewFlex(i);
        await sleep(0.000000001);
      }
      setCurrentOffset("Stopped")
    }
  }

  const tenantInput = useRef();
  const urlInput = useRef();

  useEffect(async () => {
    navigation.addListener('focus', () => {
      Keyboard.removeAllListeners("keyboardDidHide");
    });
  }, [])

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

        <GestureRecognizer style={{ flex: viewFlex, justifyContent: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: colors.background, padding: 25, zIndex: 999 }} onSwipeUp={() => { console.log('swiped up'); animateUp() }} onSwipeDown={() => { console.log('swiped down'); animateDown() }}>

          <View style={{ position: 'absolute', top: 10, alignSelf: 'flex-start', marginTop: 25, marginLeft: 25 }}>
            <Text style={{ color: colors.text, fontSize: 25, fontFamily: 'serif' }}>{language.config.title}</Text>
            <Text style={{ color: colors.text, fontSize: 14, fontFamily: 'serif' }}>{language.config.sub}</Text>
          </View>

          <ScrollView style={{ marginTop: 80 }}>
            <View>
              <TextInput autoCapitalize="characters" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 12, marginBottom: 12 }} placeholder={language.config.organization} defaultValue={org} placeholderTextColor={colors.text} onChangeText={org => { setOrg(org); storage.saveArticle('organization', org); }} onSubmitEditing={() => { tenantInput.current.focus(); }} returnKeyType="next" />
              <TextInput autoCapitalize="characters" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 12, marginBottom: 12 }} placeholder={language.config.tenant} defaultValue={tenant} placeholderTextColor={colors.text} onChangeText={tenant => { setTenant(tenant); storage.saveArticle('tenant', tenant); }} ref={tenantInput} onSubmitEditing={() => { urlInput.current.focus(); }} returnKeyType="next" />
              <TextInput autoCapitalize="none" style={{ color: colors.text, borderColor: colors.background, borderBottomColor: colors.text, borderWidth: 0.75, padding: 4, marginTop: 12, marginBottom: 12 }} placeholder={language.config.url} defaultValue={url} placeholderTextColor={colors.text} onChangeText={url => { setUrl(url); storage.saveArticle('host', con.concat(url)); }} ref={urlInput} onSubmitEditing={() => { navigation.navigate('Login'); saveData(); }} returnKeyType="send" />
              <CheckBox label={conLabel} labelSide="left" labelStyle={{ color: colors.text }} value={conBool} onChange={() => { setConBool(!conBool) }} />

            </View>
          </ScrollView>

          <Pressable style={{ marginTop: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 16, elevation: 3, backgroundColor: colors.card }} onPress={() => { navigation.navigate('Login'); saveData(); }} >
            <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: colors.text }}>{language.config.submit}</Text>
          </Pressable>
        </GestureRecognizer>
      </ImageBackground>
    </>
  );
}