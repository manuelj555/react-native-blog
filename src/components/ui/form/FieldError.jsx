import React from 'react'
import { Text, View } from 'react-native'
import { get } from 'react-hook-form'

export function FieldError ({ errors, name }) {
  const error = get(errors, name)

  if (!error) {
    return null
  }

  const { message } = error

  return (
    <View className='px-2 py-1 bg-red-500 rounded my-1'>
      <Text className='text-white'>{message}</Text>
    </View>
  )
}