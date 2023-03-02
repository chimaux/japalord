// In App.js in a new project

import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LogingScreen from "./screens/LogingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LogRegScreen from "./screens/LogRegScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import HotUpdateScreen from "./screens/HotUpdateScreen";
import CommunityChat from "./screens/CommunityChat";
import Dashboard from "./screens/Dashboard";
import Documents from "./screens/Documents";
import Jobs from "./screens/Jobs";
import PremiumPackages from "./screens/PremiumPackages";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  useLayoutEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogRegScreen" component={LogRegScreen} />
          <Stack.Screen name="Login" component={LogingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="UpdateScreen" component={HotUpdateScreen} />

          <Stack.Screen name="CommunityChat" component={CommunityChat} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Documents" component={Documents} />
          <Stack.Screen name="PremiumPackages" component={PremiumPackages} />
          <Stack.Screen name="Jobs" component={Jobs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );









  // return (

  //   <NavigationContainer>
  //   <Stack.Navigator screenOptions={{headerShown:false}}>

  //  <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
  // <Stack.Screen name="Home" component={HomeScreen} />
  // <Stack.Screen name="LogRegScreen" component={LogRegScreen} />
  // <Stack.Screen name="Login" component={LogingScreen} />
  // <Stack.Screen name="Register" component={RegisterScreen} />
  // <Stack.Screen name="UpdateScreen" component={HotUpdateScreen} />

  // <Stack.Screen name="CommunityChat" component={CommunityChat} />
  // <Stack.Screen name="Dashboard" component={Dashboard} />
  // <Stack.Screen name="Documents" component={Documents} />
  // <Stack.Screen name="PremiumPackages" component={PremiumPackages} />
  // <Stack.Screen name="Jobs" component={Jobs} />
  //   </Stack.Navigator>
  // </NavigationContainer>

  //   );
}
