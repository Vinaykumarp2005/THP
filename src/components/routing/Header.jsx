import React from 'react'
import { useContext } from 'react'
import { loginContextObj } from '../../contexts/LoginContext'
import { Link } from 'react-router-dom'
function Header() {

  const {userLoginStatus,userLogout}=useContext(loginContextObj)

  return (
    <div className='justify-content-end p-2 bg-light'>
    <ul className="nav">
    <li className="nav-item ">
        <Link className='nav-link' to="">Home</Link>
    </li>
      <li className="nav-item ">
        <Link className='nav-link' to="register">Register</Link>
        </li>


      {userLoginStatus===false?(
        <li className="nav-item ">
        <Link className='nav-link' to="login">Login</Link>
        </li>):(
        <li className="nav-item ">
        <Link className='nav-link' to="login" onClick={userLogout}>Logout</Link>
        </li>
        )}



        <li className="nav-item ">
        <Link className='nav-link' to="technologies">Technologies</Link>
        </li>
      </ul>
      </div>
  )
}

export default Header
