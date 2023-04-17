import { json } from "express"
import {createStore,getDetailStore,getAllStores,deleteOneStore,updateOneStore} from "../services/store.service.js"
const registerStore = async(req,res,next)=>{
  try {
    const {body} = req
    const storeCreate = await createStore(body)
    res.json(storeCreate)
  } catch (error) {
    next(error)
  }
}
const getAllStore = async(req,res,next)=>{
  try {
    const stores= await getAllStores()
    res.json(stores)
  } catch (error) {
    next(error)
  }
}
const getStore = async(req,res,next)=>{
  try {
    const {id} = req.params
    const store= await getDetailStore(id)
    res.json(store)
  } catch (error) {
    next(error)
  }
}
const deleteStore = async(req,res,next)=>{
  try {
    const {id} = req.params
    const store = await deleteOneStore(id)
    res.json(store)
  } catch (error) {
    next(error)
  }
}
const updateStore = async(req,res,next)=>{
  try {
    const {id} = req.params
    const {body} = req
    const store = await deleteOneStore(id,body)
    res.json(store)
  } catch (error) {
    next(error)
  }
}

export {registerStore,getAllStore,getStore,deleteStore,updateStore}

