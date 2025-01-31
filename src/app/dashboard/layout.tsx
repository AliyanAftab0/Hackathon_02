"use client"

import { useRouter } from "next/navigation"
import { LogOut, ShoppingCart, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between px-4 py-6">
          <h1 className="text-2xl font-bold text-orange-500">FoodTuck Admin</h1>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="ghost">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </Button>
            </Link>
            <Link href="/checkout">
              <Button variant="ghost">
                <CreditCard className="mr-2 h-4 w-4" />
                Checkout
              </Button>
            </Link>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
