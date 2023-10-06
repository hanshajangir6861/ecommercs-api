import express from "express"
import UserModals from "./UserModal.js"


const userrouter = express.Router()

userrouter.post("/register",async(req,res)=>{
let usertoregister= new UserModals(req.body)
let result = await usertoregister.save()
res.json(result)
})

userrouter.post("/login",async(req,res)=>{
if(req.body.usename && req.body.password){
let usertologin = await UserModals.findOne(req.body).select("-password")

if(usertologin){
    res.send(usertologin)
}
else{
    res.send({result:"no user found"})
}
}
else{
    res.send({ result: "Plzz Enter both fields" })
}

})

export default userrouter