import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { primaryColor } from "../constant";
import { GlobalContext } from "../../Context";
import GobackBTN from "../components/GobackBTN";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { urlFor } from "../../sanity";
const HotUpdateDetailPage = () => {
  const { menuValue, setMenuValue } = useContext(GlobalContext);
  console.log(title);
  const {
    params: { id, title, content, image },
  } = useRoute();
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: primaryColor,
        }}
      />
      <View
        className={`bg-[${primaryColor}] h-[80px] flex-row justify-between items-center px-4`}
      >
        <GobackBTN />
        <AntDesign name="sharealt" size={30} color="#fff" />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}
      >
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="w-[100%] h-[220px] rounded-md my-6"
        />
        <Text
          className="text-[#000]
        font-semibold text-xl
        "
        >
          {title}
        </Text>
        <Text className="text-[#4E4B66] text-lg my-4 text-left">{content}</Text>
      </ScrollView>
    </>
  );
};

export default HotUpdateDetailPage;
