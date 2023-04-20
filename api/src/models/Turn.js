import mongoose from "mongoose"

const turnSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true,
    }
})

export default mongoose.model("Turn", turnSchema)