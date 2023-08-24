import React from 'react'
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function IndexScreen () {
  return (
    <View className="items-center justify-center flex-1">
      <Stack.Screen options={{ title: 'My Blog Page' }}/>
      <Text>Bienvenido!</Text>
    </View>
  )
}
