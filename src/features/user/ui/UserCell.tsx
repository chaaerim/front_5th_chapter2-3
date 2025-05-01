import { overlay } from "overlay-kit"
import { UserDetailModal } from "@features/user/ui/UserDetailModal"
import { useGetUsersQuery } from "@features/user/api/useGetUsersQuery"

interface UserCellProps {
  userId: number
}

export const UserCell = ({ userId }: UserCellProps) => {
  const { users } = useGetUsersQuery()
  const user = users.users.find((user) => user.id === userId)
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return <UserDetailModal isOpen={isOpen} close={close} userId={userId} />
        })
      }}
    >
      <img src={user?.image} alt={user?.username} className="w-8 h-8 rounded-full" />
      <span>{user?.username}</span>
    </div>
  )
}
