import React from 'react'

function Tasklist(props) {
    // taska:[]
  return (
    <div>
      <h2>Task Count</h2>
      {
        props.tasks.map((task,index)=><p className='fs-2' key={index}>{task}</p>)
      }
    </div>
  )
}

export default Tasklist
