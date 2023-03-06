import { View, Text, Animated, Dimensions } from 'react-native'
import React from 'react'


const {width,height} = Dimensions.get('screen')

const Pagination = ({data, scrollX}) => {
  return (
    <View className="w-full justify-center flex-row absolute bottom-3">
      {
        data.map((x,index)=>{
            const inputRange = [(index-1) * width, index*width, (index + 1)* width]
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange:[12,30,12],
                extrapolate: 'clamp'
            })
            return <Animated.View key={index.toString()} 
            className="w-2 h-2 bg-white mx-2 rounded-full"
            style={{width:dotWidth}}
            />

        })
      }
    </View>
  )
}

export default Pagination