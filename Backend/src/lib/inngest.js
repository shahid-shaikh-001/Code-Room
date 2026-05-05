import { Inngest } from "inngest"
import { connectDB } from "./db"
import User from "../models/User.js"

export const inngest = new Inngest({ id: "my-app" });

const syncUser = inngest.createFunction(
    {id:"sync-user"}
)