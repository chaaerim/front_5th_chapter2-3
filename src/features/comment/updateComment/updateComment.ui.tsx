import { Button, Textarea } from "../../../shared/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import { useUpdateCommentForm } from "./updateComment.model"

interface UpdateCommentFormProps {
  isOpen: boolean
  close: () => void
  commentId: number
  commentBody: string
}

export const UpdateCommentForm = ({ isOpen, close, commentId, commentBody }: UpdateCommentFormProps) => {
  const { register, onSubmit } = useUpdateCommentForm({ commentId, commentBody })

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" {...register("body")} />
          <Button onClick={onSubmit}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
