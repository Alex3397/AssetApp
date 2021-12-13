import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, Image, StyleSheet, TextInput, Text } from "react-native";

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <>
            <Text style={{ color: colors.text, alignSelf: "center" }}>Hello</Text>
        </>
    );
}