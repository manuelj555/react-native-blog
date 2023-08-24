import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createPost, getAllPosts } from '../api/posts'

export function useGetPosts () {
  const { data: posts } = useQuery(['posts'], () => getAllPosts(), {
    suspense: true,
  })

  return {
    posts,
  }
}

export function useCreatePost () {
  const queryClient = useQueryClient()

  const { mutateAsync, isLoading } = useMutation((postData) => createPost({ post: postData }), {
    onSuccess () {
      queryClient.invalidateQueries(['posts'])
      queryClient.setQueryData(['posts'], (prevPosts) => {
        return [...prevPosts, {
          id: Date.now(),
          loading: true,
        }]
      })
    }
  })

  return {
    create: mutateAsync,
    isCreating: isLoading,
  }
}