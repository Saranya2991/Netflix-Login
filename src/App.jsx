import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Dashboard from './Component/Dashboard'
import Login from './Component/Login'


function App() {
  

  return (
    
 <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </>  
  
    
  )
}

export default App
