import React from 'react'
import { useState } from 'react'
function Addtasks(props) {

  
  return (
    <div>
      <h3>Add new Task</h3>
      <button className="btn btn-secondary" onClick={props.addNewTask}>Add New</button>
    </div>
  )
}

export default Addtasks
