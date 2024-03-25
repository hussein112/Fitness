import { View, Text } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage} from "react-native-snap-carousel"
import { sliderImages } from '../constants'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function ImageSlider() {
  return (
    <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={widthPercentageToDP(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={widthPercentageToDP(100) - 70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  )
}


const ItemCard = ({item, index}, parallaxProps) => {
    return (
        <View style={{ width: widthPercentageToDP(100) - 70, height: heightPercentageToDP(25) }}>
            <ParallaxImage
                source={item}
                containerStyle={{borderRadius: 30, flex: 1}}
                style={{resizeMode: 'containe'}}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}