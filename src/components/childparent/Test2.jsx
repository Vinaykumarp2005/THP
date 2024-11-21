import React, { useState } from 'react'

function Test2(props) {

    let [username,setUsername]=useState('mastercoding');
function handleUsernameChange(){
    setUsername('Vinay Kumar')
}

  return (
    <div className='bg-success p-5'>
        <h1>Child</h1>
        <p className='display-5'>Data recieved from Parent is {props.counter}</p>
        <button className="btn btn-primary"onClick={props.handleCounterInc} >Change parent state</button>
        <h1>Username {username}</h1>
      <button className=" btn btn-outline-warning" onClick={handleUsernameChange}>Change Username</button>
    <button className="btn btn-outline-danger" onClick={()=>props.getChild(username)}>Send Data to parent</button>
    </div>
  )
}

export default Test2
