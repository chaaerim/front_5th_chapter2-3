import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment } from "../../../entities/comment/updateComment/updateComment.api"

interface UpdateComment {
  id: number
  body: string
}

export const useUpdateCommentQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: async (comment: UpdateComment) => await updateComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 수정에 실패했습니다")
    },
  })

  return { updateCommentMutation }
}
