import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Edit.css'

function EditProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [image, setImage] = useState("")
  const [update, setUpdate] = useState("")
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    let result = await axios.get(`http://localhost:8080/product/edit/${params.id}`)
    result = result.data
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
    setImage(result.image)
  }

  const updatedProduct = async () => {
    if (update) {
      let result = await axios.put(`http://localhost:8080/product/edit/${params.id}`, {
        name: name,
        price: price,
        category: category,
        company: company,
        image: update
      },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
    console.log(result)

    }
    if(!update){
      let result = await axios.put(`http://localhost:8080/product/update/${params.id}`,{name,price,category,company,image}, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      )
    }
    alert("Product has been Updated")
    navigate("/allproducts")
  }
  


  return (
    <div className='edit'>
      <h1>Upadte Product</h1>
      <div className="update">
        <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Product Category' value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder='Product Company' value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="file" onChange={(e) => setUpdate(e.target.files[0])} />

        <button onClick={(e) =>{e.preventDefault(); updatedProduct()} }>Update</button>
      </div>
    </div>
  )
}

export default EditProduct