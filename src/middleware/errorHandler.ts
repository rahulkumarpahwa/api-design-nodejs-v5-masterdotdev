import type { Request, Response, NextFunction } from 'express'
import { env } from '../../env.ts'

// class APIError extends Error { // now when create an error then use this class to create the new error obj.
//   status: number
//   name: string
//   message: string

//   constructor(status: number, name: string, message: string) {
//     super()
//     this.status = status
//     this.message = message
//     this.name = name
//   }
// }

export interface CustomError extends Error {
  status?: number
  code?: string
}

export const errorHandler = async (
  error: CustomError, // APIError can be used here as well.
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(error.stack)

  let status = error.status || 500
  let message = error.message || 'Internal Server Error'

  if (error.name === 'ValidationError') {
    status = 400
    message = 'Validation Error'
  }

  if (error.name === 'UnauthorizedError') {
    status = 401
    message = 'Unauthorized Error'
  }

  return res.status(status).json({
    error: message,
    ...(env.APP_STAGE === 'dev' && {
      stack: error.stack,
      details: error.message,
    }),
  })
}
