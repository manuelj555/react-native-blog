import React from 'react'
import { Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

export function AddPostButton ({}) {
  return (
    <Link href="/post/create" asChild>
      <Pressable className="p-4 bg-indigo-800 rounded active:bg-indigo-600">
        <Text className="text-gray-50">Crear Post</Text>
      </Pressable>
    </Link>
  )
}