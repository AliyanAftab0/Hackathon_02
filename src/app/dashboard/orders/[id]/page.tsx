"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

interface OrderItem {
  _id: string
  name: string
  price: number
  quantity: number
}

interface ShippingDetails {
  firstName: string
  lastName: string
  email: string
  address1: string
  city: string
  zipCode: string
  country: string
}

interface Order {
  id: string
  items: OrderItem[]
  total: number
  shippingDetails: ShippingDetails
  status: string
  date: string
}

export default function OrderConfirmation() {
  const { id } = useParams()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const foundOrder = orders.find((o: Order) => o.id === id)
    if (foundOrder) {
      setOrder(foundOrder)
    }
  }, [id])

  if (!order) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <p>
          <strong>Order ID:</strong> {order.id}
        </p>
        <p>
          <strong>Date:</strong> {new Date(order.date).toLocaleString()}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Items</h2>
        <ul>
          {order.items.map((item) => (
            <li key={item._id} className="mb-2">
              {item.name} - Quantity: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
        <p>
          {order.shippingDetails.firstName} {order.shippingDetails.lastName}
        </p>
        <p>{order.shippingDetails.address1}</p>
        <p>
          {order.shippingDetails.city}, {order.shippingDetails.zipCode}
        </p>
        <p>{order.shippingDetails.country}</p>
        <p>{order.shippingDetails.email}</p>
      </div>
      <Link href="/dashboard/orders" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        View All Orders
      </Link>
    </div>
  )
}

