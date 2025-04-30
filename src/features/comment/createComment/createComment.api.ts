import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateComment } from "../../../entities/comment/createComment/createComment.model"
import { createComment } from "../../../entities/comment/createComment/createComment.api"

export const useCreateCommentQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: createCommentMutation } = useMutation({
    mutationFn: async (comment: CreateComment) => await createComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 생성에 실패했습니다")
    },
  })

  return { createCommentMutation }
}
