import jwt from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN
const tokenSign = (user)=>{
  const sign =  jwt.sign(
    {
      _id:user._id,
      role:user.role
    },
    JWT_SECRET,
    {
      expiresIn:JWT_EXPIRE_IN
    })
  return sign
}

const verifyToken = (token)=>{
  try {
    return  jwt.verify(token,JWT_SECRET)
  } catch (error) {
    console.error(error)
  }
}


 export {tokenSign,verifyToken}
