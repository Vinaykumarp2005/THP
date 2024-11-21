import { createContext } from "react";
import { useState } from "react";
export const loginContextObj=createContext();

function LoginContext({children}){

    const [userLoginStatus,setUserLoginStatus]=useState(false);
    const [currentUser,setCurrentUser]=useState(null);
    const [loginErr,setLoginErr]=useState(null);



    function handleUserLogin({username,password}){

        fetch(`http://localhost:3000/user?username=${username}&password=${password}`,{method:"GET"})
        .then(res=>res.json())
        .then(usersList=>{
          if(usersList.length!==0){
            setUserLoginStatus(true)
           setCurrentUser(usersList[0])
           setLoginErr(null)
        }
          else
          {
            setLoginErr({message:"Invalid Username or Password"})
          }
        }
          ).catch((err)=>{
            setLoginErr(err)
          })
    
      }

    function userLogout(){
      setCurrentUser(null)
      setUserLoginStatus(false)
      setLoginErr(null)
    }




    return(
        <loginContextObj.Provider value={{handleUserLogin,userLogout,userLoginStatus,currentUser,setCurrentUser,loginErr}}>
            {children}
        </loginContextObj.Provider>
    )


}

export default LoginContext








