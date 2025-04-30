export interface CommentResponse {
  id: number
  body: string
  postId: number
  user: User
}

export interface User {
  id: number
  username: string
  fullName: string
}
