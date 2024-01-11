import bcrypt from 'bcrypt'

const HASH_SALT = 10

const hash = async(password: string): Promise<string> => {

    const hashPassword = await bcrypt.hash(password, HASH_SALT)

    return hashPassword

}

const compare = async(password: string, encryptPassword: string): Promise<boolean> => {
    const match = await bcrypt.compare(password, encryptPassword)

    if(match) return true

    return false
}

export { hash, compare}