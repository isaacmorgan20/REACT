import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Shopping from './Pages/Shopping'
import Items from './Pages/Items'
import Details from './Pages/Details'
import ErrorPage from './Pages/ErrorPage'
import NavBar from './Components/NavBar'

const App = () => {
  return ( 
    <div >
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Shopping" element={<Shopping />}/>
    <Route path="/Items" element={<Items />}/>
    <Route path="/Items/:id" element={<Details />}/>
     <Route path="*" element={<ErrorPage />}/>
   </Routes>
  </div>
  )
}

export default App