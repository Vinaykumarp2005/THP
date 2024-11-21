import React, { useState } from 'react'
import Test2 from './Test2';
function Test1() {
    let [counter,setCounter]=useState(100);
   let [dataFromChild,setDataFromChild]=useState("")
    function handleCounterInc(){
        setCounter(counter+1);
    }
    function getChild(data){
        // <h1>Data from child {username}</h1>
        setDataFromChild(data)
    }
  return (
    <div className='bg-secondary p-5 '>
      <p className='display-2'>Parent</p>
      <h2>Counter {counter}</h2>
    <button className="btn btn-warning" onClick={handleCounterInc}>+</button>
    <Test2 counter={counter} handleCounterInc={handleCounterInc}
    getChild={getChild}
    />
    </div>
  )
}

export default Test1
