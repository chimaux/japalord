import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import TopMenu from "../components/TopMenu";
import InputField from "../components/InputField";
import { AntDesign } from "@expo/vector-icons";
import Slider from "../components/Slider";
const HotUpdateScreen = () => {
  const [menuValue, setMenuValue] = useState("hidden");
  const [menuValue2, setMenuValue2] = useState("hidden");

const updateSlides = [
  {
    id: "1",
    image: require("../images/topNews1.jpg"),
    title: "Posuere amet pellentesque tellus, auctor laoreet bibendum velit.1",
  },
  {
    id: "2",
    image: require("../images/topNews2.jpg"),
    title: "Posuere amet pellentesque tellus, auctor laoreet bibendum velit.2",
  },
  {
    id: "3",
    image: require("../images/topNews3.jpg"),
    title: "Posuere amet pellentesque tellus, auctor laoreet bibendum velit.3",
  },
  {
    id: "4",
    image: require("../images/topNews4.jpg"),
    title: "Posuere amet pellentesque tellus, auctor laoreet bibendum velit.4",
  },
  {
    id: "5",
    image: require("../images/topNews5.jpg"),
    title: "Posuere amet pellentesque tellus, auctor laoreet bibendum velit.5",
  },
]



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
  data:updateSlides
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
