import mongoose from 'mongoose'
import { IUser } from './protocols'

const userSchema = new mongoose.Schema<Omit<IUser, 'id'>>({
    email: {
        type: String,
        required: true,
        min: 6
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
})

const User = mongoose.model<Omit<IUser, 'id'>>('User', userSchema)

export { User }