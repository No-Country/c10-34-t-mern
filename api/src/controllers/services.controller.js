import { createService, getDetailService, getAllServices, updateOneService, deleteOneService } from "../services/services.service.js"
const registerService = async(req, res, next) => {
    try {
        const { body } = req
        const serviceCreate = await createService(body)
        res.json(serviceCreate)
    } catch (error) {
        next(error)
    }
}
const getServices = async(req, res, next) => {
    try {
        const services = await getAllServices()
        res.json(services)
    } catch (error) {
        next(error)
    }
}
const getService = async(req, res, next) => {
    try {
        const { id } = req.params
        const service = await getDetailService(id)
        res.json({ result: service })
    } catch (error) {
        next(error)
    }
}
const updateService = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const service = await updateOneService(id, body)
        res.json(service)
    } catch (error) {
        next(error)
    }
}
const deleteService = async(req, res, next) => {
    try {
        const { id } = req.params
        const service = await deleteOneService(id)
        res.json(service)
    } catch (error) {
        next(error)
    }
}

export { registerService, getServices, getService, updateService, deleteService }