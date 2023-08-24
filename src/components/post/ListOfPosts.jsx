import React from 'react'
import { ScrollView, View } from 'react-native'
import { useGetPosts } from '../../hooks/post'
import { Post } from './Post'
import { AddPostButton } from '../ui/AddPostButton'

export function ListOfPosts ({}) {
  const { posts } = useGetPosts()

  return (
    <View>
      <ScrollView className="p-2">
        {posts?.map(post => (
          <Post key={post.id} post={post}/>
        ))}

        <View className="mt-4 items-start">
          <AddPostButton/>
        </View>
      </ScrollView>
    </View>
  )
}