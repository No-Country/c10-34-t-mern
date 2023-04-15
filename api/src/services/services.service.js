import ServiceSchema from "../models/Service.js"

const createService = async(data) => {
    const {
        name,
        price,
        description,
        imgUrl
    } = data
    const newService = {
        name,
        price,
        description,
        imgUrl
    }
    const response = await ServiceSchema.create(newService)
    return response
}
const getDetailService = async(id) => {
    const response = await ServiceSchema.findOne({ _id: id })
    return response
}

const getAllServices = async() => {
    const response = await ServiceSchema.find()
    return response
}

const updateOneService = async(id, data) => {
    const response = await ServiceSchema.findOneAndUpdate({ _id: id }, data, { new: true })
    return response

}
const deleteOneService = async(id) => {
    const response = await ServiceSchema.deleteOne({ _id: id })
    return response
}

export { createService, getDetailService, getAllServices, updateOneService, deleteOneService }