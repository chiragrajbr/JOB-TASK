import React from 'react'
import {Link, useNavigate} from "react-router-dom"


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div >
      <div className="container-fluid">
        <nav className='navbar navbar-expand-lg bg-info'>
          <div className='navbar navbar-brand text-white '>ALL TASK</div>
          <div className='ml-auto'>
          <ul className='navbar-nav'>
          {
              localStorage.getItem("token")?  <li className='nav-item'><Link to={"/tasklist"} className='nav-link text-white'>Tasks</Link></li>:<></>
            }
            {
              localStorage.getItem("token")?  <li className='nav-item'><Link to={"/createtask"} className='nav-link text-white mr-3'>CreteTask</Link></li>:<></>
            }
            {
              localStorage.getItem("token")?  <li className='nav-item'><Link to={"/findtask"} className='nav-link text-white mr-3'>Find task</Link></li>:<></>
            }
            
            {
              localStorage.getItem("token")?  <li className='nav-item'><Link  to={"/login"} className='nav-link text-white mr-4' onClick={()=>{localStorage.removeItem("token") 
              navigate("/")}}>logout</Link></li>  :
              <li className='nav-item'><Link to={"/login"} className='nav-link text-white mr-3'>login</Link></li>
            }
            
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
