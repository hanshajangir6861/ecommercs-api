import express from "express"
import AdminModals from "./AdminModal.js"
import bcrypt from 'bcrypt'

const AdminRouter = express.Router()

AdminRouter.post("/register", async (req, res) => {
    bcrypt.hash(password, 10, async (err,hash) => {
         if(err){
            console.log()
            return null
         }
console.log(hash)

password = hash
let Admintoregister = new AdminModals({name,email ,username,password})
let result = new AdminModals.save()
console.log(result)
        res.json(result)
    })
    // let Admintoregister = new AdminModals(req.body)
    // let result = await Admintoregister.save()
    // res.json(result)
})

AdminRouter.post("/login", async (req, res) => {
    let{name, email,username, password} = req.body

    if (req.body.username && req.body.password) {
        // let Admintologin = await AdminModals.findOne(req.body).select("-password")

        let admintologin  = await AdminModals.findOne({username:req.body.username})

        bcrypt.compare(req.body.username , admintologin.password,(err,result)=>{
            if(err || !result){
                                res.status(401).json({ message: 'Authentication failed' });
                                console.log(err, result);
                               else {
//                 const paylod = {username:admintologin}
//                 const token = Jwt.sign(paylod,Secretkey,{expiresIn:'1h'})
//                 // console.log("Matched");
//                 res.send(admintologin ,token)
//             }
            
//         })

//     }

// })


        console.log(Admintologin);

        if (Admintologin) {
            res.send(Admintologin)
        }
        else {
            res.send({ result: "no user found" })
        }
    }
    else {
        res.send({ result: "Plzz Enter both fields" })
    }

})

export default AdminRouter





// import express from "express"
// import AdminModals from "./AdminModal.js"
// import bcrypt from 'bcrypt'
// import Jwt from 'jsonwebtoken'

// const Secretkey = 'hansha-jangir'
// const AdminRouter = express.Router()



// AdminRouter.post("/register", async (req, res) => {
//     let { name, email, username, password } = req.body
//     bcrypt.hash(password, 10, async (err, hash) => {

//         if (err) {
//             console.log(err)
//             return null
//         }
//         console.log(hash)
    
//         password = hash
//         let Admintoregister = new AdminModals({ name, email, username, password })
//         let result = await Admintoregister.save()
//         console.log(result)
//         res.json(result)
// })
// })

// AdminRouter.post("/login",async(req,res)=>{

//     // let{name ,email,username , password} = req.body
//     if(req.body.username && req.body.password){
//         let admintologin  = await AdminModals.findOne({username:req.body.username})
//         bcrypt.compare(req.body.username , admintologin.password,(err,result)=>{
//             if(err || !result){
//                 res.status(401).json({ message: 'Authentication failed' });
//                 console.log(err, result);
//             }
//             else {
//                 const paylod = {username:admintologin}
//                 const token = Jwt.sign(paylod,Secretkey,{expiresIn:'1h'})
//                 // console.log("Matched");
//                 res.send(admintologin ,token)
//             }
            
//         })

//     }

// })


//npm init
//npm i express
///  npm i swapper jsdoc
///swapper-ui-express




// import express from "express"
// import AdminModals from "./AdminModal.js"
// import bcrypt from 'bcrypt'
// import Jwt from 'jsonwebtoken'


// const Secretkey = 'hansha-jangir'

// const AdminRouter = express.Router();

// AdminRouter.post("/register",async(req,res)=>{
//     let{name ,email,username , password} = req.body
//     bcrypt.hash(password , 10 , async(err,hash)=>{
//         if(err){
//             console.log(err);
//             return null
//         }
//         console.log(hash);
//         password = hash
//         let UsertoRegister = new AdminModals({name ,email, username, password})
//         let result = await UsertoRegister.save()
//         console.log(result)
//         res.json(result)
//     })
   
// })

// AdminRouter.post("/login",async(req,res)=>{

//     // let{name ,email,username , password} = req.body
//     if(req.body.username && req.body.password){
//         let admintologin  = await AdminModals.findOne({username:req.body.username})
//         bcrypt.compare(req.body.username , admintologin.password,(err,result)=>{
//             if(err || !result){
//                 res.status(401).json({ message: 'Authentication failed' });
//                 console.log(err, result);
//             }
//             else {
//                 const paylod = {username:admintologin}
//                 const token = Jwt.sign(paylod,Secretkey,{expiresIn:'1h'})
//                 // console.log("Matched");
//                 res.send(admintologin ,token)
//             }
            
      
//         })
//     }

//     })


















// AdminRouter.post("/login", async (req, res) => {
//     // let{name, email,username, password} = req.body
//     if (req.body.username && req.body.password) {
//         let Admintologin = await AdminModals.findOne(req.body).select("-password")
//         console.log(Admintologin);
//         if (Admintologin) {
//             res.send(Admintologin)
//         }
//         else {
//             res.send({ result: "no user found" })
//         }
//     }
//     else {
//         res.send({ result: "Plzz Enter both fields" })
//     }

// })