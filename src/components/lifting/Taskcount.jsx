import React from 'react'

function Taskcount(props) {
  return (
    <div>
      <h3>Tasks count</h3>
      <p className="lead">{props.tasks.length}</p>



    </div>
  )
}

export default Taskcount
