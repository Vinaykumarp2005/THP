import React, { useState } from 'react'
import Addtask from './Addtask'
import Taskcount from './Taskcount'
import Tasklist from './Tasklist'

function Managetask() {
    const [tasks,setTasks]=useState([])

  return (
    <div >
    <h2>Task Management System</h2>
    <div className="d-flex">
    <Addtask tasks={tasks} setTasks={setTasks} />
    <Tasklist tasks={tasks}/>
    <Taskcount tasks={tasks}/>
    </div>
    </div>
  )
}

export default Managetask
