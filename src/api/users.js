import { supabase } from '../service/supabase'

export async function registerUser ({ userData }) {
  const { data } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        country: userData.country,
      }
    }
  })

  return data
}

export async function loginUser ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw new Error(error)

  return data
}