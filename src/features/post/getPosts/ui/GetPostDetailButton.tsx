import { MessageSquare } from "lucide-react"
import { Button } from "@shared/ui"
import { PostDetailModal } from "@features/post/getPosts/ui/PostDetailModal"
import { overlay } from "overlay-kit"
import { Post } from "@entities/post"

interface GetPostDetailButtonProps {
  post: Post
  searchQuery: string
}

export const GetPostDetailButton = ({ post, searchQuery }: GetPostDetailButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <PostDetailModal isOpen={isOpen} close={close} selectedPost={post} searchQuery={searchQuery} />
        })
      }}
    >
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}
