import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'

function AddProduct(){
const [name ,setName]=useState("")
const [price ,setPrice]=useState("")
const [category ,setCategory]=useState("")
const [company ,setCompany]=useState("")

const AddedProduct = async()=>{
let result = await axios.post("http://localhost:8080/product/add" , {name,price,category,company})
result = result.data
console.log(result)

}



  return (

    <div className='addProduct'>
<h1>Add Product </h1>
<form action="">
<input type="text" placeholder='name of product'  value={name} onChange={(e)=>setName(e.target.value)}/>
<input type="number" placeholder='price of product' value={price} onChange={(e)=>setPrice(e.target.value)}/>
<input type="text" placeholder='category of product' value={category} onChange={(e)=>setCategory(e.target.value)}/>
<input type="text" placeholder='company of product' value={company} onChange={(e)=>setCompany(e.target.value)}/>
<button onClick={(e)=>{e.preventDefault()
AddedProduct()
}}>Add the product</button>
</form>
    </div>
  )
}

export default AddProduct