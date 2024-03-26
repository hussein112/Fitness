import { View, Text, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { FlatList, TouchableOpacity } from 'react-native'
import { bodyParts } from '../constants/index'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

export default function BodyParts() {
  const router = useRouter();
  return (
    <View>
      <Text style={{fontSize: heightPercentageToDP(3)}} className="font-semibold text-neutral-700">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={ ({item, index}) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const BodyPartCard = ({router, item, index}) => {
  return(
    <View>
      <TouchableOpacity
        onPress={() => router.push({pathname: '/exercises', params: item})}
        style={{width: widthPercentageToDP(44), height: widthPercentageToDP(52)}}
        className="flex justify-end p-4 mb-4"
        >
          <Image
            source={item.image}
            resizeMode="cover"
            style={{width: widthPercentageToDP(44), height: widthPercentageToDP(52)}}
            className="rounded-[35px] absolute"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
              style={{width: widthPercentageToDP(44), height: widthPercentageToDP(52)}}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              className="absolute bottom-0 rounded-b-[35px]"
              />
              <Text
                style={{ fontSize: heightPercentageToDP(2.3)}}
                className="text-white font-semibold text-center tracking-wide"
              >
                {item?.name}
              </Text>
        </TouchableOpacity>
    </View>
  )
}