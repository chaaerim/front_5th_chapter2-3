import { Button } from "@shared/ui"
import { overlay } from "overlay-kit"
import { UpdateCommentForm } from "@features/comment/updateComment/ui/UpdateCommentForm"
import { Edit2 } from "lucide-react"

interface UpdateCommentButtonProps {
  commentId: number
  commentBody: string
}

export const UpdateCommentButton = ({ commentId, commentBody }: UpdateCommentButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <UpdateCommentForm isOpen={isOpen} close={close} commentId={commentId} commentBody={commentBody} />
        })
      }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
