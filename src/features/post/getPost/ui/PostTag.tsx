import { useSearch } from "../../../search/model/useSearch"

interface PostTagProps {
  tag: string
}

export const PostTag = ({ tag }: PostTagProps) => {
  const { tag: selectedTag, setTag } = useSearch()

  return (
    <span
      key={tag}
      className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
        selectedTag === tag ? "text-white bg-blue-500 hover:bg-blue-600" : "text-blue-800 bg-blue-100 hover:bg-blue-200"
      }`}
      onClick={() => {
        setTag(tag)
      }}
    >
      {tag}
    </span>
  )
}
