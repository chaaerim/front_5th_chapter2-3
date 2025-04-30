import { overlay } from "overlay-kit"
import { Button } from "../../../../shared/ui"
import { CreateCommentForm } from "./CreateCommentForm"
import { Plus } from "lucide-react"

interface CreateCommentButtonProps {
  postId: number
  userId: number
}

export const CreateCommentButton = ({ postId, userId }: CreateCommentButtonProps) => {
  return (
    <Button
      size="sm"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <CreateCommentForm isOpen={isOpen} close={close} postId={postId} userId={userId} />
        })
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
