import { http } from "../../../shared/api"
import { PostList } from "../model/post"

export const getPost = async (limit: number, skip: number) => {
  const searchParams = new URLSearchParams()
  searchParams.set("limit", limit.toString())
  searchParams.set("skip", skip.toString())

  return await http.get<PostList>(`/api/posts?${searchParams.toString()}`)
}

export const getPostByTag = async (tag: string) => {
  return await http.get<PostList>(`/api/posts/tag/${tag}`)
}
