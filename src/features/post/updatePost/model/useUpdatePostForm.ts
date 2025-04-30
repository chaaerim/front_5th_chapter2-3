import { useForm } from "react-hook-form"
import { Post } from "../../../../entities/post/model"
import { useUpdatePostQuery } from "../updatePost.api"

interface UpdatedPost {
  title: string
  body: string
}

interface UpdatePostFormProps {
  selectedPost: Post
}

export const useUpdatePostForm = ({ selectedPost }: UpdatePostFormProps) => {
  const { updatePostMutation } = useUpdatePostQuery()

  const { register, getValues } = useForm<UpdatedPost>({
    mode: "onChange",
    defaultValues: {
      title: selectedPost.title,
      body: selectedPost.body,
    },
  })

  const onSubmit = () => {
    const updatedPost = {
      ...selectedPost,
      title: getValues("title"),
      body: getValues("body"),
    }

    updatePostMutation(updatedPost)
  }

  return { register, onSubmit }
}
