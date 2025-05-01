export const QUERY_KEYS = {
  GET_POST: (tag: string, search: string, limit: number, skip: number, sortBy: string, sortOrder: string) => [
    "posts",
    { tag, search, limit, skip, sortBy, sortOrder },
  ],
} as const
