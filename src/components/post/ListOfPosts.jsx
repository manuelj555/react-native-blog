import React from 'react'
import { ScrollView, View } from 'react-native'
import { useGetPosts } from '../../hooks/post'
import { Post, PostLoading } from './Post'
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

export function ListOfPostsLoading () {
  return (
    <View className="flex-1 items-center justify-center gap-y-4 p-3">
      <PostLoading/>
      <PostLoading/>
      <PostLoading/>
    </View>
  )
}