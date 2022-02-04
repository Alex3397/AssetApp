import React from 'react';
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkOrderList from './MainComponents/workOrderList';
import WorkOrderDetails from './MainComponents/workOrderDetails';

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
    const { colors } = useTheme();
    return (
        <>
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.background }, headerTintColor: colors.text }}>
                <Drawer.Screen name='Ordens de Serviço' component={WorkOrderList} />
                <Drawer.Screen name='Ordem de Serviço' component={WorkOrderDetails} />
            </Drawer.Navigator>
        </>
    );
}