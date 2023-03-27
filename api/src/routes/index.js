import { Router } from "express"
import path from 'path'
import { fileURLToPath } from 'url'
import {readdirSync} from "fs"
const router = Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_ROUTER = __dirname

const removeExtension = (filename)=>{
  return filename.split('.').shift()
}
readdirSync(PATH_ROUTER).filter((file)=>{
  const name=removeExtension(file)
  if(name !== 'index'){
    import(`./${name}.js`).then(moduleRouter=>{
      router.use(`/${name}`,moduleRouter.default.router)
    })
    }
  }
)
export default router