export const QUERY_KEYS = {
  GET_POST: (tag: string, title: string, limit: number, skip: number, sortBy: string, sortOrder: string) => [
    "posts",
    { tag, title, limit, skip, sortBy, sortOrder },
  ],
} as const
