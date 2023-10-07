import React, { useState, useEffect } from 'react'
// import './Admin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {
  const navigate = useNavigate();
  const [AdminUsername, setAdminUsername] = useState("")
  const [AdminPassword, setAdminPassword] = useState("")

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminData");
    if (adminAuth) {
      navigate("/")
    }
  }, [])

  const loginHandle = async () => {
    // console.log(AdminUsername,AdminPassword);
    let result = await axios.post("http://localhost:8080/admin/login", {
      username: AdminUsername,
      password: AdminPassword
    })
    console.log(result);
    result = result.data
    if (result.username) {
      localStorage.setItem("adminData", JSON.stringify(result))
      navigate("/")
    }
    else {
      alert("Please Enter Correct Detils")
    }
  }

  return (
    <div className='admin'>
      <h1>Admin Login</h1>
      <form action="">
        <input type="text" placeholder='Username' value={AdminUsername} onChange={(e) => setAdminUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={AdminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
        <div className='login-signup-btn-cont'>
          {/* <button className='signupBtn' onClick={() => navigate("/AdminSignup")}>Sign Up</button> */}
          <button type='submit' className='loginBtn'
            onClick={(e) => {
              e.preventDefault();
              loginHandle()
            }}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin






