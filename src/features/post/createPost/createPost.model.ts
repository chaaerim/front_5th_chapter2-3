import { useForm } from "react-hook-form"
import { NewPost } from "../../../entities/post/createPost"
import { useCreatePostQuery } from "./createPost.api"

export const useCreatePostForm = () => {
  const { createPostMutation } = useCreatePostQuery()
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
