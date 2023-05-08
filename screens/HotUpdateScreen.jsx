import React, { useContext, useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from "react-native";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import TopMenu from "../components/TopMenu";
import InputField from "../components/InputField";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as SolidIcons from "react-native-heroicons/solid";
import Slider from "../components/Slider";
import client from "../sanity";
import LatestUpdateTab from "../components/LatestUpdateTab";
import OtherUpdateTab from "../components/OtherUpdateTab";
import { GlobalContext } from "../Context";

const HotUpdateScreen = () => {
 const {    menuValue, setMenuValue,}=useContext(GlobalContext)
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


  const [topOrOtherNews, setTopOrOtherNews] = useState(true)













  return (
    <View 
    style={{
      flex:1
 
    }}
    >

<SafeAreaView
    style={{
   
      color:"#6E002B"
    }}
    />

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
      <View className="px-4 pt-4 bg-[#FFFBEB]">
        <InputField
          inputProps={{
            placeholder: "Search",
            // dropShadow:"dropShadow",
            icon: <AntDesign name="search1" size={28} color="#d3d1d1" />,
            width: "w-[80vw]",
            flex: "flex-row items-center",
            placeholderTextColor: "#d3d1d1",
            identity: "update",
            designType:"type2"

          }}

        />
      </View>

      {
        topOrOtherNews == true ?
          <ScrollView
            className=" bg-[#FFFBEB]"
            contentContainerStyle={{ paddingBottom: 120 }}

          >

            <Text className="text-[#6E002B] text-2xl mx-4 my-2" style={{ fontWeight: "bold" }}>Hot</Text>
            <Slider
              props={{
                data: topNews
              }}
            />

            <Text className="text-[#6E002B] text-2xl mx-4 mt-6 mb-2" style={{ fontWeight: "bold" }}>Latest Update</Text>
            <LatestUpdateTab
              props={{
                data: otherNews
              }}
            />
            <TouchableOpacity
              onPress={() => setTopOrOtherNews(false)}
              className="my-[2px] mx-4 bg-[#6e002a6a] w-[40px] h-[40px] flex items-center justify-center rounded-full "
            >
         
                <SolidIcons.ChevronDoubleDownIcon
                  size={30}
                  className=" text-zinc-700 "
                />
         

            </TouchableOpacity>
          </ScrollView> :
          <View
            className=" bg-[#FFFBEB]"

            style={{ paddingBottom: 365 }}

          >


            <Text className="text-[#6E002B] text-2xl mx-4 mt-2 mb-2" style={{ fontWeight: "bold" }}>Other Relevant Updates</Text>
            <OtherUpdateTab
              props={{
                data: otherNews
              }}
            />
            <TouchableOpacity
              className="my-2 mx-4 bg-[#6e002a6a] w-[40px] h-[40px] flex items-center justify-center rounded-full "
              onPress={() => setTopOrOtherNews(true)}
            >

              <SolidIcons.ChevronDoubleLeftIcon
                size={30}
                className=" text-zinc-700 "
              />

            </TouchableOpacity>
          </View>

      }

      {/* <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      /> */}
    </View>
  );
};

export default HotUpdateScreen;
