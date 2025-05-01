import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui"
import { useFormContext } from "react-hook-form"
import { SearchBarForm } from "@features/search/model/useSearchBarForm"
import { useSearch } from "@features/search/model/useSearch"

export const OrderSelector = () => {
  const { register, setValue } = useFormContext<SearchBarForm>()
  const { sortOrder, setSortOrder } = useSearch()

  const handleSortOrderChange = (value: "asc" | "desc") => {
    setSortOrder(value)
    setValue("sortOrder", value)
  }
  return (
    <Select
      value={sortOrder}
      onValueChange={(value: "asc" | "desc") => handleSortOrderChange(value)}
      {...register("sortOrder")}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 순서" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asc">오름차순</SelectItem>
        <SelectItem value="desc">내림차순</SelectItem>
      </SelectContent>
    </Select>
  )
}
