import { Request, Response } from 'express'
import { IUserController } from './protocols'
import { IUserRepository } from '../../repositories/User/protocols'
import { StatusCodes } from 'http-status-codes'
import { ApiError } from '../../helpers/api-error'
import { UserValidation } from './UserValidation'

class UserController extends UserValidation implements IUserController {

    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        super()
        this.userRepository = userRepository
    }

    async list(req: Request, res: Response) {

        const result = await this.userRepository.getAll()

        if (result instanceof ApiError) {
            return res.status(result.statusCode).json({
                errors: {
                    default: result.message
                }
            })
        }

        return res.status(StatusCodes.OK).json(result)

    }

    async store(req: Request, res: Response) {

        const result = await this.userRepository.create(req.body)

        if (result instanceof ApiError) {
            return res.status(result.statusCode).json({
                errors: {
                    default: result.message
                }
            })
        }

        return res.status(StatusCodes.CREATED).json(result)

    }

    async destroy(req: Request, res: Response) {

        const result = await this.userRepository.delete(req.params.id)

        if (result instanceof ApiError) {
            return res.status(result.statusCode).json({
                errors: {
                    default: result.message
                }
            })
        }

        return res.status(StatusCodes.NO_CONTENT).send()
    }

}

export { UserController }