// In App.js in a new project

import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)
  useLayoutEffect(async () => {
const appData = await AsyncStorage.getItem('isAppFirstLaunched')
if(appData == null){
setIsAppFirstLaunched(true)
AsyncStorage.setItem('isAppFirstLaunched','false')
}else{
  setIsAppFirstLaunched(false)
}
  }, []);
  return (
isAppFirstLaunched != null &&(
  <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    {isAppFirstLaunched && (
 <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    )}
  <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
</NavigationContainer>
)
  );
}

