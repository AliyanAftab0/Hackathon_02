"use client";
import { products } from ".././data/products";
import ProductGrid from ".././components/ProductGrid";
import Sidebar from ".././components/Sidebar";
import Link from "next/link";

export default function Shop() {
  return (
    <div>
      <section className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Our Shop</h1>
          <p className="text-[20px] mt-4">
            <Link href="/" className="text-[#FF9F0D]">Home</Link>&gt; Shop
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <ProductGrid products={products} />
          </div>
          <div className="hidden md:flex">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}