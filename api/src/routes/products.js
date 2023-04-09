import { Router } from "express";
import { registerProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js"
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router()
router.post('/', checkAuth, checkRol(['admin']), registerProduct)
router.get('/', checkAuth, checkRol(['admin', 'user']), getProducts)
router.get('/:id', checkAuth, checkRol(['admin', 'user']), getProduct)
router.patch('/:id', checkAuth, checkRol(['admin']), updateProduct)
router.delete('/:id', checkAuth, checkRol(['admin']), deleteProduct)

export default { router }