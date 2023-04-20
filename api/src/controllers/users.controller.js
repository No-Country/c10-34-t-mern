import { getDetailUser, getAllUsers, getAllBarbers, updateOneUser, deleteOneUser } from "../services/users.service.js"

const getUsers = async(req, res, next) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        next(error)
    }
}
const getBarbers = async(req, res, next) => {
    try {
        const barbers = await getAllBarbers()
        res.json(barbers)
    } catch (error) {
        next(error)
    }
}
const getUser = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await getDetailUser(id)
        res.json({ result: user })
    } catch (error) {
        next(error)
    }
}
const updateUser = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const user = await updateOneUser(id, body)
        res.json(user)
    } catch (error) {
        next(error)
    }
}
const deleteUser = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await deleteOneUser(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

export { getUsers, getBarbers, getUser, updateUser, deleteUser }