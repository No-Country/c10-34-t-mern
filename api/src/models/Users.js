import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
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
    homeAddress: {
      type: String,
    },
    age: {
      type: Number,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      default: "active",
    },
    isBarber: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model("user", UserSchema);
export default User;
