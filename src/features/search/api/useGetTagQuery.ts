import { useSuspenseQuery } from "@tanstack/react-query"
import { getTags } from "../../../entities/search/api/tag"

export const useGetTagQuery = () => {
  const { data: tags } = useSuspenseQuery({ queryKey: QUERY_KEYS.GET_TAG(), queryFn: getTags })
  return { tags }
}
