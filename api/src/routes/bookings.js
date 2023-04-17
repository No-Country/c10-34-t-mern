import { Router } from "express";
import { registerBooking, getBookings, getBooking, getBookingsByUser, updateBooking, deleteBooking } from "../controllers/bookings.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()
router.post('/', checkAuth, checkRol(['admin', 'user']), registerBooking)
router.get('/', checkAuth, checkRol(['admin', 'user']), getBookings)
router.get('/:id', checkAuth, checkRol(['admin', 'user']), getBooking)
router.get('/getBookingsByUser/:user_id', checkAuth, getBookingsByUser)
router.patch('/:id', checkAuth, checkRol(['admin']), updateBooking)
router.delete('/:id', checkAuth, checkRol(['admin']), deleteBooking)

export default { router }