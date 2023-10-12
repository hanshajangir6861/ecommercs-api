import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [image, setfile] = useState(null)
  const navigate = useNavigate()

  const AddedProduct = async () => {
    console.log({ name, price, category, company, image });
    let result = await axios.post("http://localhost:8080/product/add", { name, price, category, company, image }, {

      headers: {
        "Content-Type": "multipart/form-data"
      }

    })
    result = result.data
    console.log(result)


    if (result.name) {
      alert("Product has been added")
      navigate("/allproducts")
    }
  }



  return (

    <div className='addProduct'>
      <h1>Add Product </h1>
      <form action="">
        <input type="text" placeholder='Name of product' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Price of product' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Category of product' value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder='Company of product' value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="file" onChange={(e) => setfile(e.target.files[0])} />
        <button id='addProductBtn 
' onClick={(e) => {
          e.preventDefault()

          AddedProduct()
        }}>Add the product</button>
      </form>
    </div>
  )
}

export default AddProduct