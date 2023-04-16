import { View, Text, Dimensions, TextInput} from 'react-native'
import React from 'react'

const OtpBox = () => {
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  return (
    <View className="px-2">
      <TextInput
      className="bg-white rounded px-2"
      style={{
        width:screenWidth*0.15,
        height:screenHeight*0.08
      }}
      />
    </View>
  )
}

export default OtpBox