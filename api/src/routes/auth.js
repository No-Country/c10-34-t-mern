import {Router} from "express"
import {registerUser,loginUser,meUser} from "../controllers/auth.controller.js"
import checkAuth from "../middleware/checkAuth.js"
import checkRol from "../middleware/checkRol.js"
const router = Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',checkAuth,checkRol(['admin','user']),meUser)

export default {router}

