import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "../../../entities/post/updatePost"
import { Post } from "../../../entities/post/model"

export const useUpdatePostQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: updatePostMutation } = useMutation({
    mutationFn: async (post: Post) => await updatePost(post.id, post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 수정에 실패했습니다")
    },
  })

  return { updatePostMutation }
}
