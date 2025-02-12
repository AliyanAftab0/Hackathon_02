import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border w-[300px] sm:w-full rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105">
      {/* Product Image */}
      <Link href={`/shoplist/${product.slug}`}>
        <div className="w-full h-[200px] relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/shoplist/${product.slug}`}>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        </Link>
        <div className="flex items-center justify-between mb-2">
          <span className="text-orange-500 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description || "No description available."}</p>
      </div>
    </div>
  );
};
