
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { items } = useCart();
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top narrow bar */}
      <div className="bg-gray-100 py-1 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-end space-x-6 text-gray-600">
          <a href="#" className="hover:text-daraz-orange">Become a Seller</a>
          <a href="#" className="hover:text-daraz-orange">Help & Support</a>
          <a href="#" className="hover:text-daraz-orange flex items-center">
             <ShoppingCart size={12} className="mr-1" /> Daraz Affiliate Program
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.hash = '/'}>
            <img 
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1HSU_autEpxNjSZFPXXatpXXa.png" 
              alt="Daraz Logo" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl relative hidden md:block">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full bg-gray-100 border-none rounded px-4 py-2 focus:ring-1 focus:ring-daraz-orange outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="absolute right-0 top-0 bottom-0 bg-daraz-orange text-white px-4 rounded-r hover:bg-orange-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Icons/Actions */}
          <div className="flex items-center space-x-2 md:space-x-8">
            <div className="hidden lg:flex items-center text-gray-700 cursor-pointer hover:text-daraz-orange">
              <User size={22} className="mr-2" />
              <div className="text-sm">
                <p className="font-medium">Login</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center text-gray-700 cursor-pointer hover:text-daraz-orange">
              <Globe size={22} className="mr-2" />
              <div className="text-sm">
                <p className="font-medium">Language</p>
              </div>
            </div>

            <div 
              className="relative cursor-pointer text-gray-700 hover:text-daraz-orange"
              onClick={() => window.location.hash = '/cart'}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-daraz-orange text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden mt-3 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full bg-gray-100 border-none rounded-full px-4 py-2 text-sm outline-none"
            />
            <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Navigation Bar (Desktop) */}
      <div className="border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex space-x-8 text-sm font-medium py-2">
           <a href="#" className="text-daraz-orange">Categories</a>
           <a href="#" className="text-gray-700 hover:text-daraz-orange">Flash Sale</a>
           <a href="#" className="text-gray-700 hover:text-daraz-orange">Daraz Global</a>
           <a href="#" className="text-gray-700 hover:text-daraz-orange">Coins</a>
           <a href="#" className="text-gray-700 hover:text-daraz-orange">Beauty</a>
           <a href="#" className="text-gray-700 hover:text-daraz-orange">Help Center</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
