"use client"
import React, { useState } from 'react';
import { X, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const initialCartItems = [
  {
    id: 1,
    name: 'Burger',
    price: 25.00,
    rating: 4,
    image: '/about3.2 copy.png',
    quantity: 1,
    width: 93.14,
    height: 97.13,
  },
  {
    id: 2,
    name: 'Fresh Lime',
    price: 25.00,
    rating: 3,
    image: '/about3 copy.png',
    quantity: 1,
    width: 93.14,
    height: 97.13
  },
  {
    id: 3,
    name: 'Pizza',
    price: 15.00,
    rating: 4,
    image: '/about3.3 copy.png',
    quantity: 1,
    width: 93.14,
    height: 97.13
  },
  {
    id: 4,
    name: 'Chocolate Muffin',
    price: 45.00,
    rating: 3,
    image: '/about3.1 copy.png',
    quantity: 1,
    width: 93.14,
    height: 97.13
  },
  {
    id: 5,
    name: 'Cheese Butter',
    price: 15.00,
    rating: 3,
    image: '/about3.4 copy.png',
    quantity: 1,
    width: 93.14,
    height: 97.13
  }
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCharge = 20.00;
  const total = subtotal + shippingCharge;

  const StarRating = ({ rating }: { rating: number }) => {
    return (

      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${star <= rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <section className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Shopping cart</h1>
          <p className="text-[20px] mt-4"><Link href="/" className="text-[#FF9F0D]">Home</Link>&gt; Shopping cart</p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto md:px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Product</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Quantity</th>
                  <th className="text-left py-4">Total</th>
                  <th className="text-left py-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">
                      <div className="md:flex flex-col justify-center items-center space-x-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={item.width}
                          height={item.height}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium max-sm:w-10">{item.name}</h3>
                          <StarRating rating={item.rating} />
                        </div>
                      </div>
                    </td>
                    <td className="py-4">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4 max-sm:pl-8">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            {/* Coupon Code */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Coupon Code</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
              </p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 p-2 border rounded"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
            </div>

            {/* Total Bill */}
            <div>
              <h3 className="font-medium mb-4">Total Bill</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Charge</span>
                  <span>${shippingCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total Amount</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Link href={"/checkout"} className="w-full bg-orange-500 text-white py-3 rounded flex items-center justify-center space-x-2">
                  <span>Proceed to Checkout</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;