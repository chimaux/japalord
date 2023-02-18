import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import Chat_Hot_Reward from "../components/Chat_Hot_Reward/Chat_Hot_Reward";
import client  from "../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);

const [welcomeValue,setWelcomeValue] =useState([])
useEffect(()=>{
  client.fetch(`
  *[ _type == "welcomeMessage"]
{
  _id,content,name,name2
}
  `).then( data => {
    setWelcomeValue(data)
  })
},[])

const [categoryValue, setCategoryValue] = useState([])
const [categoryValue2, setCategoryValue2] = useState([])

useEffect(()=>{
client.fetch(`
*[ _type == "category"]
{
  _id,title,navigateTitle,description,pos
}|order(pos)[0..2]

`).then( data => setCategoryValue(data))
},[])


useEffect(()=>{
  client.fetch(`
  *[ _type == "category"]
  {
    _id,title,navigateTitle,description,pos
  }|order(pos)[3..4]
  
  `).then( data => setCategoryValue2(data))
  },[])


// console.log(welcomeValue)
console.log(categoryValue)

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
        {
          welcomeValue.map((items)=>{
            return         <View key={items._id} className="bg-[#fffbeb] rounded-lg p-4 m-4">
            <Text className="text-[#6e002b] text-2xl font-bold tracking-wide">
            {items.name}
            </Text>
            <Text className="text-[#6e002b] text-2xl font-bold tracking-wide">
            {items.name2}
            </Text>
            <Text className="text-[#6e002b] text-2xl  tracking-wide">
            {items.content}
            </Text>
          </View>
          })

        }


        <View className="bg-[#fffbeb] rounded-3xl p-4 ">
        {

categoryValue.map((items)=>{

  return        <Chat_Hot_Reward key={items._id}
  Chat_Hot_Reward={{
    title: items.title,
    // altIcon:<OutlineIcons.StopIcon
    // className="text-white"
    // />,
 
    icon: 
      items.pos == 1?(
      
        <OutlineIcons.ChatBubbleLeftRightIcon
          className="text-white"
          size={30}
        />
      ) : items.pos == 2 ?(
      
        <OutlineIcons.LightBulbIcon
          className="text-white"
          size={30}
        />
      ):(
        <OutlineIcons.TrophyIcon className="text-white" size={30} />
      )
    ,
    content:
      items.description,
    gate_way_text: "Start connecting",
    icon2: (
      <SolidIcons.ArrowLongRightIcon
        className="text-white "
        size={30}
      />
    ),
  }}
/>

})
}


{

categoryValue2.map((items)=>{

  return    <Chat_Hot_Reward
  Chat_Hot_Reward={{
    title: items.title,
    altIcon: (
      <OutlineIcons.ShieldCheckIcon
        className="text-white"
        size={40}
      />
    ),
    icon:items.pos == 3 ?  (
      <OutlineIcons.BookmarkIcon className="text-white" size={30} />
    ):  (
      <OutlineIcons.BriefcaseIcon className="text-white" size={30} />
    ),
    content:items.description,
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

})
}


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
