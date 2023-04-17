import storeSchema from "../models/Store.js"

const createStore = async(data) => {
  const {
      name,
      description,
      phone,
      address,
      location,
      imgUrl
  } = data
  const newStore = {
      name,
      description,
      phone,
      address,
      location,
      imgUrl
  }
  const response = await storeSchema.create(newStore)
  return response
}
const getDetailStore = async(id) => {
  const response = await storeSchema.findOne({ _id: id })
  return response
}

const getAllStores = async() => {
  const response = await storeSchema.find()
  return response
}

const updateOneStore = async(id, data) => {
  const response = await storeSchema.findOneAndUpdate({ _id: id }, data, { new: true })
  return response

}
const deleteOneStore = async(id) => {
  const response = await storeSchema.deleteOne({ _id: id })
  return response
}

export { createStore, getDetailStore, getAllStores, updateOneStore, deleteOneStore }