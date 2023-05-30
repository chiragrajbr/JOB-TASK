import {useState} from "react"
import axiosInstance from '../AxiosInstance/Axiosinstance'

const Findtask = () => {
    const [searchquery,setSearchQuery]=useState("")
    const [searchresult,setSearchResult]=useState([])
    const [error,setError]=useState("")
    const fetchsearchResult=async(event)=>{
            event.preventDefault()
        try{
             axiosInstance.get(`http://localhost:3009/task/${searchquery.toLowerCase()}`)
             .then((res)=>{
            
                setSearchResult(res.data)
             })
             .catch((err)=>{
                console.log("please enter valid search format")
                setError("please enter valid search format like *alltask,*incompletetask,*completetask")
             })
          
        }
        catch(error){
            console.log(error)
        }
    }
   
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="form-inline my-2 my-lg-0 ">
              <input className="form-control mr-sm-2 mt-4" type="search" value={searchquery} onChange={(event)=>{setSearchQuery(event.target.value)}} placeholder="Search" aria-label="Search" />
              <button className="btn btn-success mt-4 " type="submit"  onClick={fetchsearchResult}>Search</button>
            </form>
            <span>{error}</span>

            <table className="table">
            <thead>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </thead>
            <tbody>
              {
                searchresult.map((ele,index)=>{
                  return <tr key={index}>
                      <td>{ele.title}</td>
                      <td>{ele.description}</td>
                      <td>{ele.status}</td>
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

export default Findtask
