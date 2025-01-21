"use server"

import { cookies } from "next/headers"

export async function toggleWishlistItem(productSlug: string) {
  const wishlistCookie = cookies().get("wishlist")?.value
  let wishlist: string[] = wishlistCookie ? JSON.parse(wishlistCookie) : []

  if (wishlist.includes(productSlug)) {
    wishlist = wishlist.filter((slug) => slug !== productSlug)
  } else {
    wishlist.push(productSlug)
  }

  cookies().set("wishlist", JSON.stringify(wishlist))

  return wishlist
}

export async function getWishlist() {
  const wishlistCookie = cookies().get("wishlist")?.value
  return wishlistCookie ? JSON.parse(wishlistCookie) : []
}
