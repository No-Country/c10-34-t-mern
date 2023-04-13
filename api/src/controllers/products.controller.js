import { createProduct, getDetailProduct, getAllProducts, updateOneProduct, deleteOneProduct } from "../services/products.service.js"
const registerProduct = async(req, res, next) => {
    try {
        const { body } = req
        const productCreate = await createProduct(body)
        res.json(productCreate)
    } catch (error) {
        next(error)
    }
}
const getProducts = async(req, res, next) => {
    try {
        const products = await getAllProducts()
        res.json(products)
    } catch (error) {
        next(error)
    }
}
const getProduct = async(req, res, next) => {
    try {
        const { id } = req.params
        const product = await getDetailProduct(id)
        res.json({ result: product })
    } catch (error) {
        next(error)
    }
}
const updateProduct = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const product = await updateOneProduct(id, body)
        res.json(product)
    } catch (error) {
        next(error)
    }
}
const deleteProduct = async(req, res, next) => {
    try {
        const { id } = req.params
        const product = await deleteOneProduct(id)
        res.json(product)
    } catch (error) {
        next(error)
    }
}

export { registerProduct, getProducts, getProduct, updateProduct, deleteProduct }