import React, { useState, useMemo } from 'react'
import products from '../data/productData'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useToast } from './Toast'

const ITEMS_PER_PAGE = 8;
const ITEMS_INCREMENT = 4;

const categories = ['all', 'women', 'men', 'bag', 'shoes', 'watches'];

const Product = ({ initialCategory = 'all', showSearch = true }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  // Filter products by category, search query, and price range
  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (showFilter) {
      result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    }

    return result;
  }, [activeCategory, searchQuery, showFilter, priceRange]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_INCREMENT);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleToggleWishlist = (product) => {
    const wasWishlisted = isWishlisted(product.id);
    toggleWishlist(product);
    showToast(
      wasWishlisted ? `${product.name} removed from wishlist` : `${product.name} added to wishlist!`,
      wasWishlisted ? 'info' : 'success'
    );
  };

  return (
    <>
      <section>
        {/* <!-- item --> */}
        <div className="py-30 lg:mx-20 md:mx-5 mx-5">
            {/* <!-- product --> */}
            <div>
                <p className="font-bold lg:text-5xl md:text-5xl text-6xl">Product Overview</p>
            </div>
             {/* <!-- flex --> */}
            <div className="lg:flex lg:justify-between md:flex md:justify-between items-center pt-10">
                {/* <!-- category tabs --> */}
                <div className="flex lg:space-x-10 md:space-x-7 space-x-3 md:text-lg text-sm">
                    {categories.map(cat => (
                      <p
                        key={cat}
                        className={`hover:underline cursor-pointer capitalize transition-colors duration-200 ${
                          activeCategory === cat ? 'text-blue-500 underline font-semibold' : ''
                        }`}
                        onClick={() => handleCategoryChange(cat)}
                      >
                        {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </p>
                    ))}
                </div>
                {/* <!-- buttons --> */}
                <div className="flex space-x-7 pt-4 md:pt-0 lg:pt-0">
                    <button
                      className={`border-1 border-gray-300 p-2 px-9 rounded-md hover:bg-blue-300 duration-800 cursor-pointer transition-colors ${
                        showFilter ? 'bg-blue-500 text-white' : ''
                      }`}
                      onClick={() => setShowFilter(prev => !prev)}
                    >
                      Filter
                    </button>
                    <button
                      className={`border-1 border-gray-300 p-2 px-9 rounded-md hover:bg-blue-300 duration-800 cursor-pointer transition-colors ${
                        showSearchInput ? 'bg-blue-500 text-white' : ''
                      }`}
                      onClick={() => setShowSearchInput(prev => !prev)}
                    >
                      <i className="fa-solid fa-magnifying-glass mr-1"></i>Search
                    </button>
                </div>
            </div>

            {/* Search input */}
            {showSearchInput && (
              <div className="mt-6 animate-[slideDown_0.2s_ease-out]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  placeholder="Search products by name..."
                  className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                  autoFocus
                />
              </div>
            )}

            {/* Filter panel */}
            {showFilter && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-[slideDown_0.2s_ease-out]">
                <p className="font-semibold mb-3">Price Range: ${priceRange[0]} — ${priceRange[1]}</p>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
            )}

            {/* <!-- products grid --> */}
            <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-5 gap-5 pt-10">
                {visibleProducts.map(product => (
                  <div key={product.id} className="group relative">
                    {/* Product image with hover overlay */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Add to cart overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <p>{product.name}</p>
                      <button
                        onClick={() => handleToggleWishlist(product)}
                        className="cursor-pointer transition-colors duration-200 hover:scale-110 transform"
                      >
                        <i className={`${isWishlisted(product.id) ? 'fa-solid text-red-500' : 'fa-regular text-gray-400'} fa-heart`}></i>
                      </button>
                    </div>
                    <p className="pt-2 font-semibold">${product.price.toFixed(2)}</p>
                  </div>
                ))}
            </div>

            {/* No results message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <i className="fa-solid fa-box-open text-gray-200 text-6xl mb-4"></i>
                <p className="text-gray-400 text-xl">No products found</p>
              </div>
            )}

            {/* Load More button */}
            {hasMore && (
              <div className="text-center pt-20">
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-300 px-15 p-3 rounded-full hover:bg-black duration-300 hover:text-white cursor-pointer"
                >
                  Load More
                </button>
              </div>
            )}
        </div>
       </section>
    </>
  )
}

export default Product