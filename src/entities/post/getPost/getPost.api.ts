import { http } from "../../../shared/api"
import { PostList } from "../model/post"

export const getPost = async (limit: number, skip: number) => {
  return await http.get<PostList>(`/api/posts?limit=${limit}&skip=${skip}`)
}
