import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Allproduct.css'
import { useNavigate } from 'react-router-dom'



function Allproducts() {
    const [allproduct , setAllproduct] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        showProduct()
    },[])

    const showProduct = async()=>{
        let result = await axios.get("http://localhost:8080/product/")
        setAllproduct(result.data)
        console.log(result);
    }

const productEdit = (id) =>{
    navigate(`/edit/${id}`)
}

const productDelete = async(id) =>{
let result = await axios.delete(`http://localhost:8000/product/del/${id}`)
if (result.data) {
    alert(`Product with ID: ${id} has been deleted`)
    navigate("/AllProducts")
  }
}
  return (
    <div className='allProduct'>
        <h1>All Products</h1>
<div className="pro">
    {allproduct.map((product,index)=>{
        return(
            <div className="products" key={index}>
                <div className="img">
                    <img src={`http://localhost:8080/uploads/${product.image}`} alt="" />
                    <img src={`http://localhost:8000/uploads/${product.image.filename}`} alt="" />

                </div>
                <div className="item">
                    <h2>Product: {product.name}</h2>
                    
                </div>
                <div className="item">
                    <h2>Price: {product.price}</h2>
                   
                </div>
                <div className="item">
                    <h2>Category: {product.category}</h2>
                    
                </div>
                <div className="item">
                    <h2>Company: {product.company}</h2>
                    
                </div>
<button onClick={()=>productEdit(product._id)}>Edit</button>
<button onClick={()=>productDelete(product._id)}>Delete</button>
            </div>
        )
    })}
</div>
    </div>
  )
}

export default Allproducts