import express, { json } from "express"
import cors from "cors"
import router from "./routes/index.js"
import {logErrors,errorHandler} from "./utils/handleError.js"

//swagger
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { options } from "./doc/swaggerV1.js"

const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/v1',router)

const swaggerSpec = swaggerJsDoc(options)
app.use('/api/v1/doc',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.use(logErrors)
app.use(errorHandler)
export default app