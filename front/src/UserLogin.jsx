import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'


function UserLogin() {
    const navigate = useNavigate();
const [username,setUsername] =useState("")
const [password,setPassword] =useState("")

useEffect(()=>{
const userAuth = localStorage.getItem("userData");
if(userAuth){
    navigate("/")
}
},[])



const loginHandle = async()=>{
let result=await axios.post("http://localhost:8080/user/login",{
username:username,
password : password
})
result = result.data


if(result.name){
    loacalStorage.setItem("userData",JSON.stringify(result))
    navigate ("/")
}
else{
    alert("Please Enter Correct Detils")
}
}
  return (
    <>
    <div className='userlogin'>
        <h3>UserLogin</h3>
<form action="">
<input type="text"  placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
<input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
<div className='loginbutton'>
<button className='signup' onClick={()=>navigate("/useSignUp")}>SignUp</button>
<button type='submit' className='loginbtn'  onClick={(e)=>{e.preventDefault()
     loginHandle()}}> Login</button>
</div>

</form>

    </div>
    </>
  )
}

export default UserLogin