import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import Button1 from "../components/Button1";
import { Platform } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";

const EmailVerificationSuccessPage = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const disableSwipeGesture = () => {
        // Disable swipe gesture for the screen
        navigation.setOptions({
          gestureEnabled: false,
        });
      };

      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      });

      disableSwipeGesture();

      return () => {
        // Re-enable swipe gesture when leaving the screen
        navigation.setOptions({
          gestureEnabled: true,
        });
      };
    }, [])
  );

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const { dominantColor } = useContext(GlobalContext);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View className=" white ">
      <SafeAreaView />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          width: screenWidth,
          height: screenHeight,
        }}
      >
        <View className="w-full">
          <View className="w-full flex items-center px-12 ">
            <AntDesign name="checkcircleo" size={68} color="#049C6B" />
            <Text className="text-3xl font-bold tracking-wider my-4 text-center">
              Successful
            </Text>
            <Text
              className="text-xl text-center tracking-wider"
              style={{
                color: dominantColor,
              }}
            >
              Your emaill address has been verified
            </Text>
          </View>

          <View className="my-8 mx-4">
            <Button1
              buttonProps={{
                fontBold: "bold",
                title: "Start connecting",
                backgroundColor: "#bd0d50",
                color: "white",
                functionExec: navigateToLogin,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmailVerificationSuccessPage;
