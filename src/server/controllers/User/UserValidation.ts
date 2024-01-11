import { NextFunction, Request, Response } from 'express'
import { validate } from '../../middlewares/validate'
import { bodyValidator } from '../../validations/user'

const storeValidationMiddleware = validate({
    body: bodyValidator
})

class UserValidation {

    storeValidator(req: Request,res: Response,next: NextFunction){
        storeValidationMiddleware(req,res,next)
    }
}
export { UserValidation }