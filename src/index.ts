import { PORT } from './config'
import {server} from './server'

server.listen(PORT || 3000, () => console.log('Server is running...'))