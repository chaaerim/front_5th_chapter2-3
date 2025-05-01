import { Dialog } from "@shared/ui"
import { UserDetail } from "@features/user/ui/UserDetail"
import { Suspense } from "react"

interface UserDetailModalProps {
  isOpen: boolean
  close: () => void
  userId: number
}

export const UserDetailModal = ({ isOpen, close, userId }: UserDetailModalProps) => {
  return (
    <Dialog title="사용자 정보" open={isOpen} onOpenChange={close}>
      <Suspense fallback={<div>유저 정보 로딩 중...</div>}>
        <UserDetail userId={userId} />
      </Suspense>
    </Dialog>
  )
}
