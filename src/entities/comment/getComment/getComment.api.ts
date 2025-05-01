import { http } from "@shared/api"
import { CommentListResponse } from "./getComment.model"

export const getComments = async (postId: number): Promise<CommentListResponse> => {
  return await http.get(`/api/comments/post/${postId}`)
}
