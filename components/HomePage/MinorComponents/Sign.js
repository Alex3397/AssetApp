import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Sign = (props) => {
    console.log("Sign");

    const { colors } = useTheme();

    let item = props.item;
    let show = props.show;

    if (show.sign) return(<></>)

    return (
        <View style={{ backgroundColor: colors.card, padding: 15, margin: 10, borderRadius: 25 }}>
            <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>Assinatura Eletrônica: </Text>
            <Text style={{ padding: 2, color: colors.text, fontSize: 15, alignSelf: "center", fontStyle: "italic", fontFamily: "serif" }}>{item.esigner} : {item.esignDate} : {item.esignType}</Text>
        </View>
    );
}

export default Sign;