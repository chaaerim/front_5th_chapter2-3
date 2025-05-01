import { MessageSquare } from "lucide-react"
import { Button } from "@shared/ui"
import { PostDetail } from "@features/post/getPosts/ui/PostDetail"
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
          return <PostDetail isOpen={isOpen} close={close} selectedPost={post} searchQuery={searchQuery} />
        })
      }}
    >
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}
