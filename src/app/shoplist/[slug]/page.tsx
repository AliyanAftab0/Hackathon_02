"use client"
import React, { useState } from "react"
import { useParams } from "next/navigation"
import { products } from "@/data/food.json"
import { StarRating } from "../../components/StarRating"
import { ShoppingCart, ShoppingBag, Plus, Minus } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import Link from "next/link"
import { WishlistComponent } from "../../components/Wishlist"
import { CompareComponent } from "../../components/Compare"

const ProductDetail = () => {
  const params = useParams()
  const slug = params.slug as string
  const product = products.find((p) => p.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const similarProducts = products.filter((p) => p.category === product?.category && p.slug !== slug).slice(0, 4)

  if (!product) {
    return <div className="max-w-6xl mx-auto px-4 py-8">Product not found</div>
  }

  const handleAddToCart = () => {
    setIsPopoverOpen(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
        </div>

        <div>
          {product.tags.includes("New") && (
            <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-4">New</span>
          )}
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <span className="flex space-x-2 text-2xl font-semibold">
              <h1 className="">${product.price.toFixed(2)}</h1>
              <del className="text-red-500 text-xl">${product.originalPrice}</del>
            </span>
            <StarRating rating={4} reviews={12} />
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 border-r">
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border-l">
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
              <WishlistComponent productSlug={product.slug} />
              <CompareComponent productSlug={product.slug} />
            </div>
            <p className="text-gray-600">Category: {product.category}</p>
            <span className="text-gray-600 mt-2">
              Tags: <span className="bg-gray-300 p-1 rounded-lg text-sm">{product.tags[0]}</span>{" "}
              <span className="bg-gray-300 p-1 rounded-lg text-sm">{product.tags[1]}</span>
            </span>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.slug} className="group">
                <Link href={`/shoplist/${similarProduct.slug}`}>
                  <div className="w-full h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={similarProduct.image || "/placeholder.svg"}
                      alt={similarProduct.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      unoptimized={true}
                    />
                  </div>
                  <h3 className="font-medium">{similarProduct.name}</h3>
                  <StarRating rating={4} />
                  <p className="text-orange-500">${similarProduct.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail

