import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {  useRoute } from "@react-navigation/native";

const HotUpdateDetailPage = () => {
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