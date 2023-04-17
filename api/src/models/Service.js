import mongoose from "mongoose";

<<<<<<< HEAD
const serviceSchema = new Schema({
=======
const serviceSchema = new mongoose.Schema({
>>>>>>> develop
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imgUrl: {
        type: String
    }
});

<<<<<<< HEAD
export default model("Service", serviceSchema);
=======
export default mongoose.model("Service", serviceSchema);
>>>>>>> develop
