import { CreateCommentButton } from "../createComment/ui"
import { useGetCommentsQuery } from "./getComment.api"
import { UpdateCommentButton } from "../updateComment/ui/UpdateCommentButton"
import { DeleteCommentButton } from "../deleteComment/deleteComment.ui"
import { LikeCommentButton } from "../likeComment/likeComment.ui"
import { HighlightText } from "../../../shared/ui"

interface CommentListProps {
  postId: number
  searchQuery: string
}

export const CommentList = ({ postId, searchQuery }: CommentListProps) => {
  const { comments } = useGetCommentsQuery(postId)

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
              <span className="truncate">
                <HighlightText text={comment.body} highlight={searchQuery} />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <LikeCommentButton commentId={comment.id} likes={comment.likes} />
              <UpdateCommentButton commentId={comment.id} commentBody={comment.body} />
              <DeleteCommentButton commentId={comment.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
