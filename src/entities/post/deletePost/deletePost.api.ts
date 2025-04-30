import { http } from "../../../shared/api"

export const deletePost = async (id: number) => {
  return await http.delete(`/api/posts/${id}`)
}
