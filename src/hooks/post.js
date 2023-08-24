import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../api/posts'

export function useGetPosts () {
  const { data: posts } = useQuery(['posts'], () => getAllPosts())

  return {
    posts,
  }
}