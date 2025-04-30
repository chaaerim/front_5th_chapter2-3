import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateComment } from "../../../entities/comment/createComment/createComment.model"
import { createComment } from "../../../entities/comment/createComment/createComment.api"
import { CommentResponse } from "../../../entities/comment/model/commentResponse"
import { CommentList } from "../../../entities/comment/getComment/getComment.model"

export const useCreateCommentQuery = (close: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: createCommentMutation } = useMutation({
    mutationFn: async (comment: CreateComment) => await createComment(comment),
    onSuccess: (createdComment: CommentResponse) => {
      const key = ["comments", createdComment.postId] as const

      const newComment = {
        ...createdComment,
        likes: 0,
      }

      queryClient.setQueryData<CommentList>(key, (old) => {
        if (!old) {
          // 캐시 비어있으면 기본값 채워서 반환
          return {
            comments: [newComment],
            total: 1,
            skip: 0,
            limit: 10,
          }
        }
        // 기존 댓글 뒤에 새 댓글 추가, total+1, 나머지 메타데이터 유지
        return {
          comments: [...old.comments, newComment],
          total: old.total + 1,
          skip: old.skip,
          limit: old.limit,
        }
      })
      close()
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 생성에 실패했습니다")
    },
  })

  return { createCommentMutation }
}
