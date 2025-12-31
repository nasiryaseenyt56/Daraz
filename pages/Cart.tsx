
import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-100 max-w-lg mx-auto">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <button 
            onClick={() => window.location.hash = '/'}
            className="bg-daraz-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <button onClick={() => window.location.hash = '/'} className="mr-4 text-gray-600 hover:text-daraz-orange">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Shopping Cart ({items.length})</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-grow space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 hidden md:grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase">
            <div className="col-span-6">Item details</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow-sm border border-gray-100 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-6 flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-gray-400">Category: {item.category}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 text-xs flex items-center mt-2"
                  >
                    <Trash2 size={14} className="mr-1" /> Remove
                  </button>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 text-center font-bold text-daraz-orange">
                Rs. {item.price.toLocaleString()}
              </div>

              <div className="col-span-4 md:col-span-2 flex justify-center">
                <div className="flex items-center border border-gray-200 rounded">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 text-gray-600"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 text-gray-600"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 text-right font-bold text-gray-800">
                Rs. {(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                <span className="font-bold">Rs. {totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee Discount</span>
                <span className="text-gray-400">Rs. 0</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-daraz-orange">Rs. {totalAmount.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-1">VAT included, where applicable</p>
            </div>

            <button className="w-full bg-daraz-orange text-white py-4 rounded font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-4 opacity-50 grayscale scale-75">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
