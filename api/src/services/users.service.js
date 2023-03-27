import UserSchema from "../models/Users.js"
import{encrypt} from "../utils/handleBcrypt.js"
const registerUser=async(user)=>{
  const {
    name,
    lastName,
    email,
    dataOfBirth,
    password,
    homeAddress,
    age
  }=user
  const hashPassword = await encrypt(password)
  const newUser = {
    name,
    lastName,
    email:email.toLowerCase(),
    dataOfBirth,
    password:hashPassword,
    homeAddress,
    age
  }
  const response = await UserSchema.create(newUser)
  return response
}

const getDetailUser=async(id)=>{
  const response = await UserSchema.findOne({_id:id})
  return response
}

const getAllUsers = async()=>{
  const response = await UserSchema.find()
  return response
}

const updateOneUser= async(id,data)=>{
  const response = await UserSchema.findOneAndUpdate({_id:id},data,{new:true})
  return response

}
const deleteOneUser = async(id)=>{
  const response = await UserSchema.deleteOne({_id:id})
  return response
}

export {registerUser,getDetailUser,getAllUsers,updateOneUser,deleteOneUser}