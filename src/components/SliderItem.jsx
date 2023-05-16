import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { urlFor } from "../../sanity";
const { width, height } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";
const SliderItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HotUpdateDetailPage", {
          id: item._id,
          title: item.title,
          content: item.content,
          image: item.image,
        });
      }}
      className="flex items-center"
      style={{ width: width }}
      activeOpacity={0.9}
    >
      <View className="rounded-2xl overflow-hidden w-[92vw]">
        <Image
          source={{
            uri: urlFor(item.image).url(),
          }}
          resizeMode="cover"
          style={{ width: "100%", height: 200 }}
        />

        <LinearGradient
          className="w-full h-[100px] absolute bottom-0 flex items-center justify-center "
          colors={["#30313006", "#383a38e9"]}
          locations={[0, 0.3]}
        >
          <Text className="text-white">{item.title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default SliderItem;
