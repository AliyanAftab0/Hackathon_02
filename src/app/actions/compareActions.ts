"use server"

import { cookies } from "next/headers"

export async function toggleCompareItem(productSlug: string) {
  const compareCookie = cookies().get("compare")?.value
  let compareList: string[] = compareCookie ? JSON.parse(compareCookie) : []

  if (compareList.includes(productSlug)) {
    compareList = compareList.filter((slug) => slug !== productSlug)
  } else {
    if (compareList.length < 4) {
      compareList.push(productSlug)
    }
  }

  cookies().set("compare", JSON.stringify(compareList))

  return compareList
}

export async function getCompareList() {
  const compareCookie = cookies().get("compare")?.value
  return compareCookie ? JSON.parse(compareCookie) : []
}

