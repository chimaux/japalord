import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function Chat_Hot_Reward(props) {
  // bg-[#1A1A1A]
  return (
    <TouchableOpacity
      className="w-full   rounded p-4 mb-4"
      style={{
        backgroundColor: props.Chat_Hot_Reward.backgroundColor
          ? props.Chat_Hot_Reward.backgroundColor
          : "#1A1A1A",
      }}
    >
      <View className="w-full  flex-row justify-end ">
        {props.Chat_Hot_Reward.altIcon ? props.Chat_Hot_Reward.altIcon : ""}
      </View>
      <View className="flex-row  space-x-2">
        {props.Chat_Hot_Reward.icon}
        <Text className="text-white font-bold tracking-wide text-xl mb-2">
          {props.Chat_Hot_Reward.title}
        </Text>
      </View>

      <Text className="text-white text-lg tracking-wide">
        {props.Chat_Hot_Reward.content}
      </Text>
      <View className="flex-row justify-end items-center space-x-2">
        <Text className="text-white text-lg tracking-wide font-bold">
          {props.Chat_Hot_Reward.gate_way_text}
        </Text>
        {props.Chat_Hot_Reward.icon2}
      </View>
    </TouchableOpacity>
  );
}

export default Chat_Hot_Reward;

// {props.Chat_Hot_Reward.icon}
