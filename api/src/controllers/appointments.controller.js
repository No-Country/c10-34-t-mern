import { createAppointment, getDetailAppointment, getAllAppointments, updateOneAppointment, deleteOneAppointment } from "../services/appointments.service.js"
const registerAppointment = async(req, res, next) => {
    try {
        const { body } = req
        const appointmentCreate = await createAppointment(body)
        res.json(appointmentCreate)
    } catch (error) {
        next(error)
    }
}
const getAppointments = async(req, res, next) => {
    try {
        const appointments = await getAllAppointments()
        res.json(appointments)
    } catch (error) {
        next(error)
    }
}
const getAppointment = async(req, res, next) => {
    try {
        const { id } = req.params
        const appointment = await getDetailAppointment(id)
        res.json({ result: appointment })
    } catch (error) {
        next(error)
    }
}
const updateAppointment = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const appointment = await updateOneAppointment(id, body)
        res.json(appointment)
    } catch (error) {
        next(error)
    }
}
const deleteAppointment = async(req, res, next) => {
    try {
        const { id } = req.params
        const appointment = await deleteOneAppointment(id)
        res.json(appointment)
    } catch (error) {
        next(error)
    }
}

export { registerAppointment, getAppointments, getAppointment, updateAppointment, deleteAppointment }