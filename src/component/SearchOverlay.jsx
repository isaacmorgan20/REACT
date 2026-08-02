import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/productData';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleProductClick = (product) => {
    onClose();
    navigate(`/shop?category=${product.category}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 flex items-start justify-center pt-20">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-3xl hover:text-gray-300 transition-colors duration-200"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="w-full max-w-2xl mx-4">
        {/* Search input */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-6 py-4 text-lg bg-white rounded-xl border-0 outline-none text-gray-800 placeholder-gray-400"
          />
          <i className="fa-solid fa-magnifying-glass absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-4 bg-white rounded-xl max-h-96 overflow-y-auto shadow-xl">
            {results.map(product => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-0 text-left"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                </div>
                <p className="ml-auto font-semibold text-gray-800">${product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>
        )}

        {query.trim() !== '' && results.length === 0 && (
          <div className="mt-4 bg-white rounded-xl p-8 text-center">
            <i className="fa-solid fa-magnifying-glass text-gray-300 text-4xl mb-3"></i>
            <p className="text-gray-500">No products found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
