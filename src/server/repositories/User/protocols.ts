import { IUser } from '../../database/models/User/protocols'

export interface IUserRepository{
    getAll: () => Promise<IUser[] | Error > 
}