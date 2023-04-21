import { Router } from "express";
import {registerStore,getAllStore,getStore,deleteStore,updateStore} from "../controllers/store.controller.js"
import checkAuth from "../middleware/checkAuth.js"
import checkRol from "../middleware/checkRol.js"

const router = Router()

router.get('/',checkAuth,checkRol(["user"]),getAllStore)
router.post('/',checkAuth,checkRol(["admin"]),registerStore)
router.get('/:id',checkAuth,checkRol(["user"]),getStore)
router.patch('/:id',checkAuth,checkRol(["admin"]),updateStore)
router.delete('/:id',checkAuth,checkRol(["admin"]),deleteStore)

export default{router}