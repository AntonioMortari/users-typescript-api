import * as yup from 'yup'
import { IUser } from '../database/models/User/protocols'

const bodyValidator: yup.Schema<Omit<IUser, 'id'>> = yup.object().shape({
    email: yup.string().email().min(6).required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required().min(6)
}) 

export { bodyValidator }