import { Post } from "@entities/post"
import { Dialog, DialogContent, DialogHeader, DialogTitle, HighlightText } from "@shared/ui"
import { CommentList } from "@features/comment/getComment/ui/CommentList"

interface PostDetailProps {
  isOpen: boolean
  close: () => void
  selectedPost: Post
  searchQuery: string
}

export const PostDetail = ({ isOpen, close, selectedPost, searchQuery }: PostDetailProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <HighlightText text={selectedPost?.title} highlight={searchQuery} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <HighlightText text={selectedPost?.body} highlight={searchQuery} />
          </p>
          <CommentList postId={selectedPost?.id} searchQuery={searchQuery} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
