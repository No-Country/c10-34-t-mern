import express, { json } from "express"
import cors from "cors"
import router from "./routes/index.js"
import {logErrors,errorHandler} from "./utils/handleError.js"
const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/v1',router)

app.use(logErrors)
app.use(errorHandler)
export default app