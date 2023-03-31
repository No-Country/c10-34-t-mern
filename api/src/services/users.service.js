import UserSchema from "../models/Users.js"

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

export {getDetailUser,getAllUsers,updateOneUser,deleteOneUser}