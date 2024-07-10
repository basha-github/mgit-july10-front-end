import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddEmp from './components/AddEmp'
import ContactUs from './components/ContactUs'

export default function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route  path='/myrevanthHome' element={<Home />}/>
  <Route  path='/' element={<Login />}/>
  <Route  path='/add' element={<AddEmp />}/>
  <Route  path='/contact' element={<ContactUs />}/>
  
</Routes>
</BrowserRouter>
      
    </div>
  )
}
