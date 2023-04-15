// Appointment.js
import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

export const Appointment = model("Appointment", appointmentSchema);
export default Appointment;
