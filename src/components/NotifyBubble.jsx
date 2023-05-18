import { View, Text, Image } from "react-native";
import React from "react";
import { primaryColor } from "../constant";
export default function NotifyBubble({ ...props }) {
  return (
    <View
      className={`flex-row px-4 justify-between items-center rounded-lg h-[130px] bg-[${props.bgColor}]`}
      style={[props.styles]}
    >
      <View className="rounded-full">
        <Image
          source={props.image}
          className="w-[90px] h-[90px]"
          style={{ resizeMode: "contain" }}
        />
      </View>

      <View className="w-[66%]">
        <Text
          className="text-[#fff] text-[16px] "
          numberOfLines={3}
          style={[props.textStyles1]}
        >
          <Text className="font-semibold">{props.user}</Text> {props.desc}
        </Text>
        <Text
          className="text-[#fff] mt-2 font-light"
          style={[props.textStyles2]}
        >
          {props.time}
        </Text>
      </View>
    </View>
  );
}
