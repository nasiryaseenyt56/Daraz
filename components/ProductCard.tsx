
import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-gray-200 rounded">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <div className="absolute top-0 left-0 bg-daraz-orange text-white text-xs font-bold px-2 py-1">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="text-sm line-clamp-2 min-h-[40px] mb-1 group-hover:text-daraz-orange">
          {product.name}
        </h3>
        
        <div className="mb-1">
          <span className="daraz-orange font-bold text-lg">Rs. {product.price.toLocaleString()}</span>
        </div>
        
        {product.originalPrice > product.price && (
          <div className="text-xs text-gray-400 line-through mb-1">
            Rs. {product.originalPrice.toLocaleString()}
          </div>
        )}
        
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-500">({product.reviews})</span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-full py-2 bg-daraz-orange text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
