import React from "react"
import { getCompareList } from "../actions/compareActions"
import { products } from "@/data/food.json"
import Image from "next/image"
import Link from "next/link"
import { StarRating } from "../components/StarRating"

export default async function ComparePage() {
  const compareList = await getCompareList()
  const compareProducts = products.filter((product) => compareList.includes(product.slug))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Compare Products</h1>
      {compareProducts.length === 0 ? (
        <p className="text-gray-600">You haven&apos;t added any products to compare.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {compareProducts.map((product) => (
                <tr key={product.slug} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <Link
                        href={`/shoplist/${product.slug}`}
                        className="font-semibold hover:text-orange-500 transition-colors"
                      >
                        {product.name}
                      </Link>
                    </div>
                  </td>
                  <td className="p-4 text-orange-500 font-semibold">${product.price.toFixed(2)}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">
                    <StarRating rating={4} />
                  </td>
                  <td className="p-4 max-w-xs">
                    <p className="line-clamp-2">{product.description}</p>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

