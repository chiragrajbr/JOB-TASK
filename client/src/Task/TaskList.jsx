import React, { useEffect } from 'react'
import axiosInstance from '../AxiosInstance/Axiosinstance'
import {useNavigate} from "react-router-dom"


const TaskList = () => {
  let data;
  const navigate=useNavigate()
  const[recivedata,setReciveData]=React.useState([])
  
  useEffect(()=>{
    axiosInstance.get("http://localhost:3009/task/alltask")
                  .then((res )=>{
                    setReciveData(res.data)
                  })
                  .catch((err)=>{
                    console.log(err)
                  })
  },[recivedata.title])
  
  return (
    <div>
      
      <div className="container">
        <div className="row">
          
          <div className="col-5"></div>
          <div className="col-2 mt-4">
            <table className='table'>
             <thead>
              <th><h4>ALL TASK</h4></th>
             </thead>
             <tbody>
              {
               recivedata.sort().map((ele,index)=>{
                return  <tr key={index}> 
                <td  onClick={()=>{
                    
                 data=`http://localhost:3009/task/getbyname/${ele.title}`
                   axiosInstance.get(data)
                                .then((res)=>{                           
                                  navigate("/singletask")
                                  localStorage.setItem("data",data)
                                })
                                
                                .catch((err)=>{
                                  console.log(err)
                                })
                }}> {ele.title} </td>

                </tr>
               })
              } 
             
             </tbody>
             
            </table>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TaskList
