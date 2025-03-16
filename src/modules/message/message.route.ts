import express from 'express'

import validateMiddleware from '../../app/middleware/validateRequest'
import { messageValidation } from './message.zod.validation'
import { MessageControllers } from './message.controller'

const router = express.Router()

router.post(
  '/',

  validateMiddleware(messageValidation.createMessageValidationSchema),
  MessageControllers.createMessage,
)

router.get('/', MessageControllers.getMessages)

export const MessageRoutes = router
