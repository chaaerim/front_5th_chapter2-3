import { Post } from "../../../../entities/post/model"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../shared/ui"
import { CommentList } from "../../../comment/getComment/getComment.ui"

interface PostDetailProps {
  isOpen: boolean
  close: () => void
  selectedPost: Post
}

export const PostDetail = ({ isOpen, close, selectedPost }: PostDetailProps) => {
  const highlightText = (text: string, highlight: string) => {
    if (!text) return null
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${highlight})`, "gi")
    const parts = text.split(regex)
    return (
      <span>
        {parts.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
      </span>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          <CommentList postId={selectedPost?.id} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
