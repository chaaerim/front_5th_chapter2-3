import { http } from "../../../shared/api"
import { CommentResponse } from "../model/commentResponse"
import { UpdateCommentRequest } from "./updateComment.model"
export const updateComment = async ({ id, body }: UpdateCommentRequest): Promise<CommentResponse> => {
  return await http.put(`/api/comments/${id}`, { body })
}
