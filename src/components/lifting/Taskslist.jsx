import React from 'react'

function Taskslist(props) {


  return (
    <div>
        <h4>List of tasks</h4>
    {
      props.tasks.map(t=><p className='lead' key={t} >{t}</p>
      )
    }    
    </div>
  )
}

export default Taskslist
