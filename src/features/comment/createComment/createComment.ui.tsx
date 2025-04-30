import { Dialog, DialogContent, DialogHeader, DialogTitle, Textarea, Button } from "../../../shared/ui"
import { useCreateCommentForm } from "./createComment.model"

interface CreateCommentFormProps {
  isOpen: boolean
  close: () => void
  postId: number
  userId: number
}

export const CreateCommentForm = ({ isOpen, close, postId, userId }: CreateCommentFormProps) => {
  const { register, onSubmit } = useCreateCommentForm({ postId, userId })

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" {...register("body")} />
          <Button onClick={onSubmit}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
