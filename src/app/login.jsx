import React from 'react'
import { Stack } from 'expo-router'
import { ScreenLayout } from '../components/ui/ScreenLayout'
import { Login } from '../components/user/Login'

export default function LoginScreen () {
  return (
    <ScreenLayout screen={<Stack.Screen options={{ title: 'My Blog Page - Login' }}/>}>
      <Login/>
    </ScreenLayout>
  )
}
