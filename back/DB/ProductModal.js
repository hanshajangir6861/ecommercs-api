import mongoose from "mongoose";


const productSchema =new mongoose.Schema({
name:String,
price:String,
category:String,
company:String,
image:Object

})
const ProductModals= mongoose.model("product",productSchema)

export  default ProductModals