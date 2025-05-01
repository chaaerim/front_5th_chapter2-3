import { useForm } from "react-hook-form"

export interface SearchBarForm {
  title: string
  tag: string
  sortBy: "none" | "id" | "title" | "reactions"
  sortOrder: "asc" | "desc"
}

export const useSearchBarForm = () => {
  return useForm<SearchBarForm>({
    mode: "onChange",
    defaultValues: {
      title: "",
      tag: "",
      sortBy: "none",
      sortOrder: "asc",
    },
  })
}
