import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateComment } from "../../../entities/comment/createComment/createComment.model"
import { createComment } from "../../../entities/comment/createComment/createComment.api"

export const useCreateCommentQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: createCommentMutation } = useMutation({
    mutationFn: async (comment: CreateComment) => await createComment(comment),
    onSuccess: (createdComment: Comment) => {
      // ["comments"] 키의 캐시를 직접 꺼내와 새 댓글을 추가
      queryClient.setQueryData<Comment[]>(["comments"], (oldComments) => {
        if (!oldComments) {
          // 캐시가 비어있다면 새 배열로 초기화
          return [createdComment]
        }
        // 기존 배열 앞이나 뒤에 추가 (원하는 순서대로)
        return [...oldComments, createdComment]
      })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 생성에 실패했습니다")
    },
  })

  return { createCommentMutation }
}
