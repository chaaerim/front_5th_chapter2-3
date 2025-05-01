import { useForm } from "react-hook-form"
import { NewPost } from "@entities/post"
import { useCreatePostQuery } from "@features/post/createPost/api/useCreatePostQuery"

interface CreatePostFormProps {
  close: () => void
}

export const useCreatePostForm = ({ close }: CreatePostFormProps) => {
  const { createPostMutation } = useCreatePostQuery(close)
  const { register, getValues } = useForm<NewPost>({
    mode: "onChange",
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  })

  const onSubmit = () => {
    createPostMutation(getValues())
  }

  return { register, onSubmit }
}
