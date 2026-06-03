import express from "express"
import { getCurrentUser } from "../controller/userController.js"
import isAuth from "../middleware/isAuth.js"

let userRoutes = express.Router()

userRoutes.post("/getcurrentuser", isAuth,getCurrentUser)

export default userRoutes