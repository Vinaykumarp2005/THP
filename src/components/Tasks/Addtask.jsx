import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
function Addtask(props) {
    //setTasks:F
    const [tasks,setTasks]=useState([]);
    const {register,handleSubmit,formState:{errors},reset}=useForm();    
    function addNewTask(taskObj){
        props.setTasks([...props.tasks,taskObj.newTask])
    }
  return (
    <div>
      <h2>Add task</h2>
      <form className='mt-5' onSubmit={handleSubmit(addNewTask)}>
        <input type="text" {...register("newTask")} className='form-control' placeholder='add new task' />
      <button className="btn btn-warning" type='submit'>
      </button>
      </form>

    </div>
  )
}

export default Addtask
