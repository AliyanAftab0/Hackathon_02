"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Order {
  id: string
  total: number
  status: string
  date: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    setOrders(storedOrders)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{new Date(order.date).toLocaleString()}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Link href={`/dashboard/orders/${order.id}`}>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

