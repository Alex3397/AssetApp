import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
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
        inverted: "rgb(242, 242, 242)",
        bubble: "#313131",
        complementary1: "rgb(222, 84, 30)",
        complementary2: "rgb(0, 253, 220)",
        complementary3: "rgb(255, 186, 73)",
        complementary4: "rgb(217, 240, 253)",
    },
  };

const LightTheme ={
    colors: {
        background: "rgb(242, 242, 242)",
        border: "rgb(216, 216, 216)",
        card: "rgb(255, 255, 255)",
        notification: "rgb(255, 59, 48)",
        primary: "rgb(0, 122, 255)",
        text: "rgb(28, 28, 30)",
        inverted: "rgb(0, 0, 0)",
        bubble: "#D6D6D6",
        complementary1: "rgb(222, 84, 30)",
        complementary2: "rgb(0, 253, 220)",
        complementary3: "rgb(255, 186, 73)",
        complementary4: "rgb(217, 240, 253)",
      },
      dark: false,
}

export default function App() {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : LightTheme;
    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <StatusBar style="auto" backgroundColor='rgba(0, 0, 0, 0)' />
                <Stack.Navigator screenOptions={{ headerShown: false, swipeEnabled: false, animationEnabled: false }} >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="HomePage" component={HomePage} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}