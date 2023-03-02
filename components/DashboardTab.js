import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons  } from '@expo/vector-icons'

const DashboardTab = ({props:{btn, icon,title,content}}) => {
  return (
    <View
    className="flex justify-center my-4  py-4 px-2 bg-white rounded-xl"
    style={{
      shadowOffset: { width: 3, height: 3 },
      shadowColor: "black",
      shadowOpacity: 0.1,
      elevation: 1,
      zIndex: 999,
    }}
  >
<View className="flex-row items-center ">


<View className="mr-2 rounded-full h-[auto] bg-green-300">
{icon}
</View> 

<View>

<Text className="text-[18rem]" style={{ fontWeight: "bold" }}>
      {title}
    </Text>

    <Text
      className="text-[15rem] text-gray-400"
      style={{ fontWeight: "bold" }}
    >
      {content}
    </Text>
{btn}
{/* here */}


</View>

</View>
  </View>
  )
}

export default DashboardTab