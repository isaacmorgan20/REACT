import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { useToast } from '../component/Toast'

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    showToast(`${product.name} moved to cart!`, 'success');
  };

  const handleRemove = (product) => {
    removeFromWishlist(product.id);
    showToast(`${product.name} removed from wishlist`, 'info');
  };

  return (
    <>
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold">Wishlist</h1>
        <p className="text-gray-500 mt-2">Home / Wishlist</p>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-16">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <i className="fa-regular fa-heart text-gray-200 text-7xl mb-6"></i>
            <p className="text-gray-400 text-2xl mb-4">Your wishlist is empty</p>
            <Link
              to="/shop"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
            {wishlistItems.map(product => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <p className="font-medium">{product.name}</p>
                  <button
                    onClick={() => handleRemove(product)}
                    className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
                <p className="pt-1 text-gray-500 capitalize text-sm">{product.category}</p>
                <p className="pt-1 font-semibold">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default WishlistPage
