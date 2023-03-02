import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = ({props:{activeTab,pbottom}}) => {
const navigation = useNavigation()
  return (
    <View
    className="bg-[#6e002b] w-full h-[100px] flex  flex-row justify-between items-center"
    style={{ position: "absolute", bottom:pbottom }}
  >
    <View className={`relative  ${activeTab} flex items-center ml-4 p-2 rounded-lg`}>
      <View className="flex items-center ">
        <TouchableOpacity className=" rounded-full p-2 border-2 border-[#ffffff71]"
        onPress={()=> navigation.navigate("Home")}
        >
          <OutlineIcons.HomeIcon className=" text-white" size={30} />
        </TouchableOpacity>
        <Text className="text-white mt-2 text-md tracking-wider">Home</Text>
      </View>

    </View>

    <View className="flex items-center ">
      <TouchableOpacity className=" rounded-full p-2 border-2 border-[#ffffff71]">
        <OutlineIcons.UserGroupIcon className=" text-white" size={30} />
      </TouchableOpacity>
      <Text className="text-white mt-2 text-md tracking-wider">
        Community
      </Text>
    </View>

    <View className="flex items-center ">
      <TouchableOpacity className=" rounded-full p-2 border-2 border-[#ffffff71]">
        <OutlineIcons.ChatBubbleLeftIcon
          className=" text-white"
          size={30}
        />
      </TouchableOpacity>
      <Text className="text-white mt-2 text-md tracking-wider">
        Message
      </Text>
    </View>

    <View className="flex items-center mr-4">
      <TouchableOpacity className=" rounded-full p-2 border-2 border-[#ffffff71]">
        <OutlineIcons.BellIcon className=" text-white" size={30} />
      </TouchableOpacity>
      <Text className="text-white mt-2 text-md tracking-wider">
        Notification
      </Text>
    </View>
  </View>
  )
}

export default BottomMenu