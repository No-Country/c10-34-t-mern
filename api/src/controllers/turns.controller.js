import { createTurn, getDetailTurn, getAllTurns, updateOneTurn, deleteOneTurn } from "../services/turns.service.js"

const registerTurn = async(req, res, next) => {
    try {
        const { body } = req
        const turnCreate = await createTurn(body)
        res.json(turnCreate)
    } catch (error) {
        next(error)
    }
}
const getTurns = async(req, res, next) => {
    try {
        const turns = await getAllTurns()
        res.json(turns)
    } catch (error) {
        next(error)
    }
}
const getTurn = async(req, res, next) => {
    try {
        const { id } = req.params
        const turn = await getDetailTurn(id)
        res.json({ result: turn })
    } catch (error) {
        next(error)
    }
}
const updateTurn = async(req, res, next) => {
    try {
        const { id } = req.params
        const { body } = req
        const turn = await updateOneTurn(id, body)
        res.json(turn)
    } catch (error) {
        next(error)
    }
}
const deleteTurn = async(req, res, next) => {
    try {
        const { id } = req.params
        const turn = await deleteOneTurn(id)
        res.json(turn)
    } catch (error) {
        next(error)
    }
}

export { registerTurn, getTurns, getTurn, updateTurn, deleteTurn }