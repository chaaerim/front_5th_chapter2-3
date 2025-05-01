import { useFormContext } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { useGetTagQuery } from "../api/useGetTagQuery"
import { SearchBarForm } from "../model/useSearchBarForm"
import { useSearch } from "../model/useSearch"

export const TagSelector = () => {
  const { tags } = useGetTagQuery()
  const { register, setValue } = useFormContext<SearchBarForm>()
  const { tag, setTag } = useSearch()

  const handleTagChange = (value: string) => {
    setTag(value)
    setValue("tag", value)
  }

  return (
    <Select
      value={tag}
      onValueChange={(value) => {
        handleTagChange(value)
      }}
      {...register("tag")}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
