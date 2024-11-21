import React from 'react'

function Taskcount(props) {
  return (
    <div>
      <h2>Task Count</h2>
      <p className='fs-1 text-center'>{props.tasks.length}</p>
    </div>
  )
}

export default Taskcount
