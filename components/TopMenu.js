import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";


const TopMenu = ({props:{state,visibility,state2,visibility2}}) => {

    
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        // headerTitle:"Testing",
        headerShown: false,
      });
    }, []);
  



  

  
    //SafeAreaView instructions for android
    useLayoutEffect(() => {
      setStatusBarTranslucent(false);
    }, []);
  
  




  return (
    <View>




      <View className="bg-[#6e002b] w-full h-[70px] flex  flex-row justify-between items-center">
        <TouchableOpacity
          className="ml-4 rounded-full p-2 border-2 border-[#ffffff71]"
          onPress={() => {
            if(state == "hidden"){
                visibility("")
                if(state2 == ""){
                    visibility2("hidden")
                }
            }
            else if(state == ""){
                visibility("hidden")
      
            }
          
          }}
        >
          {state == "hidden" ? (
            <OutlineIcons.Bars3Icon className=" text-white" size={30} />
          ) : (
            <OutlineIcons.XMarkIcon className=" text-white" size={30} />
          )}
        </TouchableOpacity>
        <Text className="text-white font-bold text-lg tracking-wide">
          EasyJapa
        </Text>
        <TouchableOpacity
          className="mr-4 rounded-full p-2 border-2 border-[#ffffff71] "
          onPress={() => {
            if(state2 == "hidden"){
                visibility2("")
                if(state == ""){
                    visibility("hidden")
                }
            }
            else if(state2 == ""){
                visibility2("hidden")
      
            }
          }}
        >
          <OutlineIcons.UserCircleIcon className=" text-white " size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopMenu