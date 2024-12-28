"use client"
import React, { useState } from 'react';
import { Star, Share2, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Dimensions for main product images
  const mainImageDimensions = {
    width: 500,
    height: 500
  };

  // Dimensions for thumbnail images
  const thumbnailDimensions = {
    width: 100,
    height: 100
  };

  // Dimensions for similar product images
  const similarProductDimensions = {
    width: 300,
    height: 300
  };

  // Image arrays with dimensions
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
          <div className="w-[500px] h-[500px] rounded-lg overflow-hidden">
            <Image
              src={productImages[selectedImage]}
              alt="Yummy Chicken Chup"
              width={mainImageDimensions.width}
              height={mainImageDimensions.height}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-[100px] h-[100px] rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                <Image src={image} alt={`Product ${index + 1}`} width={100} height={100} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same... */}
        {/* Product Info */}
        <div className="w-[500px]">
          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-4">New</span>
          <h1 className="text-3xl font-semibold mb-4">Yummy Chicken Chup</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam massa, consequat a tellus sed, interdum luctus urna. Vestibulum magna varius justo. Id fermentum velit felis ac tempor.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <StarRating rating={4} reviews={12} />
            <span className="text-2xl font-semibold">$54.00</span>
          </div>

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

          <div className="flex items-center space-x-4 mb-6">
            <button className="text-gray-600 flex items-center space-x-2">
              <Heart size={20} />
              <span>Add to Wishlist</span>
            </button>
            <button className="text-gray-600 flex items-center space-x-2">
              <Share2 size={20} />
              <span>Compare</span>
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-gray-600">Category: Pizza</p>
            <p className="text-gray-600">Tag: Off 10%</p>
            <div className="flex space-x-2 mt-2">
              <span>Share:</span>
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                <button key={social} className="w-8 h-8 rounded-full bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-48">
          {similarProducts.map((product) => (
            <div key={product.id} className="group w-[300px]">
              <div className="w-[300px] h-[300px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={similarProductDimensions.width}
                  height={similarProductDimensions.height}
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