"use client";
import { useState } from 'react';
import { products } from "../../data/products";
import { FilterOptions, SortOption } from "../../types";
import ProductGrid from "../../components/ProductGrid";
import Sidebar from "../../components/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarIcon } from "lucide-react";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: params.category,
    sort: 'newest'
  });

  const filteredProducts = products
    .filter(p => !filterOptions.category || 
      p.category.toLowerCase() === filterOptions.category.toLowerCase())
    .filter(p => !filterOptions.minPrice || p.price >= filterOptions.minPrice)
    .filter(p => !filterOptions.maxPrice || p.price <= filterOptions.maxPrice)
    .sort((a, b) => {
      switch(filterOptions.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <div>
      <section className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{params.category}</h1>
          <p className="text-[20px] mt-4">
            <Link href="/" className="text-[#FF9F0D]">Home</Link> &gt; 
            <Link href="/shoplist" className="text-[#FF9F0D]"> Shop</Link> &gt; 
            {params.category}
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <ProductGrid 
              products={filteredProducts}
              onFilterChange={setFilterOptions}
              currentFilter={filterOptions}
            />
          </div>
          <div className="hidden md:flex">
            <Sidebar onFilterChange={setFilterOptions} />
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <SidebarIcon />
            </SheetTrigger>
            <SheetContent side="right">
              <Sidebar onFilterChange={setFilterOptions} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}