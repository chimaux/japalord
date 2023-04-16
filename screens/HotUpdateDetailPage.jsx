import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import {  useRoute } from "@react-navigation/native";

import { GlobalContext } from "../Context";

const HotUpdateDetailPage = () => {
 const {    menuValue, setMenuValue,}=useContext(GlobalContext)
    console.log(title)
    const {
        params:{
            id,title,content,image
        }
    } = useRoute()
  return (
    <SafeAreaView>
      <Text className="text-gray-600">{title}</Text>
    </SafeAreaView>
  )
}

export default HotUpdateDetailPage