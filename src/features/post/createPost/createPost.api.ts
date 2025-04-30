import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost, NewPost } from "../../../entities/post/createPost"

export const useCreatePostQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: createPostMutation } = useMutation({
    mutationFn: async (newPost: NewPost) => await createPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 생성에 실패했습니다")
    },
  })

  return { createPostMutation }
}
