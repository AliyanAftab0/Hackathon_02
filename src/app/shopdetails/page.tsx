"use client"
import React, { useEffect, useState } from 'react';
import { Share2, Heart, ShoppingCart, ShoppingBag, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { StarRating } from '../components/StarRating';
import { useCart } from '../components/CartContext';
import { Product } from '@/types/types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const ProductDetail = () => {
  const query = `*[_type == "food" && available == true] {
    _id,
    name,
    price,
    description,
    "image": [image, image2, image3, image4],
    category,
    available,
    originalPrice,
    tags
  }`;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { addToCart } = useCart();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await client.fetch(query);
        setProduct(result[0] || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: [product.image[0]],
        quantity,
        description: product.description,
        category: product.category,
        available: product.available,
        tags: product.tags,
        originalPrice: product.originalPrice,
      }, quantity);
      setIsPopoverOpen(true);
    }
  };

  if (isLoading) {
    return <div className="max-w-6xl h-screen mx-auto px-4 py-8">Loading...</div>;
  }

  if (!product) {
    return <div className="max-w-6xl mx-auto px-4 py-8">No product found</div>;
  }

  const validImage = product.image.filter(img => img);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gray-100">
            {validImage.length > 0 ? (
              validImage[selectedImageIndex] ? (
                <Image
                  src={urlFor(validImage[selectedImageIndex]).url()}
                  alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Image not available
                </div>
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No image available
              </div>
            )}
          </div>

          {validImage.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {validImage.map((image, index) => (
                image && (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-full h-24 rounded-lg overflow-hidden border-2 
                      ${selectedImageIndex === index ? 'border-orange-500' : 'border-transparent'}`}
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-4">
            New
          </span>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <span className="flex space-y-2 gap-2 text-2xl font-semibold">
              {product.price.toFixed(2)}
              <del className='text-red-500 text-xl'>${product.originalPrice}</del>
            </span>
              <StarRating rating={4} reviews={12} />
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l"
              >
                <Plus size={16} />
              </button>
            </div>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <button
                  onClick={handleAddToCart}
                  className="bg-orange-500 text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-orange-600 transition-colors"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <ShoppingBag className="text-green-500" />
                    <div className="grid gap-1">
                      <h4 className="font-semibold">Added to Cart!</h4>
                      <p className="text-sm text-gray-500">
                        {quantity} x {product.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/cart"
                      className="flex-1 bg-orange-500 text-white px-4 py-2 rounded text-center hover:bg-orange-600 transition-colors"
                    >
                      Go to Checkout
                    </Link>
                    <button
                      onClick={() => setIsPopoverOpen(false)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                    >
                      Keep Shopping
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Tag: {product.tags}</p>
          </div>
        </div>
      </div>

      {/* Description Tabs Section */}
      <div className="mb-16">
        <div className="border-b">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 relative ${activeTab === 'description' ? 'text-orange-500' : 'text-gray-600'
                }`}
            >
              Description
              {activeTab === 'description' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 relative ${activeTab === 'reviews' ? 'text-orange-500' : 'text-gray-600'
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
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Fresh ingredients daily</li>
                  <li>Prepared by expert chefs</li>
                  <li>Available for delivery</li>
                  <li>Customizable options</li>
                  <li>Perfect for sharing</li>
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