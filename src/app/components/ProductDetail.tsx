"use client";
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  rating?: number;
  reviews?: number;
  tags?: string[];
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const StarRating = ({ rating = 0, reviews = 0 }) => (
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
        <div className="space-y-4">
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.images?.[selectedImage] || product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <Image 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    width={100} 
                    height={100} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-4">
            {product.tags?.[0] || 'New'}
          </span>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <StarRating rating={product.rating} reviews={product.reviews} />
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Rest of the component remains the same but uses product data */}
        </div>
      </div>

      {/* Description Tabs Section */}
      {/* Similar Products Section */}
    </div>
  );
};

export default ProductDetail;