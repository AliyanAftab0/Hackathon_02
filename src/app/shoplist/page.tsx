"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { SidebarIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";


export const products = [
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


const Shop = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Our Shop</h1>
          <p className="text-[20px] mt-4"><Link href="/" className="text-[#FF9F0D]">Home</Link>&gt; Shop</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Main Content - Now on the left */}
          <div className="col-span-3">
            {/* Filters */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <div>
                  <span className="text-gray-600 mr-2">Sort By:</span>
                  <select className="border rounded-md p-1">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
                <div>
                  <span className="text-gray-600 mr-2">Show:</span>
                  <select className="border rounded-md p-1">
                    <option>Default</option>
                    <option>12</option>
                    <option>24</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <Link href={"/shopdetails"}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={product.width}
                      height={product.height}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">New</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-orange-500">${product.price.toFixed(2)}</p>
                  </div>
                    </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-full ${page === 1 ? 'bg-orange-500 text-white' : 'bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
          {/* Sidebar - Now on the right */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <div className="flex gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div
                  className="md:hidden cursor-pointer"
                  aria-label="Open menu"
                  aria-expanded="false"
                >
                  <SidebarIcon />
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;