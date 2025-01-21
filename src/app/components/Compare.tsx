"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Share2 } from "lucide-react"
import { toggleCompareItem, getCompareList } from "../actions/compareActions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

interface CompareComponentProps {
  productSlug: string
}

export const CompareComponent: React.FC<CompareComponentProps> = ({ productSlug }) => {
  const [isInCompareList, setIsInCompareList] = useState(false)
  const [compareList, setCompareList] = useState<string[]>([])
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {
    getCompareList().then((list) => {
      setCompareList(list)
      setIsInCompareList(list.includes(productSlug))
    })
  }, [productSlug])

  const handleToggleCompare = async () => {
    const updatedList = await toggleCompareItem(productSlug)
    setCompareList(updatedList)
    setIsInCompareList(updatedList.includes(productSlug))
    setIsPopoverOpen(true)
  }

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={handleToggleCompare}
          className={`text-gray-600 hover:text-orange-500 flex items-center space-x-2 ${isInCompareList ? "text-orange-500" : ""}`}
        >
          <Share2 size={20} />
          <span>{isInCompareList ? "Remove from Compare" : "Add to Compare"}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Share2 className="text-orange-500" />
            <div className="grid gap-1">
              <h4 className="font-semibold">
                {isInCompareList ? "Added to Compare List" : "Removed from Compare List"}
              </h4>
              <p className="text-sm text-gray-500">
                {compareList.length} {compareList.length === 1 ? "item" : "items"} in compare list
              </p>
            </div>
          </div>
          {compareList.length > 0 && (
            <Link
              href={"/compare"}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              Go to Compare Page
            </Link>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}


export { toggleCompareItem }
