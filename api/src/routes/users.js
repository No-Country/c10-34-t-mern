import { Router } from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/users.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()

router.get('/', checkAuth, getUsers)
router.get('/:id', checkAuth, checkRol(['admin']), getUser)
router.patch('/:id', checkAuth, checkRol(['admin']), updateUser)
router.delete('/:id', checkAuth, checkRol(['admin']), deleteUser)

export default { router }