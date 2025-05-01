import { useSearchParams } from "react-router-dom"

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const skip = parseInt(searchParams.get("skip") || "0")
  const limit = parseInt(searchParams.get("limit") || "10")

  const setSkip = (skip: number) => {
    setSearchParams((prev) => {
      prev.set("skip", skip.toString())
      return prev
    })
  }

  const setLimit = (limit: number) => {
    setSearchParams((prev) => {
      prev.set("limit", limit.toString())
      return prev
    })
  }

  return { skip, limit, setSkip, setLimit }
}
