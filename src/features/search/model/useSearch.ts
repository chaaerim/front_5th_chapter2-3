import { useSearchParams } from "react-router-dom"

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortBy = searchParams.get("sortBy") || ""
  const sortOrder = searchParams.get("sortOrder") || ""
  const tag = searchParams.get("tag") || ""
  const search = searchParams.get("search") || ""

  const setSortBy = (sortBy: string) => {
    setSearchParams((prev) => {
      prev.set("sortBy", sortBy)
      return prev
    })
  }

  const setSortOrder = (sortOrder: string) => {
    setSearchParams((prev) => {
      prev.set("sortOrder", sortOrder)
      return prev
    })
  }

  const setTag = (tag: string) => {
    setSearchParams((prev) => {
      prev.set("tag", tag)
      return prev
    })
  }

  const setSearch = (search: string) => {
    setSearchParams((prev) => {
      prev.set("search", search)
      return prev
    })
  }

  return { sortBy, sortOrder, tag, search, setSortBy, setSortOrder, setTag, setSearch }
}
