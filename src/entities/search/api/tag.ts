import { http } from "../../../shared/api"
import { Tag } from "../model/tag"

export const getTags = async (): Promise<Tag[]> => {
  return await http.get("/api/posts/tags")
}
