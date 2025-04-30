import { http } from "../../../shared/api"
import { Post } from "../model/post"

export const updatePost = async (id: number, post: Post): Promise<Post> => {
  return await http.put(`/api/posts/${id}`, post)
}
