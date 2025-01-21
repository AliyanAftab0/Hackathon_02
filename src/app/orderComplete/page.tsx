import React from "react"
import Link from "next/link"
import { CheckCircle, TruckIcon, ClipboardList } from "lucide-react"

// This is a mock function to get order details. In a real application,
// you would fetch this data from your backend or database.
async function getOrderDetails() {
  return {
    orderId: "12345",
    total: 89.97,
    items: [
      { name: "Deluxe Pizza", quantity: 2, price: 29.99 },
      { name: "Caesar Salad", quantity: 1, price: 9.99 },
      { name: "Chocolate Brownie", quantity: 2, price: 5.99 },
    ],
    estimatedDelivery: "30-45 minutes",
  }
}

export default async function OrderCompletionPage() {
  const orderDetails = await getOrderDetails()

  return (
    <div className="max-w-2xl h-fit mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-xl text-gray-600">Your order has been successfully placed.</p>
      </div>
    </div>
  )
}

