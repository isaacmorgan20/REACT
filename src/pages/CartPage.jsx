import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../component/Toast'

const CartPage = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();
  const { showToast } = useToast();

  const handleRemove = (item) => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from cart`, 'info');
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared', 'info');
  };

  return (
    <>
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <p className="text-gray-500 mt-2">Home / Cart</p>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <i className="fa-solid fa-cart-shopping text-gray-200 text-7xl mb-6"></i>
            <p className="text-gray-400 text-2xl mb-4">Your cart is empty</p>
            <Link
              to="/shop"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 text-gray-500 font-medium">Product</th>
                    <th className="text-left py-4 text-gray-500 font-medium">Price</th>
                    <th className="text-left py-4 text-gray-500 font-medium">Quantity</th>
                    <th className="text-left py-4 text-gray-500 font-medium">Total</th>
                    <th className="py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-400 capitalize">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6">${item.price.toFixed(2)}</td>
                      <td className="py-6">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-6 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-6">
                        <button
                          onClick={() => handleRemove(item)}
                          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart summary */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex gap-4">
                <Link
                  to="/shop"
                  className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={handleClearCart}
                  className="border border-gray-300 px-8 py-3 rounded-full hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl min-w-[300px]">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer font-medium"
                  onClick={() => showToast('Checkout coming soon!', 'info')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage
