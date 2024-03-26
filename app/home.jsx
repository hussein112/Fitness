import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native-web'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageSlider from '../components/ImageSlider'
import BodyParts  from '../components/BodyParts'

export default function home() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="dark" />

        {/* Punchline & Avatar */}
        <View style={styles.punchline}>
            <View>
                <Text style={styles.punchline_text}>READY TO</Text>
                <Text style={styles.punchline_text_bottom}>WORKOUT</Text>
            </View>

            <View style={styles.avatar_container}>
                <Image
                    source={require("../assets/avatar.png")}
                    style={{ height: hp(6), width: hp(6), borderRadius: 100}}
                />
                <View 
                style={{ height: hp(5.5), width: hp(5.5) }}
                className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300">
                    <Ionicons name="notifications" size={hp(3)} color="gray" />
                </View>
            </View>
        </View>

        {/* Image Slider */}
        <View >
            <ImageSlider />
        </View>


        {/* Body Parts */}
        <View className="flex-1">
            <BodyParts />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
    },
    punchline: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    punchline_text: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
    },
    punchline_text_bottom:{
        fontSize: hp(4.5),
        fontWeight: 'bold',
        color: '#ff00e0',
    },
    avatar_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2
    }
})