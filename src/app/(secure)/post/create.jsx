import React from 'react'
import { CreatePost } from '../../../components/post/CreatePost'
import { Stack } from 'expo-router'
import { ScreenLayout } from '../../../components/ui/ScreenLayout'
import { HeaderRightButton } from '../../../components/ui/HeaderRightButton'
import { useLogout } from '../../../hooks/auth'

export default function CreatePostScreen ({}) {
  const { logout } = useLogout()

  return (
    <ScreenLayout screen={<Stack.Screen options={{
      title: 'Crear Post',
      // headerRight: () => <HeaderRightButton title="Volver" href="/"/>
      headerRight: () => <HeaderRightButton title="Volver" onPress={logout}/>
    }}/>}>
      <CreatePost/>
    </ScreenLayout>
  )
}