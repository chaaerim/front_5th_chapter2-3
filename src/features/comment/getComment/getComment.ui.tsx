import { CreateCommentButton } from "../createComment/ui"
import { useGetCommentsQuery } from "./getComment.api"
import { Button } from "../../../shared/ui"
import { ThumbsUp } from "lucide-react"
import { UpdateCommentButton } from "../updateComment/ui/UpdateCommentButton"
import { DeleteCommentButton } from "../deleteComment/deleteComment.ui"
interface CommentListProps {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const { comments } = useGetCommentsQuery(postId)
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

  console.log(comments.comments[0].body)

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <CreateCommentButton postId={postId} userId={1} />
      </div>
      <div className="space-y-1">
        {comments.comments.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, "")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-3 h-3" />
                <span className="ml-1 text-xs">{comment.likes}</span>
              </Button>
              <UpdateCommentButton commentId={comment.id} commentBody={comment.body} />
              <DeleteCommentButton commentId={comment.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
