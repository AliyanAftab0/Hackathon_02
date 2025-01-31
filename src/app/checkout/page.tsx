"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '.././components/CartContext';
import { ShoppingBag } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    zipCode: '',
    address1: '',
    address2: '',
  });
  const [useShippingForBilling, setUseShippingForBilling] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Safe image URL generator with fallback
  const getImageUrl = (image: any) => {
    try {
      if (!image) return '/api/placeholder/80/80';
      return urlFor(image).url();
    } catch (error) {
      console.error('Error generating image URL:', error);
      return '/api/placeholder/80/80';
    }
  };

  const calcOrderSummary = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const discount = subtotal >= 200 ? subtotal * 0.1 : 0; // 10% discount over $200
    const tax = (subtotal - discount) * 0.15; // 15% tax
    const total = subtotal - discount + tax + shipping;

    return {
      subtotal,
      shipping,
      discount,
      tax,
      total
    };
  };

  const orderSummary = calcOrderSummary();

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Order submitted:', { formData, cart, orderSummary });
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Shipping Information</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address1"
                required
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useShippingForBilling}
                  onChange={(e) => setUseShippingForBilling(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500"
                />
                <span className="ml-2 text-sm text-gray-600">Billing address same as shipping</span>
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item._id} className="flex items-center space-x-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={getImageUrl(item.image?.[0])}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{orderSummary.shipping === 0 ? 'Free' : `$${orderSummary.shipping.toFixed(2)}`}</span>
                </div>
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${orderSummary.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span>Tax (15%)</span>
                  <span>${orderSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                href="/cart"
                className="flex-1 px-6 py-3 text-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back to Cart
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;