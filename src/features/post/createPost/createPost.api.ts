import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost, CreatePostResponse, NewPost } from "../../../entities/post/createPost"
import { PostList } from "../../../entities/post/model"

export const useCreatePostQuery = () => {
  const queryClient = useQueryClient()

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
      queryClient.setQueryData<PostList>(["posts"], (old) => {
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
      })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 생성에 실패했습니다")
    },
  })

  return { createPostMutation }
}
