import { FormProvider } from "react-hook-form"
import { CreatePostFormButton } from "../../../features/post/createPost/ui/CreatePostFormButton"
import { PostTable } from "../../../features/post/getPosts/ui/PostTable"
import { useSearchBarForm } from "../../../features/search/model/useSearchBarForm"
import { SearchBar } from "../../../features/search/ui/SearchBar"
import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

export const PostDashboard = () => {
  const method = useSearchBarForm()

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <CreatePostFormButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...method}>
          <SearchBar />
          <Suspense fallback={<div className="flex justify-center p-4">로딩 중...</div>}>
            <PostTable />
          </Suspense>
        </FormProvider>
      </CardContent>
    </Card>
  )
}
