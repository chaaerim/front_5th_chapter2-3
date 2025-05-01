import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost, DeletePostResponse, PostListResponse } from "@entities/post"
import { useSearch, usePagination } from "@features/search"
import { QUERY_KEYS } from "@features/post/config/queryKeys"

export const useDeletePostQuery = () => {
  const queryClient = useQueryClient()

  const { sortBy, sortOrder, tag, search } = useSearch()
  const { limit, skip } = usePagination()

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: async (postId: number) => await deletePost(postId),
    onSuccess: (deleted: DeletePostResponse) => {
      // ["posts"] 캐시를 꺼내서, 삭제된 ID를 제외한 새 배열과 total-1 로 업데이트
      queryClient.setQueryData<PostListResponse>(
        QUERY_KEYS.GET_POST(tag, search, limit, skip, sortBy, sortOrder),
        (old) => {
          if (!old) {
            return {
              posts: [],
              total: 0,
              skip: 0,
              limit: 10,
            }
          }

          return {
            posts: old.posts.filter((p) => p.id !== deleted.id),
            total: old.total - 1,
            skip: old.skip,
            limit: old.limit,
          }
        },
      )
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 삭제에 실패했습니다")
    },
  })

  return { deletePostMutation }
}
