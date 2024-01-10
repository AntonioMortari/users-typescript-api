import { Request, Response } from 'express'
import { IUserController } from './protocols'
import { IUserRepository } from '../../repositories/User/protocols'
import { StatusCodes } from 'http-status-codes'

class UserController implements IUserController {

    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async list(req: Request,res: Response){

        const result = await this.userRepository.getAll()

        if(result instanceof Error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors:{
                    default: result.message
                }
            })
        }

        return res.status(StatusCodes.OK).json(result)

    }

}

export { UserController }