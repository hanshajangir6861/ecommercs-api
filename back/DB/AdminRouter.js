import express from "express"
import AdminModals from "./AdminModal.js"


const Adminrouter = express.Router()

Adminrouter.post("/register",async(req,res)=>{
let Admintoregister= new AdminModals(req.body)
let result = await Admintoregister.save()
res.json(result)
})

Adminrouter.post("/login",async(req,res)=>{
if(req.body.usename && req.body.password){
let Admintologin = await AdminModals.findOne(req.body).select("-password")

if(Admintologin){
    res.send(Admintologin)
}
else{
    res.send({result:"no user found"})
}
}
else{
    res.send({ result: "Plzz Enter both fields" })
}

})

export default Adminrouter