import React from 'react'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'

export function HeaderRightButton ({ href, title }) {
  return (
    <Link href={href} asChild>
      <Pressable className='py-1 px-2 rounded bg-indigo-700 active:bg-indigo-800'>
        <Text className='text-gray-100 text-xs'>{title}</Text>
      </Pressable>
    </Link>
  )
}