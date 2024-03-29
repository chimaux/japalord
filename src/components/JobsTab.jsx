import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalContext } from "../../Context";
import { Feather } from "@expo/vector-icons";
import { BG_SVG, TIMEICON } from "../../assets/svgs/svg";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const JobsTab = () => {
  const navigation = useNavigation();

  const { truncateText } = useContext(GlobalContext);

  return (
    <View>
      <TouchableOpacity
        className=" absolute right-0 top-1 w-[none] my-auto mx-auto "
        onPress={() => {
          navigation.navigate("JobDetails");
        }}
      >
        <View
          className="bg-[#101820]  flex items-center"
          style={{
            borderRadius: 27,
          }}
        >
          <View className=" flex-row items-center px-[10px] py-2">
            <Text className="text-[#FFFBEB] font-semibold tracking-wider">
              Apply
            </Text>
            <Feather name="arrow-up-right" size={24} color="#FFFBEB" />
          </View>
        </View>
      </TouchableOpacity>
      <BG_SVG>
        <View
          className="p-4"
          style={{
            height: screenHeight * 0.31,
            overflow: "hidden",
            //  backgroundColor: "red",
            // zIndex: 100,
            // position: "relative",
          }}
        >
          <View className="flex-row ">
            <View
              className=" h-16 bg-[#6E002B] rounded-lg"
              style={{
                width: screenWidth * 0.17,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="google" size={40} color="#FFFBEB" />
            </View>
            <View
              className="ml-2 "
              style={{
                width: screenWidth * 0.4,
              }}
            >
              <Text
                className=" leading-5 text-[#FFFBEB] font-bold mb-2 tracking-wider w-[100%]"
                numberOfLines={2}
              >
                Sr. UX Designers developers zIndex: 100, vbchngj
              </Text>
              <Text className="text-white tracking-wider font-medium">
                Google
              </Text>
            </View>
          </View>

          <View
            className="flex-row   mt-4"
            style={{
              borderTopRightRadius: 27,
            }}
          >
            <View className="w-[none]  border-[1px] border-[#8c9094] flex-row rounded-2xl    items-center bg-[#40464d] py-[3px] px-4">
              <Ionicons name="ios-location-outline" size={24} color="#FFFBEB" />
              <Text className=" text-[#FFFBEB] ml-2">
                {truncateText("New York", 15)}
              </Text>
            </View>

            <View className="w-[none] border-[1px] border-[#8c9094] flex-row rounded-2xl    items-center bg-[#40464d] py-[3px] px-4 ml-2">
              <Ionicons name="time-outline" size={24} color="#FFFBEB" />
              <Text className=" text-[#FFFBEB] ml-2" numberOfLines={1}>
                {truncateText("Full-time", 10)}
              </Text>
            </View>
          </View>
          <Text
            className="text-[#FFFBEB] mt-4 tracking-wider w-[100%] leading-5"
            numberOfLines={2}
            // ellipsizeMode="middle"
          >
            UX Designers are the synthesis of design and development. They take
            Google's most innovative product concepts...<Text>Read More</Text>
          </Text>
        </View>
      </BG_SVG>
      <View
        style={{
          height: 70,
          backgroundColor: "#FFFBEB",
          width: screenWidth * 0.9,
          zIndex: 10,
          borderBottomStartRadius: 30,
          borderBottomEndRadius: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View className="flex-row items-center  h-[70px]">
          <View>
            <TIMEICON color="#000" />
          </View>
          <Text className="font-semibold ml-2">Posted 2 days ago</Text>
        </View>
        <Text className="font-semibold text-lg">$95K/yr</Text>
      </View>
    </View>
  );
};

export default JobsTab;
