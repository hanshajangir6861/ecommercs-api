import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './AddProduct.css'
import Home from './Home.jsx'
import Header from './Header.jsx'
import AdminLogin from './AdminLogin.jsx'
import UserLogin from './UserLogin.jsx'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
// import UserSignup from './UserSignUp.jsx'
import Allproducts from './AllProducts'
import AddProduct from './AddProduct.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/UserLogin" element={<UserLogin/>}></Route>
    <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
    <Route path="/AddProduct" element={<AddProduct/>}></Route>
    <Route path="/Allproducts" element={<Allproducts/>}></Route>


    </Routes>

</BrowserRouter>

  
)
