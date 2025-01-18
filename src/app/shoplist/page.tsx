"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { SidebarIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";


const Shop = () => {
  const query = `*[_type == "food" && available == true] {
  name,
  price,
  category,
  image
}`;

  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    try {
        setIsLoading(true)
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
      fetchData();
    };
  }, []);

  if (isLoading) {
    return <div className="max-w-6xl h-screen mx-auto px-4 py-8">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="max-w-6xl mx-auto px-4 py-8">No products found</div>;
  }

  console.log(data);

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
              {data.map((data: Product, i: number) => (
                <div key={i} className="group">
                  <Link href={"/shopdetails"}>
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={urlFor(data.image).url()}
                        alt={data.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">New</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium">{data.name}</h3>
                      <p className="text-orange-500">${data.price.toFixed(2)}</p>
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