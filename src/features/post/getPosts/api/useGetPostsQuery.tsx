import { useSuspenseQuery } from "@tanstack/react-query"
import { getPosts, getPostsByTag } from "@entities/post"
import { useSearch, usePagination } from "@features/search"
import { QUERY_KEYS } from "@features/post/config/queryKeys"

export const useGetPostsQuery = () => {
  const { sortBy, sortOrder, tag, title } = useSearch()
  const { limit, skip } = usePagination()

  const { data: posts } = useSuspenseQuery({
    queryKey: QUERY_KEYS.GET_POST(tag, title, limit, skip, sortBy, sortOrder),
    queryFn: async () => {
      if (tag && tag !== "all") {
        return await getPostsByTag(tag)
      }
      return await getPosts(limit, skip)
    },
  })

  return { posts }
}
