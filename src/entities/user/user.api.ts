import { http } from "@shared/api"
import { UserDetail, UserList } from "@entities/user/user.model"

export const getUsers = async () => {
  const response = await http.get<UserList>("/users?limit=0&select=username,image")
  return response
}

export const getUser = async (id: number) => {
  const response = await http.get<UserDetail>(`/users/${id}`)
  return response
}
