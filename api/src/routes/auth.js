import {Router} from "express"
import {registerUser,loginUser,meUser} from "../controllers/auth.controller.js"
import checkAuth from "../middleware/checkAuth.js"
import checkRol from "../middleware/checkRol.js"
const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    newUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: nombre del usuario
 *        lastName:
 *          type: string
 *          description: apellido del usuario
 *        email:
 *          type: string
 *          description: corre email de usuario
 *        dateOfBirth:
 *          type: string
 *          description: fecha de nacimiento del usuario 
 *        password:
 *          type: string
 *          description: password del usuario
 *        role:
 *          type: string
 *          description: rol del usuario tenemos admin y user
 *        imgURL:
 *          type: string
 *          description: imagen del usuario
 *      required:
 *        - name
 *        - lastName
 *        - email
 *        - dateOfBirth
 *        - password
 *      example:
 *        name: jhon doe
 *        lastName: paredez diaz
 *        email: correo@gmail.com   
 *        dateOfBirth: 28-08-1990
 *        password: admin1234@
 *        role: admin
 *        imgURL: http://imagesn.com/images.jpg
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Crea un nuevo usuario
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/newUser'
 *    responses:
 *      200:
 *        description: nuevo usuario creado
 */
router.post('/register',registerUser)

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login de Usuario existente
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: email con el que se registro el usuario
 *              password:
 *                type: string
 *                description: passwork con el que se creo el usuario
 *            required:
 *              - email
 *              - password
 *            example:
 *              email: correo@gmail.com   
 *              password: admin1234@
 *    responses:
 *      200:
 *        description: usuario logeado
 */
router.post('/login',loginUser)

/**
 * @swagger
 * /auth/me:
 *  get:
 *    ApiKeyAuth:
 *      type: apiKey
 *      in: header
 *      name: X-API-KEY
 *      required: true
 *    summary: Datos de usuario logeado
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: email con el que se registro el usuario
 *              password:
 *                type: string
 *                description: passwork con el que se creo el usuario
 *            required:
 *              - email
 *              - password
 *            example:
 *              email: correo@gmail.com   
 *              password: admin1234@
 *    responses:
 *      200:
 *        description: usuario logeado
 */
router.get('/me',checkAuth,checkRol(['admin','user']),meUser)

export default {router}

