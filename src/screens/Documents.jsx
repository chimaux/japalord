import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from "../../Context";

const Documents = () => {
 const {    menuValue, setMenuValue,}=useContext(GlobalContext)
  return (
    <SafeAreaView>
      <Text>Documents</Text>
    </SafeAreaView>
  )
}

export default Documents