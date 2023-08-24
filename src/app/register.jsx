import React from 'react'
import { Stack } from 'expo-router'
import { ScreenLayout } from '../components/ui/ScreenLayout'
import { Register } from '../components/user/Register'

export default function RegisterUserScreen () {
  return (
    <ScreenLayout screen={<Stack.Screen options={{ title: 'My Blog Page - Registro' }}/>}>
      <Register/>
    </ScreenLayout>
  )
}
