import { useState } from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard'

function App(){
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )

}

export default App