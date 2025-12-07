import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Dashboard from './Component/Dashboard'
import Login from './Component/Login'
import Fail from "./Component/Fail"

function App() {
  

  return (
    
 <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/fail' element={<Fail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>  
  
    
  )
}

export default App
