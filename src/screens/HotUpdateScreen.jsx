import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import TopMenu from "../components/TopMenu";
import InputField from "../components/InputField";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as SolidIcons from "react-native-heroicons/solid";
import Slider from "../components/Slider";

import LatestUpdateTab from "../components/LatestUpdateTab";
import OtherUpdateTab from "../components/OtherUpdateTab";
import { GlobalContext } from "../../Context";
import topNews1 from "../images/topNews1.jpg"
import topNews2 from "../images/topNews2.jpg"
import topNews3 from "../images/topNews3.jpg"
import topNews4 from "../images/topNews4.jpg"
import topNews5 from "../images/topNews5.jpg"
const HotUpdateScreen = () => {
  const { menuValue, setMenuValue } = useContext(GlobalContext);
  const [menuValue2, setMenuValue2] = useState("hidden");

  // const [topNews, setTopNews] = useState([]);
  // const [otherNews, setOtherNews] = useState([]);
  
  const topNews = [
    {
        "_id": "1",
        "title": "Local High School Introduces Innovative Tech Curriculum",
        "content": "The local high school has unveiled a new technology curriculum aimed at preparing students for the rapidly evolving digital landscape. The program includes coding, robotics, and artificial intelligence courses, designed to equip students with practical skills and knowledge. Teachers are enthusiastic about the integration of modern tech tools, which they believe will enhance students' learning experiences and future career prospects. The school district hopes this initiative will set a new standard for educational technology.",
        "image": topNews1
    },
    {
        "_id": "2",
        "title": "City Council Approves Funding for New Green Spaces",
        "content": "In a recent vote, the City Council approved a significant budget allocation for the creation of new green spaces across the city. This initiative is part of a broader environmental strategy to increase urban greenery and improve public parks. The funding will be used to develop community gardens, tree planting programs, and recreational areas. City officials emphasized that the new green spaces will promote better health, provide recreational opportunities, and enhance the overall quality of life for residents.",
        "image": topNews2
    },
    {
        "_id": "3",
        "title": "Tech Giant Launches Revolutionary AI-Powered Home Assistant",
        "content": "Tech Giant Corp has announced the release of its latest product, a revolutionary AI-powered home assistant designed to simplify daily tasks and enhance home automation. The new device integrates seamlessly with existing smart home systems, offering advanced features such as voice recognition, personalized recommendations, and intelligent home management. The company claims that this innovation will transform how users interact with their homes, making everyday tasks more convenient and efficient. Pre-orders for the assistant have already begun, with high anticipation from tech enthusiasts.",
        "image": topNews3
    },
    {
        "_id": "4",
        "title": "Researchers Discover Breakthrough in Renewable Energy Storage",
        "content": "A team of researchers from the National Institute of Energy has made a groundbreaking discovery in the field of renewable energy storage. They have developed a new type of battery that promises significantly longer life and faster charging times compared to current technologies. This advancement could have profound implications for the renewable energy sector, potentially addressing one of the major challenges in harnessing solar and wind power. The research team is now working on scaling up the technology for commercial use and further testing.",
        "image": topNews4
    },
    {
        "_id": "5",
        "title": "New Study Reveals Impact of Remote Work on Urban Development",
        "content": "A new study conducted by the Urban Development Institute has shed light on how remote work is influencing urban development patterns. The research indicates a shift towards more suburban and rural living as employees increasingly work from home. This trend is leading to changes in real estate demand, infrastructure development, and local economies. The study highlights potential benefits, such as reduced traffic congestion, as well as challenges, including the need for updated broadband access in less urbanized areas. Urban planners are advised to consider these factors in future development projects.",
        "image": topNews5
    }
]
  const otherNews = [
    {
        "_id": "1",
        "title": "Local High School Introduces Innovative Tech Curriculum",
        "content": "The local high school has unveiled a new technology curriculum aimed at preparing students for the rapidly evolving digital landscape. The program includes coding, robotics, and artificial intelligence courses, designed to equip students with practical skills and knowledge. Teachers are enthusiastic about the integration of modern tech tools, which they believe will enhance students' learning experiences and future career prospects. The school district hopes this initiative will set a new standard for educational technology.",
        "image": topNews1,
        "_createdAt":"2024-08-15T12:00:00Z"
    },
    {
        "_id": "2",
        "title": "City Council Approves Funding for New Green Spaces",
        "content": "In a recent vote, the City Council approved a significant budget allocation for the creation of new green spaces across the city. This initiative is part of a broader environmental strategy to increase urban greenery and improve public parks. The funding will be used to develop community gardens, tree planting programs, and recreational areas. City officials emphasized that the new green spaces will promote better health, provide recreational opportunities, and enhance the overall quality of life for residents.",
        "image": topNews2,
         "_createdAt":"2024-08-15T12:00:00Z"
    },
    {
        "_id": "3",
        "title": "Tech Giant Launches Revolutionary AI-Powered Home Assistant",
        "content": "Tech Giant Corp has announced the release of its latest product, a revolutionary AI-powered home assistant designed to simplify daily tasks and enhance home automation. The new device integrates seamlessly with existing smart home systems, offering advanced features such as voice recognition, personalized recommendations, and intelligent home management. The company claims that this innovation will transform how users interact with their homes, making everyday tasks more convenient and efficient. Pre-orders for the assistant have already begun, with high anticipation from tech enthusiasts.",
        "image": topNews3,
         "_createdAt":"2024-08-15T12:00:00Z"
    },
    {
        "_id": "4",
        "title": "Researchers Discover Breakthrough in Renewable Energy Storage",
        "content": "A team of researchers from the National Institute of Energy has made a groundbreaking discovery in the field of renewable energy storage. They have developed a new type of battery that promises significantly longer life and faster charging times compared to current technologies. This advancement could have profound implications for the renewable energy sector, potentially addressing one of the major challenges in harnessing solar and wind power. The research team is now working on scaling up the technology for commercial use and further testing.",
        "image": topNews4,
         "_createdAt":"2024-08-15T12:00:00Z"
    },
    {
        "_id": "5",
        "title": "New Study Reveals Impact of Remote Work on Urban Development",
        "content": "A new study conducted by the Urban Development Institute has shed light on how remote work is influencing urban development patterns. The research indicates a shift towards more suburban and rural living as employees increasingly work from home. This trend is leading to changes in real estate demand, infrastructure development, and local economies. The study highlights potential benefits, such as reduced traffic congestion, as well as challenges, including the need for updated broadband access in less urbanized areas. Urban planners are advised to consider these factors in future development projects.",
        "image": topNews5,
         "_createdAt":"2024-08-15T12:00:00Z"
    }
]


  const [topOrOtherNews, setTopOrOtherNews] = useState(true);

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#6E002B",
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
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
              designType: "type2",
            }}
          />
        </View>

        {topOrOtherNews == true ? (
          <ScrollView
            className=" bg-[#FFFBEB]"
            // contentContainerStyle={{ paddingBottom: 120 }}
          >
            <Text
              className="text-[#6E002B] text-2xl mx-4 my-2"
              style={{ fontWeight: "bold" }}
            >
              Hot
            </Text>
            <Slider
              props={{
                data: topNews,
              }}
            />

            <Text
              className="text-[#6E002B] text-2xl mx-4 mt-6 mb-2"
              style={{ fontWeight: "bold" }}
            >
              Latest Update
            </Text>
            <LatestUpdateTab
              props={{
                data: otherNews,
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
          </ScrollView>
        ) : (
          <View
            className="relative bg-[#FFFBEB]"
            style={{ paddingBottom: 200 }}
          >
            <Text
              className="text-[#6E002B] text-2xl mx-4 mt-2 mb-2"
              style={{ fontWeight: "bold" }}
            >
              Other Relevant Updates
            </Text>
            <OtherUpdateTab
              props={{
                data: otherNews,
              }}
            />
            <TouchableOpacity
              className="z-50 bottom-[190px] absolute my-2 mx-4 bg-[#6e002a6a] w-[40px] h-[40px] flex items-center justify-center rounded-full "
              onPress={() => setTopOrOtherNews(true)}
            >
              <SolidIcons.ChevronDoubleLeftIcon
                size={30}
                className=" text-zinc-700 "
              />
            </TouchableOpacity>
          </View>
        )}

        {/* <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      /> */}
      </View>
    </>
  );
};

export default HotUpdateScreen;
