import {  View } from 'react-native';

import React from 'react';
import AppLoading from 'expo-app-loading';
import Widget from "./src/components/widget/index";
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_900Black } from '@expo-google-fonts/inter';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
    <StatusBar style="light" backgroundColor='transparent' 
    translucent />
    <Widget />
    </View>
  );
}


