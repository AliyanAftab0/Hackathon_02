"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TypeIcon as type, type LucideIcon } from "lucide-react"
import type React from "react" // Import React

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    name: string
    href: string
    icon: LucideIcon
  }[]
}

export function DashboardNav({ items, className, ...props }: DashboardNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("grid items-start gap-2", className)} {...props}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-[#FF9F0D] hover:text-white",
              "justify-start",
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

