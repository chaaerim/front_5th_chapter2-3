import { http } from "@shared/api"
import { CreateCommentRequest } from "./createComment.model"
import { CommentResponse } from "../../comment/model/commentResponse"

export const createComment = async (comment: CreateCommentRequest): Promise<CommentResponse> => {
  return await http.post("/api/comments/add", { ...comment })
}
