import express from 'express'
import upload from '../middleware/multer'
import { addProduct } from '../controller/productController'

let productRoutes = express.Router()

productRoutes.post("/addproduct",upload.fields([
  {name:"image1",maxCount:1},
  {name:"image2",maxCount:1},
  {name:"image3",maxCount:1},
  {name:"image4",maxCount:1},
]),addProduct)

export default productRoutes;