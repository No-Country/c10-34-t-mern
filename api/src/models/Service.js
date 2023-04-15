import { Schema, model } from "mongoose";

<<<<<<< HEAD
const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imgUrl: {
        type: String
    }
});

export default mongoose.model("Service", serviceSchema);
=======
const serviceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

export const Service = model("Service", serviceSchema);
export default Service;
>>>>>>> develop
