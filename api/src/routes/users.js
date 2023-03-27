import { Router } from "express";
import {getUsers,getUser,createUser,updateUser,deleteUser} from "../controllers/users.controller.js"
const router = Router()

router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',createUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)


export default {router}