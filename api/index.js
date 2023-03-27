import app from "./src/app.js"
import "dotenv/config"
import connectDB from "./src/database/database.js";
const PORT=process.env.PORT||5000

connectDB()
app.listen(PORT,()=>(console.log(`***SERVER IS RUNING ON PORT ${PORT}***`)))