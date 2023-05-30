import React from 'react'
import axiosInstance from '../AxiosInstance/Axiosinstance'
import {useNavigate} from "react-router-dom"

const Createtask = () => {
  const navigate=useNavigate()
  const [title,setTitle]=React.useState("")
  const [description,setDescription]=React.useState("")
  const [status,setStatus]=React.useState(false)
  const submitHandler=(event)=>{
    event.preventDefault()
    axiosInstance.post("http://localhost:3009/task/create",{
      title:title,
      description:description,
      status:status
    })
    .then((response)=>{
      console.log(response)
      navigate("/tasklist")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  console.log(status)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card mt-4">
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className='form-group'>
                  <label >TITLE</label>
                  <input type="text" className='form-control' value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
                  </div>
                  <div className='form-group'>
                  <label >DESCRIPTION</label>
                  <textarea   className='form-control' value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
                  </div>
                  <div className='form-check'>
                    
                      
                        <label >STATUS</label>
                        <select className='ml-3' onChange={(e)=>{
                          setStatus(e.target.value)
                        }}>
                          <option value=""></option>
                          <option value="incomplete">Incomplete</option>
                          <option value="complete">Complete</option>
                   
                        </select>
                    <center>
                      <button className='btn btn-primary mt-3'>Create</button>
                    </center>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createtask
