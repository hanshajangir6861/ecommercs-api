import express from "express"
import AdminModals from "./AdminModal.js"

const AdminRouter = express.Router()

AdminRouter.post("/register", async (req, res) => {
    let Admintoregister = new AdminModals(req.body)
    let result = await Admintoregister.save()
    res.json(result)
})

AdminRouter.post("/login", async (req, res) => {
    // let{name, email,username, password} = req.body
    if (req.body.username && req.body.password) {
        let Admintologin = await AdminModals.findOne(req.body).select("-password")
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