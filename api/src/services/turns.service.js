import TurnSchema from "../models/Turn.js"

const createTurn = async(data) => {
    const {
        time
    } = data
    const newTurn = {
        time
    }
    const response = await TurnSchema.create(newTurn)
        /*const response = await BookingSchema.create(newBooking).then((response) =>
        response.populate('product', { name: 1 }))
        */
    return response
}

const getDetailTurn = async(id) => {
    const response = await TurnSchema.findOne({ _id: id })
    return response
}

const getAllTurns = async() => {
    const response = await TurnSchema.find()
    return response
}

const getAvailableTurns = async() => {
    var bookingDate = "14:00:00"
    var query = {
        "time": {
            "$ne": bookingDate
        }
    }
    const response = await TurnSchema.find(query)
    return response
}

const updateOneTurn = async(id, data) => {
    const response = await TurnSchema.findOneAndUpdate({ _id: id }, data, { new: true })
    return response

}
const deleteOneTurn = async(id) => {
    const response = await TurnSchema.deleteOne({ _id: id })
    return response
}

export { createTurn, getDetailTurn, getAllTurns, updateOneTurn, deleteOneTurn }