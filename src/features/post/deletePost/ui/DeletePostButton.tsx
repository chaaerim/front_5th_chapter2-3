import { Trash2 } from "lucide-react"
import { Button } from "@shared/ui"
import { useDeletePostQuery } from "@features/post/deletePost/api/useDeletePostQuery"

interface DeletePostButtonProps {
  postId: number
}

export const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  const { deletePostMutation } = useDeletePostQuery()

  return (
    <Button variant="ghost" size="sm" onClick={() => deletePostMutation(postId)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}
