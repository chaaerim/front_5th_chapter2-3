import { http } from "../../shared/api"
import { UserDetail, UserList } from "./user.model"

export const getUsers = async () => {
  const response = await http.get<UserList>("/api/users?limit=0&select=username,image")
  return response
}

export const getUser = async (id: string) => {
  const response = await http.get<UserDetail>(`/api/users/${id}`)
  return response
}
