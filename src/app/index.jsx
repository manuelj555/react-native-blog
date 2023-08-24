import React from 'react'
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { ListOfPosts } from '../components/post/ListOfPosts'

export default function IndexScreen () {
  return (
    <View className="items-center flex-1 bg-indigo-100">
      <Stack.Screen options={{ title: 'My Blog Page' }}/>
      <ListOfPosts/>
    </View>
  )
}
