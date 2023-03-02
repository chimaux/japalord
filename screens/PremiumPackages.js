import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import PremiumPackageTab from "../components/PremiumPackageTab";
import TopMenu from "../components/TopMenu";
import { useNavigation } from "@react-navigation/native";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import BottomMenu from "../components/BottomMenu";
const PremiumPackages = () => {
  const navigation = useNavigation();
  const [menuValue, setMenuValue] = useState("hidden");
  const [menuValue2, setMenuValue2] = useState("hidden");

  return (
   
      <SafeAreaView className=" flex-1 bg-[#6e002b]">
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
            state:menuValue,
            visibility:setMenuValue
        }}
      />

      <SnLpop 
              props={{
                state2:menuValue2,
                visibility2:setMenuValue2
            }}
      />
      
      <ScrollView className=" bg-[#FFFBEB]"
      contentContainerStyle={{paddingBottom:100}}
      >
        <PremiumPackageTab 
        props={{
          amount:"₦ 1,500"
        }}
        />
        <PremiumPackageTab 
        props={{
          amount:"₦ 3,000"
        }}
        />
        <PremiumPackageTab 
        props={{
          amount:"₦ 10,000"
        }}
        />
   
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

export default PremiumPackages;
