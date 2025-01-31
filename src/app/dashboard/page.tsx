"use client"

import { Bell, Home, Package, ShoppingCart, Users, MenuIcon } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DashboardNav } from "./components/dashboard-nav"
import { DashboardHeader } from "./components/dashboard-header"
import { DashboardShell } from "./components/dashboard-shell"
import { Overview } from "./components/overview"
import { RecentOrders } from "./components/recent-orders"
import { StatsCards } from "./components/stats-cards"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-orange-500">FoodTuck Admin</SheetTitle>
              </SheetHeader>
              <DashboardNav items={navigation} className="px-2" />
            </SheetContent>
          </Sheet>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid flex-1 md:grid-cols-[200px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-2">
              <Link href="/" className="flex items-center gap-2 font-bold text-orange-500">
                <Package className="h-6 w-6" />
                <span>FoodTuck Admin</span>
              </Link>
            </div>
            <DashboardNav items={navigation} className="px-2 py-2" />
          </div>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <DashboardHeader />
          <DashboardShell>
            <StatsCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Overview className="col-span-4" />
              <RecentOrders className="col-span-3" />
            </div>
          </DashboardShell>
        </main>
      </div>
    </div>
  )
}
