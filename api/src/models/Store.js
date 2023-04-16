import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    phone: { type: String },
    address: { type: String },
    location: {},
    imgUrl: { type: String }
});

export default mongoose.model("Store", storeSchema);