import React, { useEffect,useState } from 'react'
import axiosInstance from '../AxiosInstance/Axiosinstance'
import {useNavigate} from "react-router-dom"
const SingleTask = () => {
    const navigate=useNavigate()
    const data=localStorage.getItem("data")    
    const [singleData,setSingleData]= useState([])
    let [status,setStatus]=useState("")
    useEffect(()=>{
            axiosInstance.get(data)
                         .then((res)=>{
                                console.log(res.data)
                                setSingleData([res.data])
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
    },[])

   
   
    console.log(singleData)
  return (

   
    <div>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <table className='table'>
                        <thead>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>            
                        </thead>
                        <tbody>
                        {
                            singleData.map((ele,index)=>{
                                return <tr key={index}>
                                    <td>{ele.title}</td>
                                    <td>{ele.description}</td>
                                    <td>{ele.status}</td>
                                   <td> <input type='checkbox' onClick={()=>{ 
                                    if(status==="incomplete"){
                                       setStatus("complete")
                                    }else{
                                        setStatus("Incomplete")
                                    }                          
                                    axiosInstance.put(data,{
                                       "status":status
                                    })
                                                    .then((res)=>{
                                                        setSingleData([res.data])
                                                    })
                                                    .catch((err)=>{console.log(err)})
                                   }}/></td>
                                   <td><button className='btn btn-primary' onClick={()=>{navigate("/edittask")}}>Edit</button></td>
                                   <td> <button className='btn btn-danger' onClick={()=>{
                                    axiosInstance.delete(data).then((res)=>{
                                        console.log(res)
                                        navigate("/tasklist")
                                    }).catch((err)=>{
                                        console.log(err)
                                    })
                                   }}>Delete</button></td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default SingleTask
