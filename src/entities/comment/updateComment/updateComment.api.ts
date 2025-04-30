import { http } from "../../../shared/api"

interface UpdateComment {
  id: number
  body: string
}

export const updateComment = async ({ id, body }: UpdateComment) => {
  return await http.put(`/api/comments/${id}`, { body })
}
