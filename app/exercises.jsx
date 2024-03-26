import { StatusBar, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { fetchExercisesByBodyPart } from '../api/exerciseDB';
import { ScrollView } from 'react-native-virtualized-view';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExerciseList from '../components/ExerciseList';

export default function exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [exercises, setExercises] = useState([]);
    const prevItemName = useRef(null);
    useEffect(() => {
        if (item && item.name !== prevItemName.current) {
            getExercises(item.name);
            prevItemName.current = item.name;
        }
    }, [item]);
    const getExercises = async(bodypart) => {
        let data = await fetchExercisesByBodyPart(bodypart);
        setExercises(data);
    }
  return (
    <ScrollView>
        <StatusBar style="light" />
        <Image
            source={item.image}
            style={{width: widthPercentageToDP(100), height: heightPercentageToDP(45)}}
            className="rounded-b-[40px]"
        />
        <TouchableOpacity
            onPress={() => router.back()}
            className="bg-rose-500 absolute rounded-full"
            style={{height: heightPercentageToDP(5.5), width: heightPercentageToDP(5.5), marginTop: heightPercentageToDP(7)}}
        >
                <Ionicons name="caret-back-outline" size={heightPercentageToDP(3)} color="gray" />
        </TouchableOpacity>

        {/* Exercises */}
        <View className="mx-4 space-y-3 mt-4">
            <Text style={{ fontSize: heightPercentageToDP(3)}} className="font-semibold text-neutral-700">
                {item.name} exercises
            </Text>
            <View className="mb-10">
                <ExerciseList data={exercises} />
            </View>
        </View>
    </ScrollView>
  )
}