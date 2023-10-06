import mongoose from "mongoose";


const AdminSchema =new mongoose.Schema({
name:String,
price:String,
category:String,
company:String,


})
const AdminModals= mongoose.model("admin",AdminSchema)

export  default AdminModals