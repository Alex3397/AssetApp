import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomePage from './HomePage/HomePage';
import Settings from './components/Settings/Settings';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    const statusBarColor = scheme === 'dark' ? 'light' : 'dark';
    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <StatusBar style={statusBarColor} />
                <Stack.Navigator screenOptions={{ headerShown: false, swipeEnabled: false, cardShadowEnabled: false, cardOverlayEnabled: false, animationEnabled: false }} backBehavior='none' >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="HomePage" component={HomePage} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}