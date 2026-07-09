import bycrpt from "bcrypt"
import env from "../../env.ts"


export const hashPassword = async (password: string): Promise<string> => {
    return bycrpt.hash(password, env.BCRYPT_SALT_ROUNDS)
}

export const comparePassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return bycrpt.compare(password, passwordHash)
}