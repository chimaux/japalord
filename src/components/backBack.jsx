import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { deviceWidth } from "../constant";

const backBack = () => {
  return (
    <View
      className={`relative   flex items-center  py-2 rounded-lg ml-4`}
      style={{
        width: deviceWidth * 0.23,
      }}
    >
      <View className="flex items-center ">
        <View className=" rounded-full  p-[5px] border-2 border-[#ffffff71]">
          <Feather name="arrow-left" color="#fff" size={deviceWidth * 0.06} />
        </View>
        <Text
          style={{
            fontWeight: "500",
            color: "#fff",
          }}
        >
          Home
        </Text>
      </View>
    </View>
  );
};

export default backBack;
