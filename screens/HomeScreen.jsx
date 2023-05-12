import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import Chat_Hot_Reward from "../components/Chat_Hot_Reward/Chat_Hot_Reward";
import client from "../sanity";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import BottomMenu from "../components/BottomMenu";
import SnLpop from "../components/SnLpop";
import { GlobalContext } from "../Context";
import { screenHeight, screenWidth } from "../components/JobsTab";
const HomeScreen = () => {
  const { menuValue, setMenuValue } = useContext(GlobalContext);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);

  const [welcomeValue, setWelcomeValue] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
  *[ _type == "welcomeMessage"]
{
  _id,content,name,name2
}
  `
      )
      .then((data) => {
        setWelcomeValue(data);
      });
  }, []);

  const [categoryValue, setCategoryValue] = useState([]);
  const [categoryValue2, setCategoryValue2] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
*[ _type == "category"]
{
  _id,title,navigateTitle,description,pos
}|order(pos)[0..2]

`
      )
      .then((data) => setCategoryValue(data));
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
  *[ _type == "category"]
  {
    _id,title,navigateTitle,description,pos
  }|order(pos)[3..4]
  
  `
      )
      .then((data) => setCategoryValue2(data));
  }, []);

  //SafeAreaView instructions for android
  useLayoutEffect(() => {
    setStatusBarTranslucent(false);
  }, []);

  const [menuValue2, setMenuValue2] = useState("hidden");
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

      {/* login and signup popup tab */}
      <TopMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
          state2: menuValue2,
          visibility2: setMenuValue2,
          title: "EasyJapa",
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
      {/* body starts here */}
      <ScrollView
        className="bg-black"
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {welcomeValue.map((items) => {
          return (
            <View key={items._id} className="bg-[#fffbeb] rounded-lg p-4 m-4">
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
          );
        })}

        <View className="bg-[#fffbeb] rounded-3xl p-4 ">
          {categoryValue.map((items) => {
            return (
              <Chat_Hot_Reward
                key={items._id}
                Chat_Hot_Reward={{
                  pos: items.pos,
                  title: items.title,
                  // altIcon:<OutlineIcons.StopIcon
                  // className="text-white"
                  // />,

                  icon:
                    items.pos == 1 ? (
                      <OutlineIcons.ChatBubbleLeftRightIcon
                        className="text-white"
                        size={30}
                      />
                    ) : items.pos == 2 ? (
                      <OutlineIcons.LightBulbIcon
                        className="text-white"
                        size={30}
                      />
                    ) : (
                      <OutlineIcons.TrophyIcon
                        className="text-white"
                        size={30}
                      />
                    ),
                  content: items.description,
                  gate_way_text: items.navigateTitle,
                  icon2: (
                    <SolidIcons.ArrowLongRightIcon
                      className="text-white "
                      size={30}
                    />
                  ),
                }}
              />
            );
          })}

          {categoryValue2.map((items) => {
            return (
              <Chat_Hot_Reward
                key={items._id}
                Chat_Hot_Reward={{
                  pos: items.pos,
                  title: items.title,
                  altIcon: (
                    <SimpleLineIcons name="diamond" size={30} color="white" />
                  ),
                  icon:
                    items.pos == 4 ? (
                      <Ionicons
                        name="newspaper-outline"
                        size={30}
                        color="white"
                      />
                    ) : items.pos == 5 ? (
                      <Ionicons
                        name="briefcase-outline"
                        size={30}
                        color="white"
                      />
                    ) : (
                      ""
                    ),
                  content: items.description,
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
            );
          })}
        </View>
      </ScrollView>
      {/* body ends here */}
      {/* <BottomMenu
        props={{
          activeTab: "bg-[#9c657aa1]",
          pbottom: 0,
        }}
      /> */}
    </View> 
    </>
 
  );
};

export default HomeScreen;
