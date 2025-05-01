import { Button } from "../../../../shared/ui"
import { overlay } from "overlay-kit"
import { CreatePostForm } from "./CreatePostForm"
import { Plus } from "lucide-react"

export const CreatePostFormButton = () => {
  return (
    <Button
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <CreatePostForm isOpen={isOpen} close={close} />
        })
      }}
    >
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
