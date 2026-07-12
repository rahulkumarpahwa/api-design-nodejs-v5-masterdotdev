import { SignJWT, type JWTPayload, jwtVerify, type JWTVerifyResult } from 'jose'
import env from '../../env.ts'
import crypto from "node:crypto"

export interface JWTPld extends JWTPayload {
    username: string
    email: string
    id: string
}

export const generateSecret = async () : Promise<crypto.KeyObject> => {
    return crypto.createSecretKey(env.JWT_SECRET, 'utf-8')
}

export const generateJWT = async (payload: JWTPld): Promise<string> => {
    const secret = await generateSecret()
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(env.JWT_EXPIRES_IN || '7d')
        .sign(secret)
}


export const verifyJWT = async (jwt: string) : Promise<JWTPld> => {
    const secret = await generateSecret()
    const {payload } = await jwtVerify(jwt, secret) 
    return payload as JWTPld;
}