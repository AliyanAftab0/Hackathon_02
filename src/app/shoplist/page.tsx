"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";

const categories = ["All Categories", "Sandwich", "Dessert", "Main Course", "Drink", "Appetizer"];
const PRODUCTS_PER_PAGE = 9;

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "food"] {
          "slug": slug.current,
          name,
          price,
          description,
          "image": image.asset->url,
          category
        }`;

        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === "pricelowtohigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "pricehightolow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }

    return filteredProducts;
  };

  const getPaginatedProducts = () => {
    const filteredProducts = getFilteredProducts();
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(getFilteredProducts().length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="h-fit py-8">
        <Image src={"/Loader.gif"} width={200} height={200} alt="Loader" className="m-auto" />
      </div>
    );
  }

  return (
    <div>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Our Shop</h1>
          <p className="text-[20px] mt-4">
            <Link href="/" className="text-[#FF9F0D]">Home</Link> &gt; Shop
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto sm:px-4 pl-12 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              {/* Sort By Dropdown */}
              <div className="flex sm:flex-row flex-col gap-4">
                <Select onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Price Range</SelectLabel>
                      <SelectItem value="pricelowtohigh">Price Low To High</SelectItem>
                      <SelectItem value="pricehightolow">Price High To Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* Search Bar */}
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[180px]"
                />
              </div>
              {/* Category Dropdown */}
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid -ml-4 sm:mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getPaginatedProducts().map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  variant={currentPage === index + 1 ? "default" : "ghost"}
                  className={currentPage === index + 1 ? "bg-[#FF9F0D] text-white" : ""}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
