import { Schema, model } from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imgUrl: {
    type: String,
  },
});

export default mongoose.model("Service", serviceSchema);
