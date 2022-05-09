import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_900Black } from '@expo-google-fonts/inter';

import { Widget } from './src/components/widget/index'
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <h2>lOADING...</h2>;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Widget/>
    <StatusBar style="light" backgroundColor='transparent' translucent />
    </View>
  );
}


