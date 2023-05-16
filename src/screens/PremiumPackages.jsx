import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import PremiumPackageTab from "../components/PremiumPackageTab";
import TopMenu from "../components/TopMenu";
import { useNavigation } from "@react-navigation/native";
import SideMenu from "../components/SideMenu";
import SnLpop from "../components/SnLpop";
import BottomMenu from "../components/BottomMenu";
import { GlobalContext } from "../../Context";
const PremiumPackages = () => {
  const {setMenuValue, menuValue} = useContext(GlobalContext)
  const navigation = useNavigation();

  const [menuValue2, setMenuValue2] = useState("hidden");

  return (
<>

<SafeAreaView
        style={{
          backgroundColor: "#6E002B",
        }}
      />
    <View className=" flex-1">
  
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

      <ScrollView
        className=" bg-[#FFFBEB]"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <PremiumPackageTab
          props={{
            amount: "₦ 1,500",
          }}
        />
        <PremiumPackageTab
          props={{
            amount: "₦ 3,000",
          }}
        />
        <PremiumPackageTab
          props={{
            amount: "₦ 10,000",
          }}
        />
      </ScrollView>

      {/* <BottomMenu
        props={{
          activeTab: "",
          pbottom: 0,
        }}
      /> */}
    </View>
</>

  );
};

export default PremiumPackages;
