import { Router } from "express";
import { registerAppointment, getAppointments, getAppointment, updateAppointment, deleteAppointment } from "../controllers/appointments.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()
router.post('/', checkAuth, checkRol(['admin']), registerAppointment)
router.get('/', checkAuth, checkRol(['admin']), getAppointments)
router.get('/:id', checkAuth, checkRol(['admin']), getAppointment)
router.patch('/:id', checkAuth, checkRol(['admin']), updateAppointment)
router.delete('/:id', checkAuth, checkRol(['admin']), deleteAppointment)

export default { router }