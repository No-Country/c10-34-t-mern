import {verifyToken} from "../utils/handleJwt.js"

const checkAuth = (req,res,next)=>{
  try {
    const token = req.headers['x-access-token']
    if(!token){
      res.status(401).json({error:'no token'})
    }
    const verify = verifyToken(token)
    if(!verify._id){
      res.status(401).json({error:'token erroneo'})
    }
    req.userData=verify
    next()
  } catch (error) {
    res.status(401).json({error})
  }
}

export default checkAuth