import { http } from "../../../shared/api"
import { CreatePostResponse, NewPost } from "./createPost.model"

export const createPost = async (post: NewPost): Promise<CreatePostResponse> => {
  return await http.post("/api/posts/add", {
    ...post,
  })
}
