import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { loginContextObj } from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  const {register,handleSubmit,formState:{errors}} =useForm();
  
  const {handleUserLogin,userLoginStatus,currentUser,loginErr}=useContext(loginContextObj)
  
  console.log(useContext(loginContextObj));
  const navigate=useNavigate( );
//navigate to userprofile upon successful login


useEffect(()=>{
  if(userLoginStatus===true){
    navigate(`/user-profile/${currentUser.username}`)
  }
  },[userLoginStatus])

  return (
    <div>
      <h2>Login</h2>


    {
    loginErr!==null && <p className='text-warning text-center'>{loginErr.message}</p>
    
    }
    
    <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleUserLogin)}>
    {/* username */}
    <div className="mb-3">
      <label htmlFor="un" className="form-label">Username</label>
      <input type="text" {...register('username')} id='un' className='form-control' />
    </div>
    <div className="mb-3">
      <label htmlFor="pw" className="form-label">Password</label>
      <input type="password" {...register('password')} id='pw' className='form-control' />
    </div>
    <button className="btn btn-success d-block mx-auto" type='submit'>Login</button>
   </form>
    </div>
  )
}

export default Login


