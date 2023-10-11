import express from "express";
import ProductModals from "./DB/ProductModal.js";
import multer from "multer";
import path from "path";


const productrouter = express.Router()


const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
      const ext = path.extname(file.originalname);
      const filename = req.body.name + ext;
      callback(null, filename);
    },
  })
  const upload = multer({ storage: storage });
  
  productrouter.post("/add",upload.single("image"), async (req, res) => {
      const { name, price, category, company } = req.body;
      const image = req.file;
    const productToAdd  = new ProductModals({name, price, category, company,image})
      let result = await productToAdd.save()
      res.json(result)
  
    }
  );
  
  productrouter.get("/", async(req , res)=>{
let result = await productrouter.find()
res.json(result)
})

productrouter.delete("/del/:id", async(req, res) => {
  const productToDelete = req.params.id;
  let result = await ProductModals.deleteOne({ _id: productToDelete})
  res.json(result);
})

productrouter.get("/edit/:id", async (req, res) => {
  let result = await ProductModals.findOne({ _id: req.params.id })
  if (result) {
      res.json(result)
  } else {
      res.send({ Result: "No Product Found" })
  }
})

productrouter.put("/update/:id", upload.single("image"), async (req, res) => {
  const { name, price, category, company } = req.body
  let image = req.file
  const productToUpdate = { name, price, category, company, image }
  let result = await ProductModals.updateOne(
      { _id: req.params.id },
      {
          $set: productToUpdate
      }
  )
  res.json(result)
})


export default productrouter







// import express  from "express";
// import ProductModals from "./DB/ProductModal.js";


// const productrouter= express.Router()

// productrouter.get("/", async(req,res)=>{
// const existingProduct = await ProductModals.find()
// console.log(existingProduct)
//     res.json(existingProduct)

// })

// productrouter.post("/add",async(req,res)=>{
// const productToRegister = new ProductModals(req.body)
// let result = await productToRegister.save()
// console.log(result)
// res.json(result)
// })
// export default productrouter