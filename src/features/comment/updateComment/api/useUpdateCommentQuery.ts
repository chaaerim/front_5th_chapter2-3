import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment, CommentResponse, CommentListResponse } from "@entities/comment"
import { QUERY_KEYS } from "@features/comment/config/queryKeys"

interface UpdateComment {
  id: number
  body: string
}

export const useUpdateCommentQuery = (close: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: async (comment: UpdateComment) => await updateComment(comment),
    onSuccess: (updated: CommentResponse) => {
      const key = QUERY_KEYS.GET_COMMENT(updated.postId)

      const updatedComment = { ...updated, likes: 0 }

      queryClient.setQueryData<CommentListResponse>(key, (old) => {
        if (!old) {
          // 캐시가 비어있으면 기본값을 채워서 반환
          return {
            comments: [updatedComment],
            total: 1,
            skip: 0,
            limit: 10,
          }
        }
        // 기존 배열에서 해당 댓글만 교체, 나머지 메타데이터 유지
        return {
          comments: old.comments.map((c) => (c.id === updated.id ? updatedComment : c)),
          total: old.total,
          skip: old.skip,
          limit: old.limit,
        }
      })

      close()
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 수정에 실패했습니다")
    },
  })

  return { updateCommentMutation }
}
