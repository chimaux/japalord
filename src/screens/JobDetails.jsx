import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { primaryColor } from "../constant";
import { TIMEICON, TIMEICON2 } from "../../assets/svgs/svg";
import { screenHeight, screenWidth } from "../components/JobsTab";
import { GlobalContext } from "../../Context";
import { useNavigation } from "@react-navigation/native";

const JobDetails = () => {
  const [image, setImage] = useState(true);
  const image1 = { img: require("../images/avatar.png") };
  const { truncateText } = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <View className="bg-[#cbc6b8] flex-1">
      <SafeAreaView />
      <View className="flex-row items-center justify-between mx-4 my-6 ">
        <View className="flex-row items-center ">
          <Pressable className="pr-4 py-2" onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={primaryColor} />
          </Pressable>
          <Text
            className="ml-2 text-lg"
            style={{
              color: primaryColor,
            }}
          >
            Job Details
          </Text>
        </View>

        <TouchableOpacity

        //   onPress={() => {
        //     if (state2 == "hidden") {
        //       visibility2("");
        //       if (state == "") {
        //         visibility("hidden");
        //       }
        //     } else if (state2 == "") {
        //       visibility2("hidden");
        //     }
        //   }}
        >
          {image ? (
            <Image
              source={image1.img}
              className="w-[40px] h-[40px]"
              style={{ resizeMode: "contain" }}
            />
          ) : (
            <OutlineIcons.UserCircleIcon className=" text-white " size={30} />
          )}
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-center">
        <View
          className="bg-[#FFFBEB]"
          style={{
            borderRadius: 30,
            width: screenWidth * 0.9,
          }}
        >
          <View
            className="p-4 "
            style={{
              height: screenHeight * 0.22,
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
                  className=" leading-5 text-[#6E002B] font-bold mb-2 tracking-wider w-[100%]"
                  numberOfLines={2}
                >
                  Sr. UX Designers developers zIndex: 100, vbchngj
                </Text>
                <Text className=" tracking-wider font-medium text-[#6E002B]">
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
              <View className="w-[none]  border-[1px] border-[#b8808d] flex-row rounded-2xl    items-center bg-[#e9d5ce] py-[3px] px-4">
                <Ionicons name="ios-location-outline" size={24} color="#000" />
                <Text className=" text-[#000] ml-2">
                  {truncateText("New York", 15)}
                </Text>
              </View>

              <View className="w-[none] border-[1px] border-[#b8808d] flex-row rounded-2xl    items-center bg-[#e9d5ce] py-[3px] px-4 ml-2">
                <Ionicons name="time-outline" size={24} color="#000" />
                <Text className=" text-[#000] ml-2" numberOfLines={1}>
                  {truncateText("Full-time", 10)}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: screenWidth * 0.9,
              zIndex: 10,

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View className="flex-row items-center  h-[70px]">
              <View>
                <TIMEICON2 />
              </View>
              <Text className="font-semibold ml-2 text-[#6E002B]">
                Posted 2 days ago
              </Text>
            </View>
            <Text className="font-semibold text-lg text-[#6E002B]">
              $95K/yr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobDetails;
