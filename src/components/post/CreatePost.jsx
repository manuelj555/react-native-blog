import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { useCreatePost } from '../../hooks/post'
import { router } from 'expo-router'

export function CreatePost ({}) {
  const { control, handleSubmit } = useForm()
  const { create, isCreating } = useCreatePost()

  async function handleCreatePress (data) {
    console.log({ data })
    try {
      await create(data)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View className="gap-2 mx-1 mt-4">
      <View className="flex flex-col">
        <Text>Título</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              className="bg-gray-50 rounded px-2 py-1"
              placeholder="Post Title"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
          name="title"
        />
      </View>
      <View className="flex flex-col">
        <Text>Contenido</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              className="bg-gray-50 rounded px-2 py-1"
              placeholder="Post Content"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
          name="content"
        />
      </View>
      <View className="flex flex-row justify-end pt-3">
        <Pressable
          disabled={isCreating}
          className={[
            'p-2 px-4 bg-indigo-600 rounded',
            isCreating && ' bg-indigo-800'
          ].join(' ')}
          onPress={handleSubmit(handleCreatePress)}>
          <Text className="text-gray-50 font-semibold text-lg">
            {isCreating ? 'Creando Post...' : 'Crear'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}