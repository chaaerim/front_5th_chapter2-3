import { http } from "../../../shared/api"
import { PostResponse } from "../model/post"

export const getPost = async (limit: number, skip: number) => {
  return await http.get<PostResponse>(`/api/posts?limit=${limit}&skip=${skip}`)
}
