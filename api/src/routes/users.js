import { Router } from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/users.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()
    //checkRol(['admin'])
router.get('/', checkAuth, getUsers)
router.get('/:id', checkAuth, getUser)
router.patch('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

export default { router }