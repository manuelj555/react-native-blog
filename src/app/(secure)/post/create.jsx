import React from 'react'
import { Text } from 'react-native'
import { CreatePost } from '../../../components/post/CreatePost'
import { Stack } from 'expo-router'
import { ScreenLayout } from '../../../components/ui/ScreenLayout'
import { HeaderRightButton } from '../../../components/ui/HeaderRightButton'

export default function CreatePostScreen ({}) {
  return (
    <ScreenLayout screen={<Stack.Screen options={{
      title: 'Crear Post',
      headerRight: () => <HeaderRightButton title="Volver" href="/"/>
    }}/>}>
      <CreatePost/>
    </ScreenLayout>
  )
}