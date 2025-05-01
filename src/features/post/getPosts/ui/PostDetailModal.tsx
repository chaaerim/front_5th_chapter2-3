import { Post } from "@entities/post"
import { Dialog, HighlightText } from "@shared/ui"
import { CommentList } from "@features/comment/getComment/ui/CommentList"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

interface PostDetailProps {
  isOpen: boolean
  close: () => void
  selectedPost: Post
  searchQuery: string
}

export const PostDetailModal = ({ isOpen, close, selectedPost, searchQuery }: PostDetailProps) => {
  return (
    <Dialog
      title={<HighlightText text={selectedPost?.title} highlight={searchQuery} />}
      open={isOpen}
      onOpenChange={close}
    >
      <div className="space-y-4">
        <p>
          <HighlightText text={selectedPost?.body} highlight={searchQuery} />
        </p>
        <Suspense
          fallback={
            <div className="flex justify-center p-4">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          }
        >
          <CommentList postId={selectedPost?.id} searchQuery={searchQuery} />
        </Suspense>
      </div>
    </Dialog>
  )
}
