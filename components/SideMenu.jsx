import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Button1 from "./Button1";

const SideMenu = ({ props: { state, visibility } }) => {
  const image = { img: require("../images/logo.png") };
  const navigation = useNavigation();
  const open = () => {
    navigation.navigate("PremiumPackages");
    visibility("hidden");
  };
  return (
    <View className={`${state}  absolute  z-50 `}>
      <TouchableOpacity
        className="w-[100vw] h-[100vh]  bg-zinc-900 opacity-75"
        onPress={() => {
          visibility("hidden");
        }}
      ></TouchableOpacity>
      <View className="pl-4 pr-10  w-[70vw] h-[100vh] bg-[#FFFBEB]  absolute top-0 ">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="pb-8 border-b-[1px] border-zinc-300">
            {/* logo start */}

            <Image
              source={image.img}
              className="w-[120px] h-[120px]  "
              style={{ resizeMode: "contain" }}
            />
          </View>
          {/* logo end */}
          {/* Dashboard */}
          <TouchableOpacity
            className="flex-row items-center space-x-4 mt-6 pb-12 border-b-[1px] border-zinc-300"
            onPress={() => {
              navigation.navigate("Dashboard");
              visibility("hidden");
            }}
          >
            <Ionicons name="ios-grid-outline" size={30} color="#6e002b" />

            <Text
              className="text-lg text-[#6e002b]"
              style={{ fontWeight: "bold" }}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
          {/* HotUpdate */}
          <TouchableOpacity
            className="flex-row items-center space-x-4 mt-6 pb-12 border-b-[1px] border-zinc-300"
            onPress={() => {
              navigation.navigate("UpdateScreen");
              visibility("hidden");
            }}
          >
            <Ionicons name="bulb-outline" size={32} color="#6e002b" />
            <Text
              className="text-lg text-[#6e002b]"
              style={{ fontWeight: "bold" }}
            >
              Hot Update
            </Text>
          </TouchableOpacity>

          {/* CV, SOP, and other Doc review */}
          <View className="flex-row items-center space-x-4 mt-6 pb-12 border-b-[1px] border-zinc-300">
            <Ionicons name="newspaper-outline" size={30} color="#6e002b" />
            <Text
              className="text-lg text-[#6e002b]"
              style={{ fontWeight: "bold" }}
            >
              CV, SOP and other DOC review
            </Text>
          </View>
          {/* Remote and Visa sponsored jobs */}
          <TouchableOpacity className="flex-row items-center space-x-4 mt-6 pb-12 border-b-[1px] border-zinc-300"
                onPress={() => {
                  navigation.navigate("Jobs");
                  visibility("hidden");
                }}
          >
            <Ionicons name="briefcase-outline" size={30} color="#6e002b" />
            <Text
              className="text-lg text-[#6e002b]"
              style={{ fontWeight: "bold" }}
            >
              Remote and Visa sponsored jobs
            </Text>
          </TouchableOpacity>

          {/* button go premium */}
          <Button1
            buttonProps={{
              onPress: open,
              title: "Go Premium",
              icon: <SimpleLineIcons name="diamond" size={30} color="white" />,
              backgroundColor: "#6e002b",
              color: "white",
              pbottom: "my-10 ",
              pright: "pr-[10px]",
              mleft: "ml-[-16px]",
              bborder: "border-b-4 border-[#f4d994]",
              name:"PremiumPackages"
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SideMenu;
