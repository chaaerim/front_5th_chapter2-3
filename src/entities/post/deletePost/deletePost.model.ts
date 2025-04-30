import { Reactions } from "../model"

export interface DeletePostResponse {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
  isDeleted: boolean
  deletedOn: string
}
