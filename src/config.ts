import 'dotenv/config'

const PORT = process.env.PORT
const MONGODB_CONNECT = process.env.MONGODB_CONNECT || ''

export { PORT, MONGODB_CONNECT }