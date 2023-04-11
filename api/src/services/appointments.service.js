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
    const response = await AppointmentSchema.findOne({ _id: id }).populate('product').populate('service')
        //TO-DO
        /*let appointment_detail = await AppointmentSchema.aggregate(
        [{
                $lookup: {
                    from: "products",
                    localField: "product",
                    foreignField: "_id",
                    as: "product_detail"
                }
            },
            { $unwind: "$product_detail" }
        ]
    )
    return appointment_detail*/
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