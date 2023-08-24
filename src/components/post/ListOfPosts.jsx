import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { useGetPosts } from '../../hooks/post'
import { Post, PostLoading } from './Post'
import { AddPostButton } from '../ui/AddPostButton'

export function ListOfPosts ({}) {
  const { posts } = useGetPosts()

  return (
    <View className='mb-4'>
      <FlatList
        className="p-2"
        data={posts}
        renderItem={({ item: post }) => (
          <Post post={post}/>
        )}
        keyExtractor={post => post.id}
      />
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