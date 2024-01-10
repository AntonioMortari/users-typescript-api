import { Request, Response } from 'express'
import { IUserController } from './protocols'

class UserController implements IUserController {

    async list(req: Request,res: Response){
        
    }

}

export { UserController }