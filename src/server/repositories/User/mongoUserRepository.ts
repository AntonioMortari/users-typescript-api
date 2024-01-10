import { User } from '../../database/models/User'
import { IUserRepository } from './protocols'
import { IUser } from '../../database/models/User/protocols'
import { ApiError } from '../../helpers/api-error'
import { StatusCodes } from 'http-status-codes'

class MongoUserRepository implements IUserRepository{

    async getAll(): Promise<IUser[] | ApiError>{
        try {
            const result = await User.find()

            const users: IUser[] = result.map(user => {
                return{
                    id: user._id.toString(),
                    firstname: user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    password: user.password 
                }
            })

            return users

        } catch (error) {
            console.log(error)
            return new ApiError('Erro ao buscar usuários', StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    async create(data: Omit<IUser,'id'>): Promise<string | ApiError>{

        // verify user exists
        const findUser = await User.findOne({email: data.email})

        if(findUser){
            return new ApiError(`Usuário de email ${data.email} já cadastrado`, StatusCodes.BAD_REQUEST)
        }

        try {
            const result = await User.create(data)

            return result._id.toString()
        } catch (error) {
            console.log(error)
            return new ApiError('Erro ao criar usuário', StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

}

export { MongoUserRepository}