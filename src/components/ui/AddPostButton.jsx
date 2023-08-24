import React from 'react'
import { Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

export function AddPostButton ({ small = false }) {
  return (
    <Link href="/post/create" asChild>
      <Pressable className={`${small ? 'py-1 px-2' : 'p4'} bg-indigo-800 rounded active:bg-indigo-600`}>
        <Text className={`${small ? 'text-sm' : ''} text-gray-50`}>Crear Post</Text>
      </Pressable>
    </Link>
  )
}