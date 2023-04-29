import type UploadedFile from './uploaded-file.interface'
import type UserRole from './user-role.interface'
import type UserStatus from './user-status.interface'

export default interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: UserRole
  status: UserStatus
  photo?: UploadedFile
}
