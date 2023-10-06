import mongoose from "mongoose";


const UserSchema =new mongoose.Schema({
name:String,
price:String,
category:String,
company:String,


})
const UserModals= mongoose.model("user",UserSchema)

export  default UserModals