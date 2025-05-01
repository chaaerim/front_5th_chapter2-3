import { ThumbsDown, ThumbsUp } from "lucide-react"
import { HighlightText, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@shared/ui"
import { useGetPostsQuery } from "@features/post/getPosts/api/useGetPostsQuery"
import { DeletePostButton } from "@features/post/deletePost/ui/DeletePostButton"
import { UpdatePostButton } from "@features/post/updatePost/ui/UpdatePostButton"
import { UserCell } from "@features/user/ui/UserCell"
import { GetPostDetailButton } from "@features/post/getPosts/ui/GetPostDetailButton"
import { useFormContext } from "react-hook-form"
import { SearchBarForm, Pagination } from "@features/search"
import { PostTag } from "@features/post/getPosts/ui/PostTag"

export const PostTable = () => {
  const { watch } = useFormContext<SearchBarForm>()
  const searchQuery = watch("title")

  const { posts } = useGetPostsQuery()

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-[150px]">작성자</TableHead>
            <TableHead className="w-[150px]">반응</TableHead>
            <TableHead className="w-[150px]">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>
                    <HighlightText text={post.title} highlight={searchQuery} />
                  </div>
                  <div className="flex flex-wrap gap-1">{post.tags?.map((tag) => <PostTag key={tag} tag={tag} />)}</div>
                </div>
              </TableCell>
              <TableCell>
                <UserCell userId={post.userId} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.reactions?.likes || 0}</span>
                  <ThumbsDown className="w-4 h-4" />
                  <span>{post.reactions?.dislikes || 0}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <GetPostDetailButton post={post} searchQuery={searchQuery} />
                  <UpdatePostButton selectedPost={post} />
                  <DeletePostButton postId={post.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination total={posts.total} />
    </>
  )
}
