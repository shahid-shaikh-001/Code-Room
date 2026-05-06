import {StreamChat} from "stream-chat"
import {StreamClient} from "@stream-io/node-sdk"
import { ENV } from "./env.js"


const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if (!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret) // will be for chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // will be for video calling


export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream User upserted successfully: ",userData);
    } catch (error) {
        console.error("Error upserting in Stream user: ",error);
        
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteStreamUser(userId)
        console.log("Stream user is deleted successfully: ",userId);
        
    } catch (error) {
        console.error("Error deleteing in Stream user: ",error);
        
    }
}