import { http } from "@shared/api"
import { DeletePostResponse } from "@entities/post/deletePost/deletePost.model"

export const deletePost = async (id: number): Promise<DeletePostResponse> => {
  return await http.delete(`/api/posts/${id}`)
}
