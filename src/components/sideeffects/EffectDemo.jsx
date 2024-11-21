import { useEffect,useState } from "react";
function EffectDemo() {
    let [counter1,setCounter1]=useState(100);
    
    let [counter2,setCounter2]=useState(200);
   
    useEffect(()=>{
        console.log("use effecr executed")
    },[counter1,counter2]);
    function handleCounter1Change(){
        setCounter1(counter1+1)
    }
    function handleCounter2Change(){
        setCounter2(counter2+1)
    }
  return (
    <div className="container text-center">
      <h1 className="fs-1">Side Effects Demo</h1>
       <h2>Counter :{counter1}</h2>
        <button className="btn btn-warning" onClick={handleCounter1Change}>Change counter state1</button>
        <h2>Counter :{counter2}</h2>
        <button className="btn btn-success" onClick={handleCounter2Change}>Change counter state2</button>
    
    </div>
  )
}

export default EffectDemo
