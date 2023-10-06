import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productrouter from "./productrouter.js";
import userrouter from "./DB/UserRouter.js";

const app = express()
const connection = mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")

const port = 8080


// app.use(express.urlencoded)
app.use(express.json())
app.use(cors())

app.use("/product", productrouter)
app.use("/user", userrouter)


connection.then(() => {
    app.listen(port, () =>
        console.log("Server started at port " + port))
})
.catch((err) => console.log("DB ERROR: " + err));


