import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { useController } from 'react-hook-form'
import { FieldError } from './FieldError'

export function FormInput ({
  title,
  name,
  control,
  render = null,
  ...inputProps
}) {
  const { field, formState: { errors } } = useController({ name, control })

  return (
    <View className="flex flex-col">
      <Text className="text-lg text-gray-700">{title}</Text>
      {render && render(field)}
      {!render && (
        <TextInput
          className="bg-gray-50 rounded px-2 py-1"
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          {...inputProps}
        />
      )}
      <FieldError errors={errors} name={name}/>
    </View>
  )
}