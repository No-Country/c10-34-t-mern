import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true, // Limpia los campos en blanco a derecha o izquierda
    },
    dateOfBirth: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      default: "active",
    },
    imgURL: {
      type: String,
    },
    isBarber: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Users", userSchema);