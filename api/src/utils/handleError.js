//capturamos el error
const logErrors = (err,req,res,next)=>{
  console.log(err)
  next(err)
}

//detectamos el error y creamos un formato para devolver al cliente
const errorHandler = (err,req,res,next)=>{
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
}
export {logErrors,errorHandler}