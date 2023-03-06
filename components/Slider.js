import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef } from 'react'
import SliderItem from './SliderItem'
import Pagination from './Pagination'

const Slider = ({ props: { data } }) => {
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
        console.log('viewableItems', 'viewableItems')
    }
    ).current

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
                onViewItemsChangeHandler={onViewItemsChangeHandler}
            />
            <Pagination
                data={data}
                scrollX={scrollX}
            />
        </View>
    )
}

export default Slider