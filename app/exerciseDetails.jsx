import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function exerciseDetails() {
    const item = useLocalSearchParams()
    const router = useRouter()
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
            <Image 
                source={{uri: item.gifUrl}}
                contentFit='cover'
                style={{ width: widthPercentageToDP(100), height: widthPercentageToDP(100) }}
                className="rounded-b-[40px]"
            />
            <TouchableOpacity
                onPress={() => router.back()}
                className="mx-2 absolute rounded-full mt-2 right-0">
                <Ionicons name="arrow-back-circle" size={heightPercentageToDP(3)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details */}
            <ScrollView
                className='mx-4 space-y-2 mt-3'
            >
                <Text
                    style={{fontSize: heightPercentageToDP(2)}}
                    className="font-semibold text-neutral-800 tracking-wide">
                        {item.name}
                </Text>
                <Text
                    style={{fontSize: heightPercentageToDP(2)}}
                    className="font-bold text-neutral-700">
                        Equipment: {item?.equipment}
                </Text>
                <Text
                    style={{fontSize: heightPercentageToDP(2)}}
                    className="font-bold text-neutral-700">
                        Secondary Muscles: {item?.secondaryMuscles}
                </Text>
                <Text
                    style={{fontSize: heightPercentageToDP(2)}}
                    className="font-bold text-neutral-700">
                        Target Muscles: {item?.targetMuscles}
                </Text>
                <Text
                    style={{fontSize: heightPercentageToDP(3)}}
                    className="font-semibold text-neutral-800 tracking-wide">
                        Instructions
                </Text>
                {
                    item.instructions.split(",").map((instruction, index) => {
                        return (
                            <Text
                                key={instruction}
                                style={{fontSize: heightPercentageToDP(1.7)}}
                                className='text-neutral-800'
                            >
                                {instruction}
                            </Text>
                        )
                    })
                }
            </ScrollView>
      </View>
    </View>
  )
}