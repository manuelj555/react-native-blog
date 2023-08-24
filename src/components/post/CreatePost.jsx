import React from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { useCreatePost } from '../../hooks/post'
import { router } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FieldError } from '../ui/form/FieldError'

const postSchema = z.object({
  title: z.coerce.string().min(1, 'Por favor, indique el título del post'),
  content: z.coerce.string()
    .min(1, 'Por favor, agregue contenido al post')
    .min(10, 'Este contenido es muy corto para poder públicarlo'),
})

export function CreatePost ({}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(postSchema)
  })
  const { create, isCreating } = useCreatePost()

  async function handleCreatePress (data) {
    try {
      await create(data)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  console.log(errors)

  return (
    <ScrollView className="px-2 mt-4">
      <KeyboardAvoidingView className="gap-3" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="flex flex-col">
          <Text>Título</Text>
          <Controller
            control={control}
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
          <FieldError errors={errors} name="title"/>
        </View>
        <View className="flex flex-col">
          <Text>Contenido</Text>
          <Controller
            control={control}
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
          <FieldError errors={errors} name="content"/>
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
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
