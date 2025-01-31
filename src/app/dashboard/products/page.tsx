"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Classic Burger",
    price: 12.99,
    category: "Burgers",
    image: "/placeholder.svg?height=100&width=100",
    stock: 50,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 14.99,
    category: "Pizza",
    image: "/placeholder.svg?height=100&width=100",
    stock: 30,
  },
  // Add more products as needed
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  })

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number.parseFloat(newProduct.price),
      category: newProduct.category,
      stock: Number.parseInt(newProduct.stock),
      image: newProduct.image,
    }
    setProducts([...products, product])
    setNewProduct({ name: "", price: "", category: "", stock: "", image: "" })
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Price</label>
                <Input
                  type="number"
                  step="0.01"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <Input
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Stock</label>
                <Input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add Product
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-500">
                    Delete
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

