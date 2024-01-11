import { IUser } from '../../database/models/User/protocols'
import { ApiError } from '../../helpers/api-error'

export interface IUserRepository {
    getAll: () => Promise<IUser[] | ApiError>
    create:(data: Omit<IUser, 'id'>) => Promise<string | ApiError>
    delete: (id: string) => Promise<void | ApiError>
    update: (id: string, newData: Partial<Omit<IUser,'id'>>) => Promise<void | ApiError>
    verifyUserExistsById: (id: string) => Promise<boolean>
}