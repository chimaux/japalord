import { View, Text, SafeAreaView, TextInput, Dimensions,ScrollView, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import TopMenu from "../components/TopMenu";
import { GlobalContext } from "../Context";
import InputField from "../components/InputField";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import SideMenu from "../components/SideMenu";
import JobsTab from "../components/JobsTab";
import BottomMenu from "../components/BottomMenu";


const Jobs = () => {
 const {   menuValue, setMenuValue,dominantColor}=useContext(GlobalContext)
 const jobs = [1,2,3,4,5]
  const image = { img: require("../images/avatar.png") };


  const [menuValue2, setMenuValue2] = useState("hidden");
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View 
    style={{
      flex:1

    }}>
      <SafeAreaView style={{ backgroundColor: dominantColor }} />
      <TopMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
          state2: menuValue2,
          visibility2: setMenuValue2,
          image: image.img,
          title: "Find Jobs",
        }}
      />

      <SideMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
        }}
      />

      <View className=" flex-row my-4 justify-center">
        <InputField
          inputProps={{
            placeholder: "Search for company roles",
            // dropShadow:"dropShadow",
            icon: <AntDesign name="search1" size={28} color="#d3d1d1" />,
            width: "w-[65vw]",
            flex: "flex-row items-center",
            placeholderTextColor: "#d3d1d1",
            identity: "jobs",
            designType:"type1"
          }}
        />

        <View
          className="bg-[#424141] w-[15vw] ml-2 rounded justify-center items-center"
        >
          <Ionicons name="ios-funnel-outline" size={30} color="#d3d1d1" />
        </View>
      </View>

    
<View className="mx-4">

<FlatList
contentContainerStyle={{
   paddingBottom:screenHeight *0.62 

}}
 showsVerticalScrollIndicator={false}
data={jobs}
renderItem={({item,index})=>{
  return(
<View className="my-4">
< JobsTab/>
</View>
  )
}}
/>


</View>
{/* <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      /> */}
    </View>
  );
};

export default Jobs;
