import { useSuspenseQuery } from "@tanstack/react-query"
import { getUsers } from "../../../entities/user"
import { QUERY_KEYS } from "../config/queryKeys"

export const useGetUsersQuery = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: QUERY_KEYS.GET_USERS(),
    queryFn: () => getUsers(),
  })

  return { users, isLoading, error }
}
