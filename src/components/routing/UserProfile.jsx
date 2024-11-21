import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { useState } from "react";
import { RiSave2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { loginContextObj } from "../../contexts/LoginContext"
function UserProfile() {
   const {currentUser,setCurrentUser}=useContext(loginContextObj)
   const [userEditStaus,setUserEditStatus]=useState(false)
  const {register,handleSubmit,setValue}=useForm()


   function onUserProfileEdit(){
    setUserEditStatus(true);
    //display existing userprofile
    setValue('username',currentUser.username)
    setValue('email',currentUser.email)
    setValue('dob',currentUser.dob)

  }

  function onModifiedUserSave(modifiedUser){
console.log(modifiedUser);

    fetch(`http://localhost:3000/user/${currentUser.id}`,{
      headers:{"content-Type":"application/json"},
      method:"PATCH",
      body:JSON.stringify(modifiedUser)
    })
    .then(res=>res.json())
    .then((editedUser)=> 
  {
   setCurrentUser(editedUser)
   setUserEditStatus(false)
  })
    .catch(err=>console.log(err))
  
  

  }


  return (
    <div>
      <h2>User Profile</h2>
      {
        userEditStaus===false?
          <div className="bg-light rounded-4 p-5 text-danger fs-3 mt-5">
          <p className="fs-1 lead">{currentUser.username} <br />
            {currentUser.dob}
          </p>
          <p>{currentUser.email}</p>
          <button className="btn btn-warning" onClick={onUserProfileEdit}><FaEdit /> Edit Profile</button>
        </div>
        :
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onModifiedUserSave)}>
          
          <input type="text" {...register('username')} id="" className="form-control mb-3" disabled />
        
          <input type="email" {...register('email')} id="" className="form-control mb-3" />
        
          <input type="date" {...register('dob')} id="" className="form-control mb-3" />
        
        <button className="btn btn-success"><RiSave2Line /> Save</button>
        
        </form>

      }



    </div>
  )
}

export default UserProfile

