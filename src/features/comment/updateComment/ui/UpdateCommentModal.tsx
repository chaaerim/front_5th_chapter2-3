import { Button, Textarea, Dialog, DialogContent, DialogHeader, DialogTitle } from "@shared/ui"
import { useUpdateCommentForm } from "@features/comment/updateComment/model/useUpdateCommentForm"

interface UpdateCommentFormProps {
  isOpen: boolean
  close: () => void
  commentId: number
  commentBody: string
}

export const UpdateCommentModal = ({ isOpen, close, commentId, commentBody }: UpdateCommentFormProps) => {
  const { register, onSubmit } = useUpdateCommentForm({ commentId, commentBody, close })

  return (
    <Dialog title="댓글 수정" open={isOpen} onOpenChange={close}>
      <div className="space-y-4">
        <Textarea placeholder="댓글 내용" {...register("body")} />
        <Button onClick={onSubmit}>댓글 업데이트</Button>
      </div>
    </Dialog>
  )
}
