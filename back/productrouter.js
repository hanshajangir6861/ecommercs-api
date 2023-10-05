import express  from "express";
import ProductModals from "./DB/ProductModal.js";


const productrouter= express.Router()

productrouter.get("/", async(req,res)=>{
const existingProduct = await ProductModals.find()
console.log(existingProduct)
    res.json(existingProduct)

})

productrouter.post("/add",async(req,res)=>{
const productToRegister = new ProductModals(req.body)
let result = await productToRegister.save()
console.log(result)
res.json(result)
})
export default productrouter