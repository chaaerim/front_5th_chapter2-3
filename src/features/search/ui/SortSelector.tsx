import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { useFormContext } from "react-hook-form"
import { SearchBarForm } from "../model/useSearchBarForm"
import { useSearch } from "../model/useSearch"

interface SortBy {
  value: "none" | "id" | "title" | "reactions"
}

export const SortSelector = () => {
  const { register, setValue } = useFormContext<SearchBarForm>()
  const { sortBy, setSortBy } = useSearch()

  const handleSortByChange = ({ value }: SortBy) => {
    setSortBy(value)
    setValue("sortBy", value)
  }
  return (
    <Select
      value={sortBy}
      onValueChange={(value: "none" | "id" | "title" | "reactions") => handleSortByChange({ value })}
      {...register("sortBy")}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        <SelectItem value="id">ID</SelectItem>
        <SelectItem value="title">제목</SelectItem>
        <SelectItem value="reactions">반응</SelectItem>
      </SelectContent>
    </Select>
  )
}
