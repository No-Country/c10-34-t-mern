import {registerService,loginService,meService} from "../services/auth.service.js"
const registerUser = async(req,res,next)=>{
  try {
    const {body} = req
    const userRegister = await registerService(body)
    res.json(userRegister)
  } catch (error) {
    next(error)
  }  
}

const loginUser = async(req,res,next)=>{
  try {
    const {body} = req
    const response = await loginService(body)
    if(response == "INCORRECT_DATA"){
      res.status(403).json(response)
    }else{
      res.json(response)
    }
  } catch (error) {
    next(error)
  }
}

const meUser = async(req,res,next)=>{
  try {
    const user = req.userData
    const response = await meService(user._id)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

export {registerUser,loginUser,meUser}
