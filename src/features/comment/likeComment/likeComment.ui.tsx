import { Button } from "../../../shared/ui"
import { ThumbsUp } from "lucide-react"
import { useLikeCommentQuery } from "./likeComment.api"

interface LikeCommentButtonProps {
  commentId: number
  likes: number
}

export const LikeCommentButton = ({ commentId, likes }: LikeCommentButtonProps) => {
  const { likeCommentMutation } = useLikeCommentQuery()

  return (
    <Button variant="ghost" size="sm" onClick={() => likeCommentMutation({ commentId, likes })}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{likes}</span>
    </Button>
  )
}
