import { supabase } from '../service/supabase'

export async function getAllPosts () {
  const { data } = await supabase.from('post').select('*')

  return data
}