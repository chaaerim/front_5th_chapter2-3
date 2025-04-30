import { useForm } from "react-hook-form"
import { useUpdateCommentQuery } from "./updateComment.api"

interface UpdateComment {
  body: string
}

interface UpdateCommentFormProps {
  commentId: number
  commentBody: string
}

export const useUpdateCommentForm = ({ commentId, commentBody }: UpdateCommentFormProps) => {
  const { updateCommentMutation } = useUpdateCommentQuery()

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
