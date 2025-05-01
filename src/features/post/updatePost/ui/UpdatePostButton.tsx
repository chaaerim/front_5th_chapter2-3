import { Button } from "@shared/ui"
import { overlay } from "overlay-kit"
import { UpdatePostModal } from "@features/post/updatePost/ui/UpdatePostModal"
import { Edit2 } from "lucide-react"
import { Post } from "@entities/post"

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
          return <UpdatePostModal isOpen={isOpen} close={close} selectedPost={selectedPost} />
        })
      }}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
