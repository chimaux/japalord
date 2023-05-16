import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Button1 from "./Button1";
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const PremiumPackageTab = ({props:{amount}}) => {
  return (
    <View
      className="flex items-center m-4 p-4 bg-white rounded-xl"
      style={{
        shadowOffset: { width: 3, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        elevation: 1,
        zIndex: 999, 
      }}
    >
      <View className="flex-row mt-4 mb-8">
        <View className="mr-2 flex items-center w-[150px] py-3 rounded-lg bg-[#e2ccd5] border-b-4 border-[#f4d994]">
          <Text
            className="text-xl text-zinc-700 "
            style={{ fontWeight: "bold" }}
          >
            Weekly
          </Text>
        </View>

     
          <Text
            className="text-xl tracking-wider"
            style={{ fontWeight: "bold" }}
          >
            {amount}
          </Text>
    
      </View>

      <View className="w-full flex-row items-center mb-2">
      <AntDesign name="star" size={24} color="black" />
        <Text className="text-lg text-zinc-700 ml-2" style={{ fontWeight: "bold" }}>Ad Free</Text>
      </View>

      
      <View className="w-full flex-row items-center mb-2">
      <AntDesign name="star" size={24} color="black" />
        <Text className="text-lg text-zinc-700 ml-2" style={{ fontWeight: "bold" }}>CV, SOP, and other Doc review</Text>
      </View>

      <View className="w-full flex-row items-center mb-2">
      <AntDesign name="star" size={24} color="black" />
        <Text className="text-lg text-zinc-700 ml-2" style={{ fontWeight: "bold" }}>Remote and VISA sponsored jobs</Text>
      </View>


      <View className="w-full flex-row items-center mb-2">
      <AntDesign name="star" size={24} color="black" />
        <Text className="text-lg text-zinc-700 ml-2" style={{ fontWeight: "bold" }}>Unlimited Direct Message</Text>
      </View>


      <View className="w-full flex-row items-center mb-2">
      <AntDesign name="star" size={24} color="black" />
        <Text className="text-lg text-zinc-700 ml-2" style={{ fontWeight: "bold" }}>Other Exclusive Offer</Text>
      </View>



      <Button1
        
        buttonProps={{
        //   onPress:open,
          title: "Go Premium",
          icon: <SimpleLineIcons name="diamond" size={30} color="white" />,
          backgroundColor: "#6e002b",
          color: "white",
          pbottom:"my-10 ",
          pright:"pr-[10px]",
          mleft:"ml-[-16px]",
          bborder:"border-b-4 border-[#f4d994]"
        }}
      />




    </View>
  );
};

export default PremiumPackageTab;
