import React from 'react'
import { useState } from 'react'
import Addtasks from './Addtasks'
import Taskslist from './Taskslist'
import Taskcount from './Taskcount'
function Managetask() {
  let [tasks,setTasks]=useState([]);
  
  function addNewTask(){
    let newNumber=Math.random();
    setTasks([...tasks,newNumber])
  }
  return (
    <div>
        <h1>Todo list</h1>
        {/* next add task,taskcount,tasklist */}
         <div className='d-flex justify-content-between'>  
        <Addtasks addNewTask={addNewTask} />
        <Taskslist tasks={tasks}/>
        <Taskcount tasks={tasks}/>
        </div>

    </div>
  )
}

export default Managetask
