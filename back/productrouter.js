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
      // console.log(image);
    const productToAdd  = new ProductModals({name, price, category, company,image})
      let result = await productToAdd.save()
      // console.log(productToAdd);
      res.json(result)
  
    }
  );
  
  productrouter.get("/", async(req , res)=>{
let result = await ProductModals.find()
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







