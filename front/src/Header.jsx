import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
const Admin = localStorage.getItem("adminData")
const User = localStorage.getItem("userData")




  return (
    <div className='Headerclass'>
        <Link to="">Home</Link>

        {
        Admin ?
          <>
            <Link to="/allProducts">All Products</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/edit">Edit Product</Link>

          </> : ""
      }
            {
        User ?
          <>
            <Link to="/allUserProducts">All Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </> : ""

      }
 {
       
       User || Admin ?
         <Link to="/" onClick={() => { localStorage.clear() }}>Logout  </Link>
         :
         <>
           <Link to="/userLogin">Login</Link>
           <Link to="/adminlogin" >Admin Login</Link>
         </>
     }
    </div>
  )
}

export default Header