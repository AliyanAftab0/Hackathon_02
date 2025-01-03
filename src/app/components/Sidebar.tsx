"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from 'lucide-react';

const products = [
    { id: 1, name: 'Fresh Lime', price: 45.00, category: 'Drinks', image: '/about3 copy.png', width: 312, height: 267 },
    { id: 2, name: 'Chocolate Muffin', price: 12.00, category: 'Desserts', image: '/about3.1 copy.png', width: 312, height: 267 },
    { id: 3, name: 'Burger', price: 45.00, category: 'Burger', image: '/maincourse.png', width: 312, height: 267 },
    { id: 4, name: 'Country Burger', price: 45.00, category: 'Burger', image: '/about3.2 copy.png', width: 312, height: 267 },
    { id: 5, name: 'Drink', price: 45.00, category: 'Drinks', image: '/drink.png', width: 312, height: 267 },
    { id: 6, name: 'Pizza', price: 45.00, category: 'Pizza', image: '/about3.3 copy.png', width: 312, height: 267 },
    { id: 7, name: 'Cheese Butter', price: 45.00, category: 'Sides', image: '/about3.4 copy.png', width: 312, height: 267 },
    { id: 8, name: 'Sandwiches', price: 45.00, category: 'Sandwiches', image: '/about3.5 copy.png', width: 312, height: 267 },
    { id: 9, name: 'Chicken Chop', price: 45.00, category: 'Chicken', image: '/about3.6 copy.png', width: 312, height: 267 }
  ];

const categories = [
    'Sandwiches', 'Burger', 'Chicken Chop', 'Drink', 'Pizza',
    'Th', 'Non Veg', 'Uncategorized'
  ];

const Sidebar = ({ params }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    return (
        <div className="col-span-1 space-y-6 px-2 pt-4 pb-7">
            {/* Search */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search Product"
                    className="w-full p-2 border rounded-md pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Categories */}
            <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => {
                                    setSelectedCategories(prev =>
                                        prev.includes(category)
                                            ? prev.filter(c => c !== category)
                                            : [...prev, category]
                                    );
                                }}
                                className="rounded"
                            />
                            <span>{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-semibold mb-3">Filter By Price</h3>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange.min}</span>
                    <span>${priceRange.max}</span>
                </div>
            </div>

            {/* Latest Products */}
            <div>
                <h3 className="font-semibold mb-3">Latest Products</h3>
                <div className="space-y-4">
                    {products.slice(0, 4).map((product: any) => (
                        <div key={product.id} className="flex space-x-3">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={product.width}
                                height={product.height}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="text-orange-500">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}

export default Sidebar