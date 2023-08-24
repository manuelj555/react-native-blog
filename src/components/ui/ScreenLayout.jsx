import React from 'react'
import { View } from 'react-native'

export function ScreenLayout ({ screen, children }) {
  return (
    <View className="items-center flex-1 items-stretch bg-indigo-100 p-1">
      {screen}
      {children}
    </View>
  )
}