import { Button } from "../../../shared/ui"
import { Trash2 } from "lucide-react"
import { useDeleteCommentQuery } from "./deleteComment.api"

interface DeleteCommentButtonProps {
  commentId: number
}

export const DeleteCommentButton = ({ commentId }: DeleteCommentButtonProps) => {
  const { deleteCommentMutation } = useDeleteCommentQuery()

  return (
    <Button variant="ghost" size="sm" onClick={() => deleteCommentMutation(commentId)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
