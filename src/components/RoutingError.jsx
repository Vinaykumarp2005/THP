import React from 'react'
import { useRouteError } from 'react-router-dom';
function RoutingError() {
    const routeErr=useRouteError()
    // console.log(err)
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{minHeight:"100vh"}}>
      <p className="display-4 text-danger">{routeErr.data}</p>
   <p className="lead text-warning fs-1">{routeErr.status} - {routeErr.statusText}</p>
    </div>
  )
}

export default RoutingError;
