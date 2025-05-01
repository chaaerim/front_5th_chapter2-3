import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost, CreatePostResponse, NewPost, PostListResponse } from "@entities/post"
import { useSearch, usePagination } from "@features/search"
import { QUERY_KEYS } from "@features/post/config/queryKeys"

export const useCreatePostQuery = (close: () => void) => {
  const queryClient = useQueryClient()
  const { sortBy, sortOrder, tag, title } = useSearch()
  const { limit, skip } = usePagination()

  const { mutate: createPostMutation } = useMutation({
    mutationFn: async (newPost: NewPost) => await createPost(newPost),
    onSuccess: (createdPost: CreatePostResponse) => {
      const newPost = {
        ...createdPost,
        reactions: {
          likes: 0,
          dislikes: 0,
        },
        views: 0,
        tags: [],
      }
      // 기존 ["posts"] 캐시를 꺼내서, 새로운 Post를 맨 앞에 추가하고 total을 +1
      queryClient.setQueryData<PostListResponse>(
        QUERY_KEYS.GET_POST(tag, title, limit, skip, sortBy, sortOrder),
        (old) => {
          if (!old) {
            return {
              posts: [newPost],
              total: 1,
              skip: 0,
              limit: 10,
            }
          }
          return {
            posts: [newPost, ...old.posts],
            total: old.total + 1,
            skip: old.skip,
            limit: old.limit,
          }
        },
      )
      close()
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 생성에 실패했습니다")
    },
  })

  return { createPostMutation }
}
