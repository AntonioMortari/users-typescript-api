import { NextFunction, Request, Response } from 'express'
import { validate } from '../../middlewares/validate'
import { bodyStoreValidator, bodyEditValidator } from '../../validations/user'

const storeValidationMiddleware = validate({
    body: bodyStoreValidator
})

const editValidationMiddleware = validate({
    body: bodyEditValidator
})

class UserValidation {

    storeValidator(req: Request, res: Response, next: NextFunction) {
        storeValidationMiddleware(req, res, next)
    }

    editValidator(req: Request, res: Response, next: NextFunction) {
        editValidationMiddleware(req, res, next)
    }
}
export { UserValidation }