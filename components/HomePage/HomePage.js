import React from 'react';
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text } from "react-native";
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <>
            <Text style={{ color: colors.text }}>Hello</Text>
        </>
    );
}