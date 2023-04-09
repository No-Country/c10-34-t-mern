import ProductSchema from "../models/Product.js"

const createProduct = async(data) => {
    const {
        name,
        description,
        price
    } = data
    const newProduct = {
        name,
        description,
        price
    }
    const response = await ProductSchema.create(newProduct)
    return response
}
const getDetailProduct = async(id) => {
    const response = await ProductSchema.findOne({ _id: id })
    return response
}

const getAllProducts = async() => {
    const response = await ProductSchema.find()
    return response
}

const updateOneProduct = async(id, data) => {
    const response = await ProductSchema.findOneAndUpdate({ _id: id }, data, { new: true })
    return response

}
const deleteOneProduct = async(id) => {
    const response = await ProductSchema.deleteOne({ _id: id })
    return response
}

export { createProduct, getDetailProduct, getAllProducts, updateOneProduct, deleteOneProduct }