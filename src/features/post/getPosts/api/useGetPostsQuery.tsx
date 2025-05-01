import { useSuspenseQuery } from "@tanstack/react-query"
import { getPosts, getPostsByTag, getPostsBySearch } from "@entities/post"
import { useSearch, usePagination } from "@features/search"
import { QUERY_KEYS } from "@features/post/config/queryKeys"

export const useGetPostsQuery = () => {
  const { sortBy, sortOrder, tag, search } = useSearch()
  const { limit, skip } = usePagination()

  const { data: posts } = useSuspenseQuery({
    queryKey: QUERY_KEYS.GET_POST(tag, search, limit, skip, sortBy, sortOrder),
    queryFn: async () => {
      if (tag && tag !== "all") {
        return await getPostsByTag(tag)
      } else if (search) {
        return await getPostsBySearch(search)
      }
      return await getPosts(limit, skip, search)
    },
  })

  return { posts }
}
