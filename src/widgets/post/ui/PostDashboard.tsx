import { CreatePostFormButton } from "../../../features/post/createPost/ui/CreatePostFormButton"
import { PostTable } from "../../../features/post/getPost/ui/PostTable"
import { SearchBar } from "../../../features/search/ui/SearchBar"
import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui"
export const PostDashboard = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <CreatePostFormButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SearchBar />
        <PostTable />
      </CardContent>
    </Card>
  )
}
