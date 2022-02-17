import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './components/LandingScreen/LoginScreen/LoginScreen';
import Settings from './components/LandingScreen/Settings/Settings';
import HomePage from './components/HomePage/HomePage';

const Stack = createStackNavigator();

const DarkTheme = {
    dark: true,
    colors: {
        background: "rgb(0, 0, 0)",
        border: "rgb(39, 39, 41)",
        card: "rgb(25, 25, 25)",
        notification: "rgb(255, 69, 58)",
        primary: "rgb(10, 132, 255)",
        text: "rgb(229, 229, 231)",
    },
  };

export default function App() {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <StatusBar style="auto" />
                <Stack.Navigator screenOptions={{ headerShown: false, swipeEnabled: false, animationEnabled: false }} >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="HomePage" component={HomePage} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}