export interface NewPost {
  title: string
  body: string
  userId: number
}

export interface CreatePostResponse {
  id: number
  title: string
  body: string
  userId: number
}
