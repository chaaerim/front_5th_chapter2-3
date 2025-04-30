import { useForm } from "react-hook-form"
import { useCreateCommentQuery } from "./createComment.api"

interface CreateCommentFormProps {
  postId: number
  userId: number
}

interface CreateComment {
  body: string
}

export const useCreateCommentForm = ({ postId, userId }: CreateCommentFormProps) => {
  const { createCommentMutation } = useCreateCommentQuery()
  const { register, getValues } = useForm<CreateComment>({
    mode: "onChange",
    defaultValues: {
      body: "",
    },
  })

  const onSubmit = () => {
    const comment = { body: getValues("body"), postId, userId }
    createCommentMutation(comment)
  }

  return { register, onSubmit }
}
