import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likeComment } from "../../../entities/comment/likeComment/likeComment.api"
import { LikeCommentResponse } from "../../../entities/comment/likeComment/likeComment.model"
import { CommentList } from "../../../entities/comment/getComment/getComment.model"

export const useLikeCommentQuery = () => {
  const queryClient = useQueryClient()
  const { mutate: likeCommentMutation } = useMutation({
    mutationFn: async ({ commentId, likes }: { commentId: number; likes: number }) =>
      await likeComment(commentId, likes + 1),
    onSuccess: (liked: LikeCommentResponse) => {
      const key = ["comments", liked.postId] as const

      queryClient.setQueryData<CommentList>(key, (old) => {
        if (!old) {
          return {
            comments: [],
            total: 1,
            skip: 0,
            limit: 10,
          }
        }
        return {
          comments: old.comments.map((c) => (c.id === liked.id ? { ...c, likes: c.likes + 1 } : c)),
          total: old.total,
          skip: old.skip,
          limit: old.limit,
        }
      })
    },
    onError: (error) => {
      console.error(error)
      throw new Error("댓글 좋아요에 실패했습니다")
    },
  })

  return { likeCommentMutation }
}
