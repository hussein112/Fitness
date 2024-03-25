import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import  Animated , { FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'


export default function index() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.image} source={require('../assets/welcome.jpg')} />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={styles.gradient}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y:0.8}}>
            <Animated.View entering={FadeInDown.delay(100)} style={styles.center}>
                <Text style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold' }}>
                    Best <Text style={{ color: '#ff00e0'}}>Workouts</Text>
                </Text>
                <Text style={{ fontSize: hp(5), color: 'white' }}>
                    For You
                </Text>
            </Animated.View>


            <Animated.View entering={FadeInDown.delay(200)}>
                <TouchableOpacity
                    onPress={() => router.push('home')}
                    style={styles.button}
                >
                    <Text style={{ color: "white", fontWeight: 'bold', fontSize: hp(3)}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </Animated.View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-end",
        flex: 1
    },
    image: {
        width: wp('100%'),
        height: hp('100%'),
        position: "absolute"
    },
    gradient: {
        width: wp(100), 
        height: hp(70),
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: 12
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        height: hp(7),
        width: wp(80),
        backgroundColor: '#ff00e0',
        display: 'flex',
        flexItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    }
})