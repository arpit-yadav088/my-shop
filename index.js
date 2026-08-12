import express from "express"
import dotenv from "dotenv"
import connectDb from "./Backend/config/db.js"
import cookieParser from "cookie-parser"
import authRoutes from "./Backend/routes/authRoutes.js"
dotenv.config()
import cors from "cors"
import userRoutes from "./Backend/routes/userRoutes.js"
import productRoutes from "./Backend/routes/productRoutes.js"
let port = process.env.PORT || 8000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:5173" , "http://localhost:5174"],
  credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)


app.listen(port,() => {
  console.log("Hello from server")
  connectDb()
})