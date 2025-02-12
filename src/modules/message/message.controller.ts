import sendResponse from '../../app/middleware/sendResponse'
import catchAsync from '../../app/utils/catchAsync'
import { MessageServices } from './message.service'

const createMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.createMessageIntoDB(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Message created successfully!',
    data: result,
  })
})

export const MessageControllers = {
  createMessage,
}
