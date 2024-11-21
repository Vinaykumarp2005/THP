import { Link ,Outlet} from "react-router-dom"

function Technologies() {
  return (
    <div className='justify-content-end p-2 bg-light'>
    <ul className="nav">
    <li className="nav-item ">
        <Link className='nav-link' to="java">Java</Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link' to="node">Node</Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link' to="vue">Vue</Link>
        </li>
      </ul>
      {/* placeholder */}
      <Outlet/>
      </div>
  
  )
}

export default Technologies
