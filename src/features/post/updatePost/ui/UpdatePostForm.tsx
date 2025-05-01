import { Post } from "@entities/post"
import { Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea, Button } from "@shared/ui"
import { useUpdatePostForm } from "@features/post/updatePost/model/useUpdatePostForm"

interface UpdatePostFormProps {
  isOpen: boolean
  close: () => void
  selectedPost: Post
}

export const UpdatePostForm = ({ isOpen, close, selectedPost }: UpdatePostFormProps) => {
  const { register, onSubmit } = useUpdatePostForm({ selectedPost, close })

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" {...register("title")} />
          <Textarea rows={15} placeholder="내용" value={selectedPost?.body || ""} {...register("body")} />
          <Button
            onClick={() => {
              onSubmit()
              close()
            }}
          >
            게시물 업데이트
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
