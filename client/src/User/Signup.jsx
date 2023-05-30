import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Signup = () => {
    const navigate=useNavigate()
    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")



   
    const signupHandler=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3009/register",{
            "name":name,
            "email":email,
            "password":password
        })
        .then((res)=>{
            if(res.data.error){
                console.log(res.data)
                alert(res.data.error)
            }
            else{
                console.log(res.data)
            }
            
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
                        <form onSubmit={signupHandler}>
                            <div className='form-group'>
                                <label >username :</label>
                                <input type="text"  className='form-control ' value={name} onChange={(event)=>{setName(event.target.value)}} required/>
                            </div>
                            <div className='form-group'>
                                <label >email :</label>
                                <input type="text"  className='form-control' value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
                                
                            </div>
                            <div className='form-group'>
                                <label >password :</label>
                                <input type="text"  className='form-control' value={password}   onChange={(event)=>{   setPassword(event.target.value)       }}  required/>
                               
                            </div>
                            <center><button className='btn btn-primary my-2' onClick={()=>{
                                if(password.length>5){
                                    if(!/[a-z]/.test(password) || !/[A-Z]/.test(password)){
                                        alert ("should conatin one upper case")
                                    }else{
                                        navigate("/login")
                                    }
                                }else{
                                    alert ("password should contain atleast 6 character")
                                }
                            }}>register</button></center>
                            <p className='ml-3'>existing user ? <Link to="/login" >login</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
