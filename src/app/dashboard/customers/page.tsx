"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

// Sample customers data
const initialCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    orders: 5,
    totalSpent: 149.95,
    lastOrder: "2024-01-25",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    orders: 3,
    totalSpent: 89.97,
    lastOrder: "2024-01-28",
  },
  // Add more customers as needed
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

