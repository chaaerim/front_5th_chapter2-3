export const QUERY_KEYS = {
  GET_USER: (userId: number) => ["user", userId],
  GET_USERS: () => ["users"],
} as const
