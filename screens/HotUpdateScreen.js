import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import TopMenu from "../components/TopMenu";
import InputField from "../components/InputField";
import { AntDesign } from "@expo/vector-icons";
import Slider from "../components/Slider";
import client from "../sanity";
import LatestUpdateTab from "../components/LatestUpdateTab";


const otherUpdateNews =[
  {
    image:require("../images/topNews1.jpg"),
    title:"There have been reports on the actor's death in the",
    _createdAt:"today",
    length:"10 minutes read"

  },
  {
    image:require("../images/topNews1.jpg"),
    title:"There have been reports on the actor's death in the",
    _createdAt:"today",
    length:"10 minutes read"

  },
  {
    image:require("../images/topNews1.jpg"),
    title:"There have been reports on the actor's death in the",
    _createdAt:"today",
    length:"10 minutes read"

  },
]






const HotUpdateScreen = () => {
  const [menuValue, setMenuValue] = useState("hidden");
  const [menuValue2, setMenuValue2] = useState("hidden");

  const [topNews, setTopNews] = useState([]);
  const [otherNews, setOtherNews] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "HotUpdate" && topNews == true]
        {
          _id,title,image, content, _createdAt
        }|order(_createdAt asc)
  `
      )
      .then((data) => {
        setTopNews(data);
      });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "HotUpdate" && topNews == false]
        {
          _id,title,image, content, _createdAt
        }|order(_createdAt desc)
  `
      )
      .then((data) => {
        setOtherNews(data);
      });
  }, []);
























 
  return (
    <SafeAreaView className="flex-1 bg-[#6E002B]">
      <TopMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
          state2: menuValue2,
          visibility2: setMenuValue2,
        }}
      />

      <SideMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
        }}
      />

      <SnLpop
        props={{
          state2: menuValue2,
          visibility2: setMenuValue2,
        }}
      />
      <View className="px-4 bg-[#FFFBEB]">
        <InputField
          inputProps={{
            placeholder: "Search",
            // dropShadow:"dropShadow",
            icon: <AntDesign name="search1" size={28} color="white" />,
            width:"w-[80vw]",
            flex:"flex-row items-center",
            placeholderTextColor:"white",
            identity:"update"
          
          }}

        />
      </View>

      <ScrollView
        className=" bg-[#FFFBEB]"
        contentContainerStyle={{ paddingBottom: 100 }}
      >

<Text className="text-[#6E002B] text-2xl mx-4 my-2" style={{fontWeight:"bold"}}>Hot</Text>
<Slider
props={{
  data:topNews
}}
/>

<Text className="text-[#6E002B] text-2xl mx-4 mt-6 mb-2" style={{fontWeight:"bold"}}>Latest Update</Text>
<LatestUpdateTab
props={{
  data:otherNews
}}
/>
      </ScrollView>

      <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default HotUpdateScreen;
