import React from 'react'
import { Stack } from 'expo-router'
import { ListOfPosts } from '../components/post/ListOfPosts'
import { ScreenLayout } from '../components/ui/ScreenLayout'

export default function IndexScreen () {
  return (
    <ScreenLayout
      screen={<Stack.Screen options={{ title: 'My Blog Page' }}/>}
    >
      <ListOfPosts/>
    </ScreenLayout>
  )
}
