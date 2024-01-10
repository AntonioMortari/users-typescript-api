import mongoose from 'mongoose'
import { MONGODB_CONNECT } from '../../config'

const connectToDataBase = async() => {
    try {
        await mongoose.connect(MONGODB_CONNECT)
        console.log('Connect to database!')
    } catch (error) {
        console.log(error)
    }
}

connectToDataBase()