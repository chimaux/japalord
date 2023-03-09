import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import SliderItem from './SliderItem'
import Pagination from './Pagination'

const Slider = ({ props: { data } }) => {

 const [index, setIndex] =useState(0)

    const scrollX = useRef(new Animated.Value(0)).current
    const onScrollHandler = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    },
                },
            },
        ],
            {
                useNativeDriver: false,
            },
        )(event)
    };



    const onViewItemsChangeHandler = useRef(({ viewableItems }) => {
        // console.log('viewableItems', viewableItems)
        setIndex(viewableItems[0].index)
    }
    ).current

const viewabilityConfig = useRef({
    itemVisiblePercentThreshold:50,
}).current

    return (
        <View>
            <FlatList
                onScroll={onScrollHandler}
                data={data}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SliderItem item={item} />}
                onViewableItemsChanged={onViewItemsChangeHandler}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination
                data={data}
                scrollX={scrollX}
                index={index}
            />
        </View>
    )
}

export default Slider