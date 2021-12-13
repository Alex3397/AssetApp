import React from 'react';
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page from './Components/Page';

const Drawer = createDrawerNavigator();

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <>
            <Drawer.Navigator>
                <Drawer.Screen name='asda' component={Page} />
            </Drawer.Navigator>
        </>
    );
}