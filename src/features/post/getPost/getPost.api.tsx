import { useSuspenseQuery } from "@tanstack/react-query"
import { getPost, getPostByTag } from "../../../entities/post/getPost"
import { useSearch } from "../../search/model/useSearch"
import { usePagination } from "./model/usePagination"

export const useGetPostQuery = () => {
  const { sortBy, sortOrder, tag, title } = useSearch()
  const { limit, skip } = usePagination()

  const { data: posts } = useSuspenseQuery({
    queryKey: ["posts", { tag, title, limit, skip, sortBy, sortOrder }],
    queryFn: async () => {
      if (tag && tag !== "all") {
        return await getPostByTag(tag)
      }
      return await getPost(limit, skip)
    },
  })

  return { posts }
}
