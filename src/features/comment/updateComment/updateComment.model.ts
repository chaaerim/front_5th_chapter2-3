import { useForm } from "react-hook-form"
import { useUpdateCommentQuery } from "./updateComment.api"

interface UpdateComment {
  body: string
}

interface UpdateCommentFormProps {
  commentId: number
  commentBody: string
  close: () => void
}

export const useUpdateCommentForm = ({ commentId, commentBody, close }: UpdateCommentFormProps) => {
  const { updateCommentMutation } = useUpdateCommentQuery(close)

  const { register, getValues } = useForm<UpdateComment>({
    mode: "onChange",
    defaultValues: {
      body: commentBody,
    },
  })

  const onSubmit = () => {
    const comment = { id: commentId, body: getValues("body") }
    updateCommentMutation(comment)
  }

  return { register, onSubmit }
}
