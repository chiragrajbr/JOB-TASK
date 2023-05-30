import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"


const Login = () => {
  const navigate=useNavigate()
    const [name,setName]=React.useState("")
    const [password,setPassword]=React.useState("")
    const loginHandler=(event)=>{
      event.preventDefault()
      axios.post("http://localhost:3009/login",{
        name:name,
        password:password
      })
            .then((res)=>{
              const token=res.data.token
              localStorage.setItem("token",token)
              navigate("/tasklist")
              console.log(res)
          })
          .catch((err)=>{
              console.log(err)
          })        

    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <form onSubmit={loginHandler}>
                            <div className='form-group'>
                                <label >Username :</label>
                                <input type="text"  className='form-control' value={name} onChange={(event)=>{setName(event.target.value)}}/>
                            </div>
                            <div className='form-group'>
                                <label >Password :</label>
                                <input type="text"  className='form-control' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                            </div>
                            <center><button className='btn btn-primary my-2'>Submit</button></center>
                            <p className='ml-3'>new user ? <Link to="/signup" >signup</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
