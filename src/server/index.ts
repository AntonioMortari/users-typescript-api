import express from 'express'

const server = express()

import './database/connection'

server.use(express.json())
server.use(express.urlencoded({extended:true}))

// routes
import { userRoutes } from './routes/user'

server.use('/user', userRoutes)

export { server }