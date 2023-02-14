import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import Chat_Hot_Reward from "../components/Chat_Hot_Reward/Chat_Hot_Reward";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);



  {/* login and signup popup tab toggle */}
  const [value,setVisibility] = useState("none")
 const showLoginReg = ()=>{
  if(value === "none"){
    setVisibility("")
  }else{
    setVisibility("none")
  }
  
 }

  //SafeAreaView instructions for android
  useLayoutEffect(() => {
    setStatusBarTranslucent(false);
  }, []);
  return (
   
    <SafeAreaView className="bg-[#6e002b]">
      {/* login and signup popup tab */}
      <View className="absolute z-10 top-[80px] right-[10px] bg-[#fffbeb] rounded p-4"
      style={{display:value}}
      >
        <TouchableOpacity>
          <Text className="mb-2 text-lg tracking-wider">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-lg tracking-wider">Signup</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-[#6e002b] w-full h-[70px] flex  flex-row justify-between items-center">
        <TouchableOpacity className="ml-4 rounded-full p-2 border-2 border-[#ffffff71]">
          <OutlineIcons.Bars3Icon className=" text-white" size={30} />
        </TouchableOpacity>
        <Text className="text-white font-bold text-lg tracking-wide">
          EasyJapa
        </Text>
        <TouchableOpacity className="mr-4 rounded-full p-2 border-2 border-[#ffffff71] "
        onPress={showLoginReg}
        >
          <OutlineIcons.UserCircleIcon className=" text-white " size={30} />
        </TouchableOpacity>
      </View>

      {/* body starts here */}
      <ScrollView
        className="bg-black"
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View className="bg-[#fffbeb] rounded-lg p-4 m-4">
          <Text className="text-[#6e002b] text-2xl font-bold tracking-wide">
            Hello!
          </Text>
          <Text className="text-[#6e002b] text-2xl font-bold tracking-wide">
            Welcome Back!
          </Text>
          <Text className="text-[#6e002b] text-2xl  tracking-wide">
            Start exploring the easy japa tips from us and from the community
          </Text>
        </View>

        <View className="bg-[#fffbeb] rounded-3xl p-4 ">
          <Chat_Hot_Reward
            Chat_Hot_Reward={{
              title: "Chat",
              // altIcon:<OutlineIcons.StopIcon
              // className="text-white"
              // />,
              icon: (
                <OutlineIcons.ChatBubbleLeftRightIcon
                  className="text-white"
                  size={30}
                />
              ),
              content:
                "Ask every of your travel concerns, connect with amazing others that have successfully relocated and those who intends to Japa.",
              gate_way_text: "Start connecting",
              icon2: (
                <SolidIcons.ArrowLongRightIcon
                  className="text-white "
                  size={30}
                />
              ),
            }}
          />

          <Chat_Hot_Reward
            Chat_Hot_Reward={{
              title: "HotUpdate",
              icon: (
                <OutlineIcons.LightBulbIcon className="text-white" size={30} />
              ),
              content:
                "Everything you have ever wanted to know about traveling abroad! Access all our helpful contents to keep abreast of all relocation updates, never pass up a major japa opportunity!",
              gate_way_text: "Explore",
              icon2: (
                <SolidIcons.ArrowLongRightIcon
                  className="text-white "
                  size={30}
                />
              ),
            }}
          />

          <Chat_Hot_Reward
            Chat_Hot_Reward={{
              title: "Reward",
              icon: (
                <OutlineIcons.TrophyIcon className="text-white" size={30} />
              ),
              content:
                "Tell your friends and family about EasyJapa App, collect points and redeem for cash and gifts.",
              gate_way_text: "Get rewards",
              icon2: (
                <SolidIcons.ArrowLongRightIcon
                  className="text-white "
                  size={30}
                />
              ),
            }}
          />

          <Chat_Hot_Reward
            Chat_Hot_Reward={{
              title: "CV, SOP, and other Doc review",
              altIcon: (
                <OutlineIcons.ShieldCheckIcon
                  className="text-white"
                  size={40}
                />
              ),
              icon: (
                <OutlineIcons.BookmarkIcon className="text-white" size={30} />
              ),
              content:
                " Avoid pitfalls, have your CV, SOP and other travel documents reviewed by us.\
  Our associates are trained to help you.",
              gate_way_text: "Get started",
              icon2: (
                <SolidIcons.ArrowLongRightIcon
                  className="text-white "
                  size={30}
                />
              ),
              backgroundColor: "#6e002b",
            }}
          />

          <Chat_Hot_Reward
            Chat_Hot_Reward={{
              title: "Remote and VISA sponsored jobs",
              altIcon: (
                <OutlineIcons.ShieldCheckIcon
                  size={40}
                  className="text-white"
                />
              ),
              icon: (
                <OutlineIcons.BriefcaseIcon className="text-white" size={30} />
              ),
              content:
                "Connect with International Companies searching for Nigerians to hire (VISA and Flight sponsored)\
  Also, access exclusive International remote jobs no one tells you about.",
              gate_way_text: "Get started",
              icon2: (
                <SolidIcons.ArrowLongRightIcon
                  className="text-white "
                  size={30}
                />
              ),
              backgroundColor: "#6e002b",
            }}
          />
        </View>
      </ScrollView>

      <View
        className="bg-[#6e002b] w-full h-[100px] flex  flex-row justify-between items-center"
        style={{ position: "absolute", bottom: 70 }}
      >
        <View className="flex items-center ml-4">
          <TouchableOpacity className=" rounded-full p-2 border-2 border-[#ffffff71]">
            <OutlineIcons.HomeIcon className=" text-white" size={30} />
          </TouchableOpacity>
          <Text className="text-white mt-2 text-md tracking-wider">Home</Text>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
