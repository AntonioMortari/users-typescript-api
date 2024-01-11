import * as yup from 'yup'
import { IUser } from '../database/models/User/protocols'

const bodyStoreValidator: yup.Schema<Omit<IUser, 'id'>> = yup.object().shape({
    email: yup.string().email().min(6).required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required().min(6)
})

const bodyEditValidator: yup.Schema<Partial<IUser>> = yup.object().shape({
    email: yup.string().email().min(6),
    firstname: yup.string().min(2),
    lastname: yup.string().min(2),
    password: yup.string().min(6)
})


export { bodyStoreValidator,bodyEditValidator }