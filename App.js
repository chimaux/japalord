// In App.js in a new project

import React, { useLayoutEffect, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Provider from "./Context";
import NavigationStack from "./navigations/NavigationStack";
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

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
        <Provider>
          <NavigationStack />
        </Provider>
      </NavigationContainer>


    )
  );






}
