// In App.js in a new project
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LogingScreen from "../screens/LogingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LogRegScreen from "../screens/LogRegScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import HotUpdateScreen from "../screens/HotUpdateScreen";
import CommunityChat from "../screens/CommunityChat";
import HotUpdateDetailPage from "../screens/HotUpdateDetailPage";
import Dashboard from "../screens/Dashboard";
import Documents from "../screens/Documents";
import Jobs from "../screens/Jobs";
import PremiumPackages from "../screens/PremiumPackages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VerifyEmailScreen from "../screens/VerifyEmailScreen";
import EmailVerificationSuccessPage from "../screens/EmailVerificationSuccessPage";
import ForgotPasswordPage from "../screens/ForgotPasswordPage";
import ForgetPasscodeVerify from "../screens/ForgetPasscodeVerify";
import ResetPasswordPage from "../screens/ResetPasswordPage";
import PasswordChangeSuccess from "../screens/PasswordChangeSuccess";
import Notification from "../screens/Notification";

import DirectMessage from "../screens/DirectMessage";
import { BottomTab } from "./BottomTab";

//const Stack = createNativeStackNavigator();
 const Stack = createStackNavigator();

const NavigationStack = () => {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  // useLayoutEffect(async () => {
  //   const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem("isAppFirstLaunched", "false");
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }
  // }, []);
  return (

    // isAppFirstLaunched != null && (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* isAppFirstLaunched */}
      {false && (
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
      )}

      <Stack.Screen name="BottomTab" component={BottomTab} />
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
      <Stack.Screen name="HotUpdateDetailPage" component={HotUpdateDetailPage} />
      <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
      <Stack.Screen name="EmailVerificationSuccessPage" component={EmailVerificationSuccessPage} />
      <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
      <Stack.Screen name="ForgetPasscodeVerify" component={ForgetPasscodeVerify} />
      <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
      <Stack.Screen name="PasswordChangeSuccess" component={PasswordChangeSuccess} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="DirectMessage" component={DirectMessage} />


    </Stack.Navigator>



    // )
  );




}
export default NavigationStack