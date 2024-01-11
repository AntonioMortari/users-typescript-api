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

router.post('/', userController.storeValidator, async(req: Request,res: Response) => {
    await userController.store(req,res)
})

router.delete('/:id', async(req:Request, res: Response) => {
    await userController.destroy(req,res)
})

export { router as userRoutes}