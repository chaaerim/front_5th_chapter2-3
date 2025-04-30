import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useDeletePostQuery } from "./deletePost.api"

interface DeletePostButtonProps {
  postId: number
}

export const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  const { deletePostMutation } = useDeletePostQuery()

  return (
    <Button variant="destructive" size="sm" onClick={() => deletePostMutation(postId)}>
      <Trash2 className="w-4 h-4" />
      삭제
    </Button>
  )
}
