import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true }
});

export default mongoose.model("Review", reviewSchema);