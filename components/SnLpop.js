import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons,SimpleLineIcons,MaterialCommunityIcons  } from '@expo/vector-icons'; 
import Button1 from "./Button1";

const SnLpop = ({ props: { state2, visibility2 } }) => {
  const image = { img: require("../images/logo.png") };
  const navigation = useNavigation()
  return (
    <View className={`${state2}  absolute top-[90px]  z-50 `}>

<TouchableOpacity className="w-[100vw] h-[100vh]  bg-zinc-900 opacity-0"
onPress={()=>{
  visibility2("hidden")
}}
></TouchableOpacity>
      <View className="px-4 mx-4 pt-6 pb-4  rounded bg-[#FFFBEB]  absolute top-0 right-0">

      <TouchableOpacity
      className="border-b-[1px] border-zinc-200"
          onPress={() => {
            navigation.navigate("LogRegScreen", { data: "login" });
            visibility2("hidden")
          }}
        >
          <Text className="mb-2 text-lg tracking-wider text-[#6e002b]"
          style={{fontWeight:"bold"}}
          >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        className="pt-[3px]"
          onPress={() => {
            navigation.navigate("LogRegScreen", { data: "reg" });
            
            visibility2("hidden")
          }}
        >
          <Text className="text-lg tracking-wider text-[#6e002b]"
          style={{fontWeight:"bold"}}
          >Signup</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default SnLpop;
