import { User } from "../model/commentResponse"

export interface LikeCommentResponse {
  id: number
  body: string
  postId: number
  likes: number
  user: User
}
