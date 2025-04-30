import { http } from "../../../shared/api"
import { LikeCommentResponse } from "./likeComment.model"

export const likeComment = async (commentId: number, likes: number): Promise<LikeCommentResponse> => {
  return await http.patch(`/api/comments/${commentId}`, { likes })
}
