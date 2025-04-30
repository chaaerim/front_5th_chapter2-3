import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "../../../entities/post/deletePost/deletePost.api"

export const useDeletePostQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: async (postId: number) => await deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 삭제에 실패했습니다")
    },
  })

  return { deletePostMutation }
}
