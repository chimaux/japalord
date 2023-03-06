import { View, Text, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const {width,height} = Dimensions.get('screen')
const SliderItem = ({ item }) => {
  return (
   <View 
 
   className="flex items-center"
   style={{width:width}}
   >
     <View className="rounded-2xl overflow-hidden w-[92vw]">
      <Image
        source={item.image}
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
   </View>
  );
};

export default SliderItem;
