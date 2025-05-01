export const QUERY_KEYS = {
  GET_COMMENT: (postId: number) => ["comments", postId],
} as const
