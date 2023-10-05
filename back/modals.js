import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
    Image:{
        type:String,
        required:true
    
    },
    name:{
        type:String,
    },
    price:{
        type:String,    
    },

})
const ProductModals= mongoose.model("router",productSchema)

export default ProductModals