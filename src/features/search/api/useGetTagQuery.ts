import { useSuspenseQuery } from "@tanstack/react-query"
import { getTags } from "../../../entities/search/api/tag"

export const useGetTagQuery = () => {
  const { data: tags } = useSuspenseQuery({ queryKey: ["tags"], queryFn: getTags })
  return { tags }
}
