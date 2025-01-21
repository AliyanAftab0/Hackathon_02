import React from 'react'
import { getWishlist } from '../actions/wishlistActions'
import { products } from '@/data/food.json'
import Image from 'next/image'
import Link from 'next/link'
import { StarRating } from '../components/StarRating'
import { ShoppingCart } from 'lucide-react'

export default async function WishlistPage() {
  const wishlist = await getWishlist()
  const wishlistProducts = products.filter(product => wishlist.includes(product.slug))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">My Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistProducts.map((product) => (
            <div key={product.slug} className="border rounded-lg overflow-hidden shadow-sm">
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
              <div className="p-4">
                <Link href={`/shoplist/${product.slug}`}>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                </Link>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-500 font-semibold">${product.price.toFixed(2)}</span>
                  <StarRating rating={4} />
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/shoplist/${product.slug}`}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-orange-600 transition-colors">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
