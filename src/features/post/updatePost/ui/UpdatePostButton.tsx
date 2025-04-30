import { Button } from "../../../../shared/ui"
import { overlay } from "overlay-kit"
import { UpdatePostForm } from "./UpdatePostForm"
import { Edit2 } from "lucide-react"
import { Post } from "../../../../entities/post/model"

interface UpdatePostButtonProps {
  selectedPost: Post
}

export const UpdatePostButton = ({ selectedPost }: UpdatePostButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <UpdatePostForm isOpen={isOpen} close={close} selectedPost={selectedPost} />
        })
      }}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
