
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { CATEGORIES, MOCK_PRODUCTS, getIcon } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 5); // 5 hours countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <main className="container mx-auto px-4 py-6 pb-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Sidebar Categories */}
        <div className="hidden lg:block w-64 bg-white rounded shadow-sm py-2">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="group px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer text-xs text-gray-700 hover:text-daraz-orange">
              <div className="flex items-center space-x-2">
                {getIcon(cat.icon)}
                <span>{cat.name}</span>
              </div>
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Main Banner Slider */}
        <div className="flex-grow rounded overflow-hidden shadow-sm h-[300px] md:h-[400px] relative">
          <img 
            src="https://picsum.photos/seed/daraz-hero/1200/600" 
            alt="Promo Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center px-8 md:px-16">
            <div className="text-white max-w-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Great Eid Sale!</h2>
              <p className="text-lg md:text-xl mb-6">Up to 70% off on all major brands. Shop now!</p>
              <button className="bg-daraz-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors">
                Shop the Sale
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="text-daraz-orange mr-2" fill="currentColor" /> Flash Sale
            </h2>
            <div className="flex items-center space-x-2 text-daraz-orange font-bold">
              <span className="text-sm">Ending in</span>
              <div className="flex space-x-1">
                {formatTime(timeLeft).split(':').map((unit, i) => (
                  <span key={i} className="bg-daraz-orange text-white px-1.5 py-0.5 rounded text-sm tabular-nums">
                    {unit}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="text-daraz-orange font-bold text-sm hover:underline border border-daraz-orange px-4 py-1.5 rounded">
            SHOP MORE
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {MOCK_PRODUCTS.filter(p => p.isFlashSale).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 bg-white rounded shadow-sm border border-gray-100">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="flex flex-col items-center justify-center p-4 border-r border-b border-gray-50 hover:shadow-md cursor-pointer transition-shadow group">
              <div className="p-3 bg-gray-50 rounded-full mb-3 text-gray-600 group-hover:text-daraz-orange">
                {getIcon(cat.icon)}
              </div>
              <span className="text-[10px] md:text-xs text-center text-gray-700 font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Just For You Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Just For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate products for filling grid */}
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={`${product.id}-copy`} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-12 py-3 border-2 border-daraz-orange text-daraz-orange font-bold rounded hover:bg-daraz-orange hover:text-white transition-all">
            LOAD MORE
          </button>
        </div>
      </section>

      {/* Footer Branding section */}
      <section className="bg-gray-100 rounded-xl p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200">
        <div className="flex items-center space-x-6">
          <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1HSU_autEpxNjSZFPXXatpXXa.png" className="h-16 hidden md:block" alt="Daraz" />
          <div>
            <h3 className="text-2xl font-bold daraz-orange">Happy Shopping</h3>
            <p className="text-gray-600">Download the app for exclusive deals and discounts</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-12 cursor-pointer" alt="Play Store" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-12 cursor-pointer" alt="App Store" />
        </div>
      </section>
    </main>
  );
};

export default Home;
