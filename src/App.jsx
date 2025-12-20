import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Pages/Product'
import ShoppingCart from './Pages/ShoppingCart'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import ErrorPage from './Pages/ErrorPage'
import About from './Pages/About'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ProductDetails' element={<ProductDetails />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/About/:id' element={<Product/>}/>
      <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App