"use client";
import { products } from "../../../data/products";
import ProductDetail from "../../../components/ProductDetail";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return notFound();
  }

  return (
    <div>
      <section className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <p className="text-[20px] mt-4">
            <Link href="/" className="text-[#FF9F0D]">Home</Link> &gt; 
            <Link href="/shoplist" className="text-[#FF9F0D]"> Shop</Link> &gt; 
            <Link href={`/shoplist/${product.category.toLowerCase()}`} className="text-[#FF9F0D]">
              {product.category}
            </Link> &gt; 
            {product.name}
          </p>
        </div>
      </section>
      
      <ProductDetail product={product} />
    </div>
  );
}