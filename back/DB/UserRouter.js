import express from "express"
import UserModals from "./UserModal.js"
// import bcrypt from "bcrypt"

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

// const saltRound = 10;

// bcrypt.hash("password",saltRound,(err,hash)=>{
//     if (err) {
//         console.error(err);
//     }
//     else{
//           console.log('hashed:password', hash)
//     }

// });
// const HashedStorePassword=''

// bcrypt.compare('loginpassword',HashedStorePassword.(err,hash)=>{
//     if(err){
//         console.log('Password Matched');
//     }
// else {
// console.log('password mismatch')

// }

// })


export default userrouter