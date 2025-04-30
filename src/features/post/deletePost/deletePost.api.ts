import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "../../../entities/post/deletePost/deletePost.api"

export const useDeletePostQuery = () => {
  const queryClient = useQueryClient()

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: async (id: number) => await deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
