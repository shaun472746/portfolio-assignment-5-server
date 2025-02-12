import { TMessage } from "./message.interface";
import { MessageModel } from "./message.model";


const createMessageIntoDB = async (message:TMessage) => {
    try{

            const result = await MessageModel.create(message);
            return result;

    }catch(err:any){
        throw new Error(err);
    }
}

export const MessageServices = {
    createMessageIntoDB
}