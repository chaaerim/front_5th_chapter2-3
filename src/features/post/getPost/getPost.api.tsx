import { useSuspenseQuery } from "@tanstack/react-query"
import { getPost } from "../../../entities/post/getPost"

export const useGetPostQuery = (limit: number, skip: number) => {
  const { data: posts } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(limit, skip),
  })

  return { posts }
}
