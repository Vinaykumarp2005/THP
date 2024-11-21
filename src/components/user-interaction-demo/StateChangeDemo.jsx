import { useState } from "react";
function StateChangeDemo(){
    // let a=10;
    let [a,setA]=useState(10);
    // console.log(result)
    function handlestate(){
        // console.log("a is",a)
        // a=a+1;
        setA(a+1);
    }
    let [person,setPerson]=useState({pid:100,name:"vikas",city:"Hyd"})
    function handlePerson(){
        setPerson({...person,pid:200,name:"vinay"})
    }
    function handledec()
    {

    }
    return (
        <div className="text-center">
            <h1> State Change</h1>
            <h1>Value of a is {a}</h1>

            <button className="btn btn-success" onClick={handlestate}>Change Name</button>
        <h3>{person.pid}</h3>
        <h3>{person.name}</h3>
        <h3>{person.city}</h3>
            <button className="btn btn-success" onClick={handlePerson}>Change Person </button>

        </div>
    )
}

export default StateChangeDemo;