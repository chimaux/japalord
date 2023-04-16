import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Button1 from "../components/Button1";

const PasswordChangeSuccess = () => {
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
              Your password has been change successfully
            </Text>
          </View>

          <View className="my-8 mx-4">
            <Button1
              buttonProps={{
                fontBold: "bold",
                title: "Go back to login",
                backgroundColor: "#bd0d50",
                color: "white",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PasswordChangeSuccess;
