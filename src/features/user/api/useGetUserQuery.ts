import { useSuspenseQuery } from "@tanstack/react-query"
import { getUser } from "@entities/user"
import { QUERY_KEYS } from "@features/user/config/queryKeys"

interface UseGetUserQueryProps {
  userId: number
}

export const useGetUserQuery = ({ userId }: UseGetUserQueryProps) => {
  const {
    data: user,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: QUERY_KEYS.GET_USER(userId),
    queryFn: () => getUser(userId),
  })

  return { user, isLoading, error }
}
