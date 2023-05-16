import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'

import { GlobalContext } from "../../Context";

const CommunityChat = () => {
 const {    menuValue, setMenuValue,}=useContext(GlobalContext)
  return (
    <SafeAreaView>
      <Text>CommunityChat</Text>
    </SafeAreaView>
  )
}

export default CommunityChat