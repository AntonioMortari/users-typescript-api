import { User } from '../../database/models/User'
import { IUserRepository } from './protocols'
import { IUser } from '../../database/models/User/protocols'

class MongoUserRepository implements IUserRepository{

    async getAll(): Promise<IUser[] | Error>{
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
            return new Error('Erro ao buscar usuários')
        }
    }

}

export { MongoUserRepository}