//create 
import { createContext } from "react";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
export const counterContextObj=createContext();


function CounterContext({children}){
    //state
    const [counter,setCounter]=useState(100)

    return(
        <counterContextObj.Provider value={{counter,setCounter}}>
            {children}
        </counterContextObj.Provider>

    )
}
export default CounterContext