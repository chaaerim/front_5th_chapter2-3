import { http } from "@shared/api"
import { CreatePostResponse, NewPost } from "@entities/post/createPost/createPost.model"

export const createPost = async (post: NewPost): Promise<CreatePostResponse> => {
  return await http.post("/posts/add", {
    ...post,
  })
}
