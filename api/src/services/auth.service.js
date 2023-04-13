import UserSchema from "../models/Users.js"
import { encrypt, compare } from "../utils/handleBcrypt.js"
import { tokenSign } from "../utils/handleJwt.js"
const registerService = async(data) => {
    const {
        name,
        lastName,
        email,
        dataOfBirth,
        password
    } = data
    const checkEmail = await UserSchema.findOne({ email: email })
    if (checkEmail) return "ALREADY USER"
    const hashPassword = await encrypt(password)
    const newUser = {
        name,
        lastName,
        email: email.toLowerCase(),
        dataOfBirth,
        password: hashPassword
    }
    const response = await UserSchema.create(newUser)
    response.set("password", undefined, { strict: false })
    return response
}

const loginService = async({ email, password }) => {
    const checkIs = await UserSchema.findOne({ email: email })
    if (!checkIs) return "INCORRECT_DATA"
    const checkPassword = await compare(password, checkIs.password)
    if (!checkPassword) return "INCORRECT_DATA"
    const token = await tokenSign(checkIs)
    return { tokenGenerated: token }
}

const meService = async(id) => {
    const response = UserSchema.findById(id)
    return response
}

export { registerService, loginService, meService }