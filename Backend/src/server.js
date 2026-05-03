import express from "express"
import dotenv from "dotenv"
import path from "path"
import { ENV } from "./lib/env.js";

dotenv.config()

const app  = express()
const __dirname = path.resolve()


app.get("/health", (req,res) => {
    res.status(200).json({msg: "API is up and running"})
})

app.get("/books", (req,res) => {
    res.status(200).json({msg: "this is books Endpoint"})
})


app.get("/", (req,res) => {
    res.status(200).json({msg:"success from API"})
})

// make our app ready for production
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.get("/{*any}",(req,res) => {
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"));
    })
}

app.listen(ENV.PORT,() => console.log("Server is running on port:",ENV.PORT))