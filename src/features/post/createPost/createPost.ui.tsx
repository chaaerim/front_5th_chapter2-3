import { Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea, Button } from "../../../shared/ui"
import { useCreatePostForm } from "./createPost.model"

export const CreatePostForm = () => {
  // 게시물 추가
  const { register, onSubmit } = useCreatePostForm()

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" {...register("title")} />
          <Textarea rows={30} placeholder="내용" {...register("body")} />
          <Input type="number" placeholder="사용자 ID" {...register("userId")} />
          <Button onClick={onSubmit}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
