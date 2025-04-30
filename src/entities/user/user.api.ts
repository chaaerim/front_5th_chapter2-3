import { http } from "../../shared/api"

export const getUsers = async () => {
  const response = await http.get("/api/users?limit=0&select=username,image")
  return response
}

export const getUser = async (id: string) => {
  const response = await http.get(`/api/users/${id}`)
  return response
}
