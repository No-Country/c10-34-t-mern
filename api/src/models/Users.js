import { Schema, model } from "mongoose";

<<<<<<< HEAD
const UserSchema = new mongoose.Schema({
=======
const UserSchema = new Schema(
  {
>>>>>>> develop
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
        type: String
    },
    isBarber: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false,
});

<<<<<<< HEAD
export default mongoose.model("Users", UserSchema);
=======
export const User = model("user", UserSchema);
export default User;
>>>>>>> develop
