import { http } from "@shared/api"
import { Post } from "@entities/post/model/post"

export const updatePost = async (id: number, post: Post): Promise<Post> => {
  return await http.put(`/api/posts/${id}`, post)
}
