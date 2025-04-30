import { http } from "../../../shared/api"
import { NewPost } from "./createPost.model"

export const createPost = async (post: NewPost) => {
  return await http.post("/api/posts/add", {
    ...post,
  })
}
