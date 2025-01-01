import { Product } from "../types";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarIcon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function ProductGrid({ params }: any ,{ products }: { products: Product[] }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <div>
            <span className="text-gray-600 mr-2">Sort By:</span>
            <select className="border rounded-md p-1">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div>
            <span className="text-gray-600 mr-2">Show:</span>
            <select className="border rounded-md p-1">
              <option>Default</option>
              <option>12</option>
              <option>24</option>
            </select>
          </div>
          <div className="mt-7">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <SidebarIcon />
            </SheetTrigger>
            <SheetContent side="right">
              <Sidebar />
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>

      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link href={`/shoplist/product/${product.id}`}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                    New
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-orange-500">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}