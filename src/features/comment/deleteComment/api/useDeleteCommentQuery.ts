import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteCommentResponse, CommentListResponse, deleteComment } from "@entities/comment"
import { QUERY_KEYS } from "@features/comment/config/queryKeys"

export const useDeleteCommentQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: async (commentId: number) => await deleteComment(commentId),
    onSuccess: (deleted: DeleteCommentResponse) => {
      // postId를 키에 포함해서 해당 댓글 리스트만 갱신
      const key = QUERY_KEYS.GET_COMMENT(deleted.postId)

      queryClient.setQueryData<CommentListResponse>(key, (old) => {
        if (!old) {
          // 캐시가 비어 있으면 기본값 반환
          return {
            comments: [],
            total: 0,
            skip: 0,
            limit: 10,
          }
        }
        // 삭제된 댓글을 제외하고 total–1, pagination 정보 유지
        return {
          comments: old.comments.filter((c) => c.id !== deleted.id),
          total: old.total - 1,
          skip: old.skip,
          limit: old.limit,
        }
      })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 삭제에 실패했습니다")
    },
  })

  return { deleteCommentMutation }
}
