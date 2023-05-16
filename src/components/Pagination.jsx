import { View, Text, Animated, Dimensions } from 'react-native'
import React from 'react'


const {width,height} = Dimensions.get('screen')

const Pagination = ({data, scrollX, index}) => {
  return (
    <View className="w-full justify-center flex-row absolute bottom-3">
      {
        data.map((x,idx)=>{
            const inputRange = [(idx-1) * width, idx*width, (idx + 1)* width]
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange:[12,30,12],
                extrapolate: 'clamp'
            })

            const backgroundColor = scrollX.interpolate({
                inputRange,
                outputRange:["#6E002B","#eb4b89","#6E002B"],
                extrapolate: 'clamp'
            })
            // idx == index && {backgroundColor:"#6E002B", borderRightWidth:"0.3px", borderColor:"white"}
            return <Animated.View key={idx.toString()} 
            className="w-2 h-2 bg-white mx-2 rounded-full"
            style={[{width:dotWidth,backgroundColor }]}
            />

        })
      }
    </View>
  )
}

export default Pagination