import { useSuspenseQuery } from "@tanstack/react-query"
import { getUsers } from "../../../entities/user"

export const useGetUsersQuery = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  })

  return { users, isLoading, error }
}
