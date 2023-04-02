import app from "./src/app.js";
import "dotenv/config";
import connectDB from "./src/database/database.js";
import User from "./src/models/Users.js";
import Appointment from "./src/models/Appointment.js";
import Service from "./src/models/Service.js";
import Product from "./src/models/Product.js";

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => console.log(`***SERVER IS RUNING ON PORT ${PORT}***`));
