import { Search } from "lucide-react"
import { Input } from "../../../shared/ui"
import { TagSelector } from "./TagSelector"
import { OrderSelector } from "./OrderSelector"
import { SortSelector } from "./SortSelector"
import { useFormContext } from "react-hook-form"
import { SearchBarForm } from "../model/useSearchBarForm"
import { useSearch } from "../model/useSearch"

export const SearchBar = () => {
  const { register } = useFormContext<SearchBarForm>()
  const { setTitle } = useSearch()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTitle(e.currentTarget.value)
    }
  }

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="게시물 검색..."
            className="pl-8"
            {...register("title")}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>
      <TagSelector />
      <OrderSelector />
      <SortSelector />
    </div>
  )
}
