import React from 'react'
import Register from './assets/pages/Register'
import Login from './assets/pages/Login'
import Home from './assets/pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App