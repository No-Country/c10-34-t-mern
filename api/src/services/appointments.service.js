import AppointmentSchema from "../models/Appointment.js"

const createAppointment = async(data) => {
    const {
        user,
        barber,
        date,
        service,
        product
    } = data
    const newAppointment = {
        user,
        barber,
        date,
        service,
        product
    }
    const response = await AppointmentSchema.create(newAppointment)
    return response
}
const getDetailAppointment = async(id) => {
    const response = await AppointmentSchema.findOne({ _id: id })
    return response
}

const getAllAppointments = async() => {
    const response = await AppointmentSchema.find()
    return response
}

const updateOneAppointment = async(id, data) => {
    const response = await AppointmentSchema.findOneAndUpdate({ _id: id }, data, { new: true })
    return response

}
const deleteOneAppointment = async(id) => {
    const response = await AppointmentSchema.deleteOne({ _id: id })
    return response
}

export { createAppointment, getDetailAppointment, getAllAppointments, updateOneAppointment, deleteOneAppointment }