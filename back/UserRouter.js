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






export default userrouter















// const Secretkey = 'hansha-jangir'
// const userrouter = express.Router()




// userrouter.post("/register",async(req,res)=>{
//     let{name ,email,username , password} = req.body

//     bcrypt.hash(password , 10 , async(err,hash)=>{
//         if(err){
//             console.log(err);
//             return null
//         }
//         console.log(hash);
//         password = hash
//         let usertoregister = new UserModals({name ,email, username, password})
//         let result = await usertoregister.save()
//         console.log(result)
//         res.json(result)
//     })
  
// })
// userrouter.post("/login",async(req,res)=>{
//     if(req.body.username && req.body.password){
//         let usertologin = await UserModals.findOne({username:req.body.username})
//         bcrypt.compare(req.body.username , usertologin.password,(err,result)=>{
//             if(err || !result){
//                 res.status(401).json({ message: 'Authentication failed' });
//                 console.log(err, result);
//             }
//             else {
//                 const paylod = {username:usertologin}
//                 const token = Jwt.sign(paylod,Secretkey,{expiresIn:'1h'})
//                 res.send(usertologin ,token)
//             }
            
//         })

//     }


    
// })















// userrouter.post("/register",async(req,res)=>{
//     let usertoregister= new UserModals(req.body)
//     let result = await usertoregister.save()
//     res.json(result)
//     })
    
//     userrouter.post("/login",async(req,res)=>{
//     if(req.body.usename && req.body.password){
//     let usertologin = await UserModals.findOne(req.body).select("-password")
    
//     if(usertologin){
//         res.send(usertologin)
//     }
//     else{
//         res.send({result:"no user found"})
//     }
//     }
//     else{
//         res.send({ result: "Plzz Enter both fields" })
//     }
    
//     })
    




// bcrypt.hash("password",saltRound,(err,hash)=>{
// //     if (err) {
// //         console.error(err);
// //     }
// //     else{
// //           console.log('hashed:password', hash)
// //     }

// // });
// // const HashedStorePassword=''

// // bcrypt.compare('loginpassword',HashedStorePassword.(err,hash)=>{
// //     if(err){
// //         console.log('Password Matched');
// //     }
// // else {
// // console.log('password mismatch')

// // }

// })