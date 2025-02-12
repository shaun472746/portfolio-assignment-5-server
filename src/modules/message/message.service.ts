import { TMessage } from './message.interface'
import { MessageModel } from './message.model'

const createMessageIntoDB = async (message: TMessage) => {
  try {
    const result = await MessageModel.create(message)
    return result
  } catch (err: any) {
    throw new Error(err)
  }
}

const getAllMessagesFromDB = async () => {
  const messages = await MessageModel.find({ deleted: false }).select(
    '-updatedAt -deleted -createdAt',
  )
  return messages
}

export const MessageServices = {
  createMessageIntoDB,
  getAllMessagesFromDB
}
