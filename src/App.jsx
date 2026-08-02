import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { ToastProvider } from './component/Toast'
import Header from './component/Header'
import Title from './component/Title'
import Footer from './component/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'

const App = () => {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <ToastProvider>
            <Header />
            <Title />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
            <Footer />
          </ToastProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  )
}

export default App