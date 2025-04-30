import { http } from "../../../shared/api"
import { CreateComment } from "./createComment.model"
import { CommentResponse } from "../../comment/model/commentResponse"

export const createComment = async (comment: CreateComment): Promise<CommentResponse> => {
  return await http.post("/api/comments/add", { ...comment })
}
