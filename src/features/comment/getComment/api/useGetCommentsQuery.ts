import { useSuspenseQuery } from "@tanstack/react-query"
import { getComments } from "@entities/comment"
import { QUERY_KEYS } from "@features/comment/config/queryKeys"

export const useGetCommentsQuery = (postId: number) => {
  const { data: comments } = useSuspenseQuery({
    queryKey: QUERY_KEYS.GET_COMMENT(postId),
    queryFn: () => getComments(postId),
  })

  return { comments }
}
