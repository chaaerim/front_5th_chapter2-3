import { Dialog, Input, Textarea, Button } from "../../../../shared/ui"
import { useCreatePostForm } from "@features/post/createPost/model/useCreatePostForm"

interface CreatePostFormProps {
  isOpen: boolean
  close: () => void
}

export const CreatePostModal = ({ isOpen, close }: CreatePostFormProps) => {
  // 게시물 추가
  const { register, onSubmit } = useCreatePostForm({ close })

  return (
    <Dialog title="새 게시물 추가" open={isOpen} onOpenChange={close}>
      <div className="space-y-4">
        <Input placeholder="제목" {...register("title")} />
        <Textarea rows={30} placeholder="내용" {...register("body")} />
        <Input type="number" placeholder="사용자 ID" {...register("userId")} />
        <Button onClick={onSubmit}>게시물 추가</Button>
      </div>
    </Dialog>
  )
}
