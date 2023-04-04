
const checkRol = (roles)=>(req,res,next)=>{
  const {userData:{role:userRoles}} = req
  const checkRolesUser = roles.some((rolSingle)=>userRoles.includes(rolSingle))
  if(!checkRolesUser){
    res.status(401).json({error:'no autorizado'})
  } 
  next()
}

export default checkRol