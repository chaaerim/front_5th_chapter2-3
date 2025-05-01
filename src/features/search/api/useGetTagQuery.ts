import { useSuspenseQuery } from "@tanstack/react-query"
import { getTags } from "@entities/search"
import { QUERY_KEYS } from "@features/search/config/queryKeys"

export const useGetTagQuery = () => {
  const { data: tags } = useSuspenseQuery({ queryKey: QUERY_KEYS.GET_TAG(), queryFn: getTags })
  return { tags }
}
