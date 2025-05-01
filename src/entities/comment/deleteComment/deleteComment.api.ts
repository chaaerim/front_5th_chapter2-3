import { http } from "@shared/api"
import { DeleteCommentResponse } from "./deleteComment.model"

export const deleteComment = async (id: number): Promise<DeleteCommentResponse> => {
  return await http.delete(`/comments/${id}`)
}
