import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import InputField from "../components/InputField";
import * as Icons from "react-native-heroicons/solid";
import Button1 from "../components/Button1";
import { AntDesign } from "@expo/vector-icons";
import { GlobalContext } from "../../Context";
import GobackBTN from "../components/GobackBTN";
function ResetPasswordPage() {
  const { dominantColor } = useContext(GlobalContext);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();
  return (
    <View className={`relative bg-red-800 `} style={{ height: screenHeight }}>
      <SafeAreaView className="flex-1 bg-[#6e002b]" />
      {/* background fix starts here */}
      <View
        className={` bg-[${dominantColor}]`}
        style={{ height: screenHeight / 2 }}
      ></View>
      <View
        className="bg-[#1A1B1C] "
        style={{ height: screenHeight / 2 }}
      ></View>
      {/* background fix ends here */}
      <ScrollView
        className="absolute top-0 bottom-0 right-0 left-0"
        contentContainerStyle={{
          height: screenHeight,
          backgroundColor: dominantColor,
        }}
      >
              <View className="ml-6 mt-12">
        <GobackBTN />
      </View>
        <Text className="w-full text-center text-white text-4xl font-bold pt-20 pb-10 tracking-wider">
          Reset Password
        </Text>
        <Text className="text-white text-xl mx-4 tracking-wider my-2">
         Please make it something you can remember.
        </Text>
        <View className="px-4">
          <InputField
            inputProps={{
             title: "New password",
              placeholder: "Password",
              placeholderTextColor:"#c5c5c5",
              icon1: "",
              icon2: "",
              type:true
            }}
          />
        </View>
        <View className="px-4">
          <InputField
            inputProps={{
             title: "Confirm new Password",
              placeholder: "Password",
              placeholderTextColor:"#c5c5c5",
              icon1: "",
              icon2: "",
              type:true
            }}
          />
        </View>


        <LinearGradient
          className="flex-1 "
          colors={["rgba(26, 27, 28,0.01)", "rgba(26, 27, 28,1)"]}
          locations={[0, 0.5]}
        >
          <View className="mx-4 mt-12 ">
            <Button1
              buttonProps={{
                fontBold: "bold",
                title: "Reset password",
                backgroundColor: "#bd0d50",
                color: "white",
              }}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

export default ResetPasswordPage;
