import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='Headerclass'>
        <Link to="">Home</Link>
        <Link to="/UserLogin">UserLogin</Link>
        <Link to="/AdminLogin">AdminLogin</Link>

    </div>
  )
}

export default Header