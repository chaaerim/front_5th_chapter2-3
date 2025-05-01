import { Dialog } from "@shared/ui"
import { UserDetail } from "@features/user/ui/UserDetail"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

interface UserDetailModalProps {
  isOpen: boolean
  close: () => void
  userId: number
}

export const UserDetailModal = ({ isOpen, close, userId }: UserDetailModalProps) => {
  return (
    <Dialog title="사용자 정보" open={isOpen} onOpenChange={close}>
      <Suspense
        fallback={
          <div className="flex justify-center p-4">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        }
      >
        <UserDetail userId={userId} />
      </Suspense>
    </Dialog>
  )
}
