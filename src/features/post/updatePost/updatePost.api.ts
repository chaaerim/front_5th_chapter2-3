import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "../../../entities/post/updatePost"
import { Post, PostList } from "../../../entities/post/model"

interface UpdatePostFormProps {
  close: () => void
}

export const useUpdatePostQuery = ({ close }: UpdatePostFormProps) => {
  const queryClient = useQueryClient()

  const { mutate: updatePostMutation } = useMutation({
    mutationFn: async (post: Post) => await updatePost(post.id, post),
    onSuccess: (updatedPost: Post) => {
      // ["posts"] 캐시를 꺼내서, 해당 id에 맞는 항목만 교체
      queryClient.setQueryData<PostList>(["posts"], (old) => {
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
      })

      close()
    },
    onError: (error) => {
      console.error(error)
      throw new Error("게시물 수정에 실패했습니다")
    },
  })

  return { updatePostMutation }
}
