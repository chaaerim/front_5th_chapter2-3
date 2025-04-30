import { http } from "../../../shared/api"
import { CommentResponse } from "../model/commentResponse"
interface UpdateComment {
  id: number
  body: string
}

export const updateComment = async ({ id, body }: UpdateComment): Promise<CommentResponse> => {
  return await http.put(`/api/comments/${id}`, { body })
}
