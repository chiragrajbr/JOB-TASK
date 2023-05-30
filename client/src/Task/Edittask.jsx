import React from 'react'
import axiosInstance from '../AxiosInstance/Axiosinstance'
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"

const Edittask = () => {
    const data=localStorage.getItem("data")    
    const navigate=useNavigate()
     let [status,setStatus]=useState("")
     let [title,setTitle]=useState("")
     let [description,setDescription]=useState("")
     
    useEffect(()=>{
            axiosInstance.get(data)
                         .then((res)=>{
                                console.log(res.data)
                                setTitle(res.data.title)
                                setDescription(res.data.description)
                                setStatus(res.data.status)
                                
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
    },[])
    console.log(title)
    const onsubmitHandler=(event)=>{
        event.preventDefault()
        axiosInstance.put(data,{
            title:title,
            description:description,
            status:status
        })
        .then((res)=>{
            console.log(res)
            navigate("/singletask")
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
                <form onSubmit={onsubmitHandler} >
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
                          
                          <option value="incomplete">Incomplete</option>
                          <option value="complete">Complete</option>
                   
                        </select>
                    <center>
                      <button className='btn btn-primary mt-3'>Submit</button>
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

export default Edittask
