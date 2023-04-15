import BookingSchema from "../models/Booking.js"

const createBooking = async(data) => {
    const {
        user,
        barber,
        date,
        service,
        product
    } = data
    const newBooking = {
        user,
        barber,
        date,
        service,
        product
    }
    const response = await BookingSchema.create(newBooking)
        /*const response = await BookingSchema.create(newBooking).then((response) =>
        response.populate('product', { name: 1 }))
        */
    return response
}
const getDetailBooking = async(id) => {
    const response = await BookingSchema.findOne({ _id: id }).populate('product').populate('service')
        //TO-DO
        /*let booking_detail = await BookingSchema.aggregate(
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
    return booking_detail*/
    return response
}

const getAllBookings = async() => {
    const response = await BookingSchema.find()
    return response
}

const updateOneBooking = async(id, data) => {
    const response = await BookingSchema.findOneAndUpdate({ _id: id }, data, { new: true })
    return response

}
const deleteOneBooking = async(id) => {
    const response = await BookingSchema.deleteOne({ _id: id })
    return response
}

export { createBooking, getDetailBooking, getAllBookings, updateOneBooking, deleteOneBooking }