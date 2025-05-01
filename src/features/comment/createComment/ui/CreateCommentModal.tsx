import { Dialog, Textarea, Button } from "@shared/ui"
import { useCreateCommentForm } from "@features/comment/createComment/model/useCreateCommentForm"

interface CreateCommentFormProps {
  isOpen: boolean
  close: () => void
  postId: number
  userId: number
}

export const CreateCommentModal = ({ isOpen, close, postId, userId }: CreateCommentFormProps) => {
  const { register, onSubmit } = useCreateCommentForm({ postId, userId, close })

  return (
    <Dialog title="새 댓글 추가" open={isOpen} onOpenChange={close}>
      <div className="space-y-4">
        <Textarea placeholder="댓글 내용" {...register("body")} />
        <Button onClick={onSubmit}>댓글 추가</Button>
      </div>
    </Dialog>
  )
}
