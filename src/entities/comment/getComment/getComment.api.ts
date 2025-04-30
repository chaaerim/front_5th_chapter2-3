import { http } from "../../../shared/api"
import { CommentList } from "./getComment.model"

export const getComments = async (postId: number): Promise<CommentList> => {
  return await http.get(`/api/comments/post/${postId}`)
}
