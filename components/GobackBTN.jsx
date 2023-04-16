import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../Context';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const GobackBTN = () => {
    const { dominantColor } = useContext(GlobalContext);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const navigation = useNavigation();
  return (
    <TouchableOpacity
          TouchableOpacity={0.3}
          className="flex items-center justify-center  rounded-full bg-[#440d22]"
          onPress={() => navigation.goBack()}
          style={{
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "black",
            shadowOpacity: 0.1,
            elevation: 1,
            zIndex: 999,
            width: screenWidth * 0.15,
            height: screenHeight * 0.08,
          }}
        >
          <Ionicons name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
  )
}

export default GobackBTN