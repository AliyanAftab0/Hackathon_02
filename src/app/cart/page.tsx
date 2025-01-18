'use client';
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../components/CartContext';
import { urlFor } from '@/sanity/lib/image';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Safe image URL generator with fallback
  const getImageUrl = (image: any) => {
    try {
      if (!image) return '/placeholder.jpg';
      return urlFor(image).url();
    } catch (error) {
      console.error('Error generating image URL:', error);
      return '/placeholder.jpg';
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-8">
        <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Looks like you haven&apos;t added any items to your cart yet.</p>
        <Link 
          href="/shoplist" 
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center space-x-4 border-b py-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <Image 
                  src={getImageUrl(item.image?.[0])}
                  alt={item.name} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover" 
                  onError={(e: any) => {
                    e.target.src = '/placeholder.jpg';
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                    className="border rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout" className="w-full bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;