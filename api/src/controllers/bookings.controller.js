import { createBooking, getDetailBooking, getAllBookings, updateOneBooking, deleteOneBooking } from "../services/bookings.service.js"
const registerBooking = async(req, res, next) => {
    try {
        const { body } = req
        const bookingCreate = await createBooking(body)
        res.json(bookingCreate)
    } catch (error) {
        next(error)
    }
}
const getBookings = async(req, res, next) => {
    try {
        const bookings = await getAllBookings()
        res.json(bookings)
    } catch (error) {
        next(error)
    }
}
const getBooking = async(req, res, next) => {
    try {
        const { id } = req.params
        const booking = await getDetailBooking(id)
        res.json({ result: booking })
    } catch (error) {
        next(error)
    }
}
const updateBooking = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const booking = await updateOneBooking(id, body)
        res.json(booking)
    } catch (error) {
        next(error)
    }
}
const deleteBooking = async(req, res, next) => {
    try {
        const { id } = req.params
        const booking = await deleteOneBooking(id)
        res.json(booking)
    } catch (error) {
        next(error)
    }
}

export { registerBooking, getBookings, getBooking, updateBooking, deleteBooking }