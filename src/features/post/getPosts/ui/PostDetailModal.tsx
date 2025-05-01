import { Post } from "@entities/post"
import { Dialog, HighlightText } from "@shared/ui"
import { CommentList } from "@features/comment/getComment/ui/CommentList"

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
        <CommentList postId={selectedPost?.id} searchQuery={searchQuery} />{" "}
      </div>
    </Dialog>
  )
}
