import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Chat_Hot_Reward({Chat_Hot_Reward:{pos,icon2,backgroundColor,altIcon,icon,title,content,gate_way_text}}) {
  // bg-[#1A1A1A]

  const navigation = useNavigation()
  return (
    <View
      className="w-full   rounded p-4 mb-4"
      style={{
        backgroundColor:backgroundColor
          ? backgroundColor
          : "#1A1A1A",
      }}
    >
      <View className="w-full  flex-row justify-end ">
        {altIcon ? altIcon : ""}
      </View>
      <View className="flex-row  space-x-2">
        {icon}
        <Text className="text-white font-bold tracking-wide text-xl mb-2">
          {title}
        </Text>
      </View>

      <Text className="text-white text-lg tracking-wide">
        {content}
      </Text>
      <TouchableOpacity className="flex-row justify-end items-center space-x-2 py-2"
      onPress={()=>{
       if(pos == 1){
        navigation.navigate("CommunityChat")
       }
       else if(pos == 2){
        navigation.navigate("UpdateScreen")
       }
       else if(pos == 3){
        navigation.navigate("Dashboard")
       }
       else if(pos == 4){
        navigation.navigate("Documents")
       }
       else if(pos == 5){
        navigation.navigate("Jobs")
       }
       
      }}
      >
        <Text className="text-white text-lg tracking-wide font-bold">
          {gate_way_text}
        </Text>
        {icon2}
      </TouchableOpacity>
    </View>
  );
}

export default Chat_Hot_Reward;

// {props.Chat_Hot_Reward.icon}
