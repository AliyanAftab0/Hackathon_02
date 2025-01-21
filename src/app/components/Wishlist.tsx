"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { toggleWishlistItem, getWishlist } from "../actions/wishlistActions"

interface WishlistComponentProps {
  productSlug: string
}

export const WishlistComponent: React.FC<WishlistComponentProps> = ({ productSlug }) => {
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    getWishlist().then((wishlist) => {
      setIsInWishlist(wishlist.includes(productSlug))
    })
  }, [productSlug])

  const handleToggleWishlist = async () => {
    const updatedWishlist = await toggleWishlistItem(productSlug)
    setIsInWishlist(updatedWishlist.includes(productSlug))
  }

  return (
    <button
      onClick={handleToggleWishlist}
      className={`text-gray-600 hover:text-orange-500 flex items-center space-x-2 ${isInWishlist ? "text-orange-500" : ""}`}
    >
      <Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
      <span>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
    </button>
  )
}

