import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomePage from './components/HomePage/HomePage';
import Settings from './components/Settings/Settings';
import { StatusBar } from 'expo-status-bar';
const Drawer = createDrawerNavigator();

export default function App() {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    const statusBarColor = scheme === 'dark' ? 'light' : 'dark';
    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <StatusBar style={statusBarColor} />
                <Drawer.Navigator screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name="Login" component={LoginScreen} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="HomePage" component={HomePage} />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}