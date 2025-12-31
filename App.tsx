
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import GeminiAssistant from './components/GeminiAssistant';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/cart':
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow bg-[#f5f5f5]">
          {renderPage()}
        </div>
        
        {/* Footer */}
        <footer className="bg-[#2e2e2e] text-gray-400 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">How to Buy</a></li>
                <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Daraz</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Digital Payments</a></li>
                <li><a href="#" className="hover:text-white">Daraz Donates</a></li>
                <li><a href="#" className="hover:text-white">Daraz Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Make Money With Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Sell on Daraz</a></li>
                <li><a href="#" className="hover:text-white">Join Affiliate Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-daraz-orange cursor-pointer">F</div>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-daraz-orange cursor-pointer">T</div>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-daraz-orange cursor-pointer">I</div>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-daraz-orange cursor-pointer">Y</div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 border-t border-gray-700 mt-10 pt-6 text-center text-xs">
            <p>&copy; 2024 Daraz Clone. All rights reserved. Created for demonstration.</p>
          </div>
        </footer>

        {/* AI Assistant */}
        <GeminiAssistant />
      </div>
    </CartProvider>
  );
};

export default App;
