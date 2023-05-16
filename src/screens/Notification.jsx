import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { primaryColor } from "../constant";
const Notification = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: primaryColor,
        }}
      />
      <View className="flex-1">
        <View
          style={{
            backgroundColor: primaryColor,
          }}
          className="h-14 items-center justify-center"
        >
          <Text className="text-white font-semibold tracking-wider text-xl">
            Notifications
          </Text>
        </View>

        <View className="mx-4">
          <Text className="my-6 font-semibold text-[#000] text-lg">
            Today, April 22
          </Text>
        </View>
      </View>
    </>
  );
};

export default Notification;
