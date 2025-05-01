import { useSuspenseQuery } from "@tanstack/react-query"
import { getUser } from "../../../entities/user"

interface UseGetUserQueryProps {
  userId: number
}

export const useGetUserQuery = ({ userId }: UseGetUserQueryProps) => {
  const {
    data: user,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
  })

  return { user, isLoading, error }
}
