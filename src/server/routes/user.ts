import { Router } from 'express'
import { UserController } from '../controllers/User'
import { MongoUserRepository } from '../repositories/User/mongoUserRepository'

const router = Router()

// controller
const mongoUserRepository = new MongoUserRepository()
const userController = new UserController(mongoUserRepository)

router.get('/', async (req, res) => {
    await userController.list(req, res)
})

router.post('/', userController.storeValidator, async (req, res) => {
    await userController.store(req, res)
})

router.put('/:id', userController.editValidator ,async (req, res) => {
    await userController.edit(req, res)
})

router.delete('/:id', async (req, res) => {
    await userController.destroy(req, res)
})

export { router as userRoutes }