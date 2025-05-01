import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "../../../../entities/post/updatePost"
import { Post, PostListResponse } from "../../../../entities/post/model"
import { useSearch } from "../../../search/model/useSearch"
import { usePagination } from "../../../search/model/usePagination"
import { QUERY_KEYS } from "../../config/queryKeys"

interface UpdatePostFormProps {
  close: () => void
}

export const useUpdatePostQuery = ({ close }: UpdatePostFormProps) => {
  const queryClient = useQueryClient()

  const { sortBy, sortOrder, tag, search } = useSearch()
  const { limit, skip } = usePagination()

  const { mutate: updatePostMutation } = useMutation({
    mutationFn: async (post: Post) => await updatePost(post.id, post),
    onSuccess: (updatedPost: Post) => {
      // ["posts"] 캐시를 꺼내서, 해당 id에 맞는 항목만 교체
      queryClient.setQueryData<PostListResponse>(
        QUERY_KEYS.GET_POST(tag, search, limit, skip, sortBy, sortOrder),
        (old) => {
          if (!old) {
            return {
              posts: [updatedPost],
              total: 1,
              skip: 0,
              limit: 10,
            }
          }

          return {
            posts: old.posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)),
            total: old.total,
            skip: old.skip,
            limit: old.limit,
          }
        },
      )

      close()
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 수정에 실패했습니다")
    },
  })

  return { updatePostMutation }
}
