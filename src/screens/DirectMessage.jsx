import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GlobalContext } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";

const DirectMessage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { screenData, setScreenData } = useContext(GlobalContext);

  const getCurrentRouteName = () => {
    const myRoute = route.name;
    setScreenData(myRoute);
  };
  useEffect(() => {
    getCurrentRouteName();
  }, []);
  console.log(screenData);

  return (
    <View>
      <SafeAreaView />
      <Text>DirectMessage</Text>
    </View>
  );
};

export default DirectMessage;
