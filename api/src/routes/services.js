import { Router } from "express";
import { registerService, getServices, getService, updateService, deleteService } from "../controllers/services.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()
router.post('/', checkAuth, checkRol(['admin']), registerService)
router.get('/', checkAuth, checkRol(['admin']), getServices)
router.get('/:id', checkAuth, checkRol(['admin']), getService)
router.patch('/:id', checkAuth, checkRol(['admin']), updateService)
router.delete('/:id', checkAuth, checkRol(['admin']), deleteService)

export default { router }