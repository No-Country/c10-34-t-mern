import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
});

<<<<<<< HEAD
export default mongoose.model("Service", serviceSchema);
=======
export default mongoose.model('Service', serviceSchema);
>>>>>>> 2a366b83b8d36649b30cab154d7cb15eca56c609
