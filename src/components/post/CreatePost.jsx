import React from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { useCreatePost } from '../../hooks/post'
import { router } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormInput } from '../ui/form/FormInput'
import { useAuth } from '../../hooks/auth'

const postSchema = z.object({
  title: z.coerce.string().min(1, 'Por favor, indique el título del post'),
  content: z.coerce.string()
    .min(1, 'Por favor, agregue contenido al post')
  // .min(10, 'Este contenido es muy corto para poder públicarlo')
}).passthrough()

export function CreatePost () {
  const { user } = useAuth()
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      content: '',
    }
  })
  const { create, isCreating } = useCreatePost()

  async function handleCreatePress (data) {
    console.log('Según es valido')
    console.log({ data })
    return

    try {
      await create(data)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  if (!user) {
    return null
  }

  return (
    <KeyboardAvoidingView className="flex-1 mt-4" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ gap: 12, paddingHorizontal: 6 }}>
        <FormInput
          title="Título"
          name="title"
          control={control}
          placeholder="Título del post"
        />
        <FormInput
          title="Contenido"
          name="content"
          control={control}
          placeholder="Contenido del post"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />
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
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
