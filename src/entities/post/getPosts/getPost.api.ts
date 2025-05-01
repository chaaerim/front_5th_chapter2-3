import { http } from "@shared/api"
import { PostListResponse } from "@entities/post/model/post"

export const getPosts = async (limit: number, skip: number, search: string) => {
  const searchParams = new URLSearchParams()

  searchParams.set("limit", limit.toString())
  searchParams.set("skip", skip.toString())
  return await http.get<PostListResponse>(`/api/posts?${searchParams.toString()}`)
}

export const getPostsByTag = async (tag: string) => {
  return await http.get<PostListResponse>(`/api/posts/tag/${tag}`)
}

export const getPostsBySearch = async (search: string) => {
  return await http.get<PostListResponse>(`/api/posts/search?q=${search}`)
}
