import { UserDto } from "src/modules/user/user-dto"
import { IPaginationRes } from "./pagination"

export interface IResponseUser {
  data: UserDto[] | UserDto
  totalData: number
  totalPage: number
  currentPage: number
}

export interface UserPaginationDto extends IPaginationRes {
  name: string
}
