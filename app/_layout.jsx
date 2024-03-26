import { Stack } from 'expo-router'
import React from 'react'
import { LogBox } from 'react-native'

export default function _layout() {
  LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package."])
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }} />
      <Stack.Screen name="exerciseDetails" options={{
        presentation: 'modal'
      }} />
    </Stack>
  )
}