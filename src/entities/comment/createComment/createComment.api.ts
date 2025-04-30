import { http } from "../../../shared/api"
import { CreateComment } from "./createComment.model"

export const createComment = async (comment: CreateComment) => {
  return await http.post("/api/comments/add", { ...comment })
}
