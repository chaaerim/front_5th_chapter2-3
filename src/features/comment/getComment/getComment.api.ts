import { useSuspenseQuery } from "@tanstack/react-query"
import { getComments } from "../../../entities/comment/getComment/getComment.api"

export const useGetCommentsQuery = (postId: number) => {
  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  })

  return { comments }
}
