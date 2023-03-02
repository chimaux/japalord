import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import BottomMenu from "../components/BottomMenu";
import SnLpop from "../components/SnLpop";
import { Ionicons, AntDesign, MaterialIcons, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import DashboardTab from "../components/DashboardTab";
import Button1 from "../components/Button1";

const Dashboard = () => {
  const [menuValue, setMenuValue] = useState("hidden");
  const [menuValue2, setMenuValue2] = useState("hidden");

  const image = { img: require("../images/Alice.png") };
  return (
    <SafeAreaView className="flex-1 bg-[#6e002b]">
      <TopMenu
        props={{
          state: menuValue,
          visibility: setMenuValue,
          state2: menuValue2,
          visibility2: setMenuValue2,
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
      <ScrollView className="bg-[#FFFBEB]"
      contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className=" flex-row  items-center justify-between px-4 py-6">
          <View className="flex-row  items-end w-[50vw] space-x-2">
            <Image
              source={image.img}
              className="w-[70px] h-[70px]"
              style={{ resizeMode: "contain" }}
            />
            <Text className="text-2xl mb-2" style={{ fontWeight: "bold" }}>
              Arya Muller
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="settings-sharp" size={30} color="#9c657aa1" />
          </TouchableOpacity>
        </View>

        <View
          className="mx-4 p-4 bg-white rounded-xl"
          style={{
            shadowOffset: { width: 3, height: 3 },
            shadowColor: "black",
            shadowOpacity: 0.1,
            elevation: 1,
            zIndex: 999,
          }}
        >
          <Text className="text-xl" style={{ fontWeight: "bold" }}>
            Points
          </Text>

          <Text
            className="text-lg text-gray-400"
            style={{ fontWeight: "bold" }}
          >
            800 Points to redeem
          </Text>

          <View className="w-full bg-[#FFFBEB] rounded-full h-[45px] flex-row items-center overflow-hidden my-4">
            <View className=" px-2 py-3 flex w-[80%]  items-end  rounded-full bg-[#6e002b]">
              <View className="flex-row items-center">
                <AntDesign name="star" size={20} color="#ffffffbb" />
                <Text className="text-[#ffffffbb] " style={{ fontSize: 18 }}>
                  {" "}
                  5200/6000
                </Text>
              </View>
            </View>
          </View>
        </View>

<View className="flex-row justify-between mx-4">

<DashboardTab
          props={{
            btn: (
              <View className="mt-2 w-[30vw]  flex items-center py-[3px] rounded-full  bg-[#6e002b]">
                <Text className="text-[#fffffff1] " style={{ fontSize: 18 }}>
                  Redeem
                </Text>
              </View>
            ),
            icon: <MaterialIcons name="bolt" size={24} color="black" />,
            title:"5200",
            content:"Available Points",
            iconBG:"bg-green-100"
          }}
        />


<DashboardTab
          props={{
            icon: <MaterialIcons name="bar-chart" size={24} color="black" />,
            title:"10500",
            content:"All Time Points",
            iconBG:"bg-indigo-100"
          }}
        />

</View>

<View className="flex-row justify-between mx-4">

<DashboardTab
          props={{
            icon: <Entypo name="check" size={24} color="black" />,
            title:"9950",
            content:"Redeemed Points",
            iconBG:"bg-blue-100"
          }}
        />


<DashboardTab
          props={{
            icon: <MaterialIcons name="bolt" size={24} color="black" />,
            title:"12000",
            content:"Withdrawn Points",
            iconBG:"bg-red-100"
          }}
        />
</View>

<Text className=" text-xl text-zinc-400 mx-4 my-4"
style={{fontWeight:"bold"}}
>
    My Package
</Text>


<View
          className="mx-4 p-4 mb-4 bg-white rounded-xl"
          style={{
            shadowOffset: { width: 3, height: 3 },
            shadowColor: "black",
            shadowOpacity: 0.1,
            elevation: 1,
            zIndex: 999,
          }}
        >
<View className="flex-row  justify-between">

<Text className="text-xl" style={{ fontWeight: "bold" }}>
            Current Package
          </Text>

          <Text
            className="text-xl "
            style={{ fontWeight: "bold" }}
          >
            BASIC
          </Text>
</View>
  
<Button1
              buttonProps={{
                title: "Go Premium",
                icon: <SimpleLineIcons name="diamond" size={30} color="white" />,
                backgroundColor: "#6e002b",
                color: "white",
                pbottom:"my-2 ",
                width:"w-[60vw]",
                pright:"pr-[10px]",
                mleft:"ml-[-16px]",
                bborder:"border-b-4 border-[#f4d994]"
              }}
            />


        </View>



        <View
          className="mx-4 p-4 mb-4 bg-white rounded-xl"
          style={{
            shadowOffset: { width: 3, height: 3 },
            shadowColor: "black",
            shadowOpacity: 0.1,
            elevation: 1,
            zIndex: 999,
          }}
        >
          <Text className="text-xl" style={{ fontWeight: "bold" }}>
            Refer and Earn Reward Points
          </Text>

<View className="flex-row items-center">
<View className="w-[70vw] bg-[#FFFBEB] rounded-full h-[45px]  flex-row items-center justify-between overflow-hidden my-4">
            <Text className=" ml-2">https:..easyjapa?ref/12345</Text>
            <View className=" px-2 py-2 flex w-[30%]  items-center  rounded-full bg-[#6e002b]">
              <View className="flex-row items-center">
                <Text className="text-[#fffffff0] " style={{ fontSize: 18 }}>
                 copy
                </Text>
              </View>
            </View>
          </View>

<View className="ml-2 flex-wrap items-center">
    <Text className="text-[#6e002b]"
    style={{fontWeight:"bold"}}
    >Share</Text>
    <AntDesign name="sharealt" size={24} color="#6e002b" />
</View>

</View>
        </View>


      </ScrollView>

      <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
