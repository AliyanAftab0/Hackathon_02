"use client"
import React, { useState } from 'react';
import { Star, Share2, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const productImages = [
    `/about3.1 copy.png`,
    `/about3.2 copy.png`,
    `/about3.3 copy.png`,
    `/about3.4 copy.png`
  ];

  const similarProducts = [
    { 
      id: 1, 
      name: 'Fresh Lime', 
      price: 45.00, 
      rating: 4, 
      image: `/about3 copy.png`
    },
    { 
      id: 2, 
      name: 'Chocolate Muffin', 
      price: 35.00, 
      rating: 4, 
      image: `/about3.1 copy.png`
    },
    { 
      id: 3, 
      name: 'Burger', 
      price: 25.00, 
      rating: 5, 
      image: `/about3.2 copy.png`
    },
    { 
      id: 4, 
      name: 'Fresh Lime', 
      price: 45.00, 
      rating: 4, 
      image: `/about3 copy.png`
    }
  ];

  const StarRating = ({ rating, reviews = 0 }: { rating: number; reviews?: number }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={`${star <= rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
      {reviews > 0 && <span className="text-sm text-gray-500">({reviews} Reviews)</span>}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src={productImages[selectedImage]}
              alt="Yummy Chicken Chup"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-full h-24 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                <Image 
                  src={image} 
                  alt={`Product ${index + 1}`} 
                  width={100} 
                  height={100} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-4">New</span>
          <h1 className="text-3xl font-semibold mb-4">Yummy Chicken Chup</h1>
          <div className="flex items-center space-x-4 mb-6">
            <StarRating rating={4} reviews={12} />
            <span className="text-2xl font-semibold">${(54.00).toFixed(2)}</span>
          </div>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam massa, consequat a tellus sed.
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l"
              >
                +
              </button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded flex items-center space-x-2">
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center space-x-4 mb-2">
              <button className="text-gray-600 hover:text-orange-500 flex items-center space-x-2">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
              <button className="text-gray-600 hover:text-orange-500 flex items-center space-x-2">
                <Share2 size={20} />
                <span>Compare</span>
              </button>
            </div>
            <p className="text-gray-600">Category: Pizza</p>
            <p className="text-gray-600">Tag: Off 10%</p>
            <div className="flex items-center space-x-2 mt-2">
              <span>Share:</span>
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                <button 
                  key={social} 
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-orange-500 transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs Section */}
      <div className="mb-16">
        <div className="border-b">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 relative ${
                activeTab === 'description' 
                  ? 'text-orange-500' 
                  : 'text-gray-600'
              }`}
            >
              Description
              {activeTab === 'description' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 relative ${
                activeTab === 'reviews' 
                  ? 'text-orange-500' 
                  : 'text-gray-600'
              }`}
            >
              Reviews (12)
              {activeTab === 'reviews' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
          </div>
        </div>
        
        <div className="py-8">
          {activeTab === 'description' ? (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam massa, consequat a tellus sed, interdum luctus urna. Vestibulum magna varius justo. Id fermentum velit felis ac tempor.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Words</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Lorem ipsum dolor sit amet, ut lacus a urna tellus rhoncus eu</li>
                  <li>Nam ac mi rutrum ex at tincidunt nulla sit amet dictum ante</li>
                  <li>Curabitur nec eros nibh, a lobortis eros et massa semper congue</li>
                  <li>Etiam non maurci ac tellus facilisis rhoncus</li>
                  <li>Nam a velit ante magna sit tempus</li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold mb-4">Customer Reviews</h3>
              <p className="text-gray-600">No reviews yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {similarProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="w-full h-[300px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <StarRating rating={product.rating} />
              <p className="text-orange-500">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;