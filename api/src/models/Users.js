import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
    },
    dateOfBirth: {
      type: String,
    },
    password: {
      type: String,
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

export default mongoose.model("Users", UserSchema);
