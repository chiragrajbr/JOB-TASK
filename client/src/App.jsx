import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Login from './User/Login'
import Signup from './User/Signup'
import TaskList from './Task/TaskList'
import Createtask from './Task/Createtask'
import SingleTask from './Task/SingleTask'
import Edittask from './Task/Edittask'
import Findtask from './Task/Findtask'

const App = () => {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/tasklist' element={<TaskList />}/>
            <Route path='/createtask' element={<Createtask />}/>
            <Route path='/singletask' element={<SingleTask />}/>
            <Route path='/edittask' element={<Edittask />}/>
            <Route path='/findtask' element={<Findtask />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
