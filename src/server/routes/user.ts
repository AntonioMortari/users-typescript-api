import { Request, Response, Router } from 'express'
import { UserController } from '../controllers/User'
import { MongoUserRepository } from '../repositories/User/mongoUserRepository'

const router = Router()

// controller
const mongoUserRepository = new MongoUserRepository()
const userController = new UserController(mongoUserRepository)

router.get('/', async(req: Request,res:Response) => {
    await userController.list(req,res)
})

export { router as userRoutes}