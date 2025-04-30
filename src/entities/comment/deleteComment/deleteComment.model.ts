import { User } from "../model/commentResponse"

export interface DeleteCommentResponse {
  id: number
  body: string
  postId: number
  likes: number
  user: User
  isDeleted: boolean
  deletedOn: string
}
