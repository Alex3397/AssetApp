import React from 'react';
import { Button, View, SafeAreaView, Pressable } from 'react-native';
import { ImageBackground, Image, StyleSheet, TextInput, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkOrderList from './Components/workOrderList';
import WorkOrderDetails from './Components/workOrderDetails';

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
    const { colors } = useTheme();
    return (
        <>
            <Drawer.Navigator>
                <Drawer.Screen name='Ordens de Serviço' component={WorkOrderList} />
                <Drawer.Screen name='Ordem de Serviço' component={WorkOrderDetails} />
            </Drawer.Navigator>
        </>
    );
}