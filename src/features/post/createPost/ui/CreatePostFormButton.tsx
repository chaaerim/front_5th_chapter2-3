import { Button } from "@shared/ui"
import { overlay } from "overlay-kit"
import { CreatePostModal } from "@features/post/createPost/ui/CreatePostModal"
import { Plus } from "lucide-react"

export const CreatePostFormButton = () => {
  return (
    <Button
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <CreatePostModal isOpen={isOpen} close={close} />
        })
      }}
    >
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
