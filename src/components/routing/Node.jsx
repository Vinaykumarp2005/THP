import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../../contexts/CounterContext'
function Node() {

const {counter,setCounter}=useContext(counterContextObj)

  return (
    <div>
      <h1>Node</h1>
      <h1>Counter :{counter}</h1>
      <button className="btn btn-warning" onClick={()=>setCounter(counter-1)}>Decrement</button>
    
    </div>
  )
}

export default Node
