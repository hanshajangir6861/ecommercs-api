import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserSignup = () => {
    const navigate = useNavigate();
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")

    const RegisterUser = async () => {
        let userdetails={
            name:Name,
            email:Email,
            username:Username,
            password:Password
        }
        let result =await axios.post("http://localhost:8080/user/register", userdetails)
        result=result.data
        if (result.name) {
            alert("New User Registered")
            navigate("/userLogin")
        }
    }

    return (
        <div className='userSignup'>
            <h1>User Sign Up</h1>
            <form action="" >
                <input type="text" placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Username' value={Username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                <div className='login-signup-btn-cont'>
                    <button className='signupBtn' 
                    onClick={(e)=>{
                        e.preventDefault()
                        RegisterUser()
                    }}>Sign Up</button>
                    <button onClick={() => { navigate("/userlogin") }}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default UserSignup