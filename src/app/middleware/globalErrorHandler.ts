/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { TErrorSource } from '../../interface/error'
import config from '../config'
import { handleZodError } from '../errors/handleZodError'
import { handleValidationError } from '../errors/handleValidationError'
import { handleCastError } from '../errors/handleCastError'
import { handleDuplicateError } from '../errors/handleDuplicateError'
import AppError from '../utils/AppError'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'Something went wrong!'
  let error: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ]

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    error = simplifiedError?.error
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    error = simplifiedError?.error
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)

    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    error = simplifiedError?.error
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err)

    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    error = simplifiedError?.error
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode
    message = err?.message
    error = [
      {
        path: '',
        message: err?.message,
      },
    ]
  } else if (err instanceof Error) {
    message = err?.message
    error = [
      {
        path: '',
        message: err?.message,
      },
    ]
  }

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error,
    stack: config.node_env === 'development' ? err?.stack : null,
    // error: err
  })
}

export default globalErrorHandler
