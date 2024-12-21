"use client";
import React from "react";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="shop-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Our Shop</h1>
          <p>Home &gt; Shop</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filters">
          <label>
            Sort By:
            <select>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </label>
          <label>
            Show:
            <select>
              <option>Default</option>
              <option>Popular</option>
            </select>
          </label>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="product-card">
          <Image src="/salad.jpg" alt="Salad" width={200} height={200}/>
          <h3>Salad</h3>
          <p>$12</p>
        </div>
        <div className="product-card">
          <Image src="/burger.jpg" alt="Burger" width={200} height={200}/>
          <h3>Burger</h3>
          <p>$15</p>
        </div>
      </section>

      {/* Search Sidebar */}
      <aside className="search-sidebar">
        <input type="text" placeholder="Search Product" />
        <h4>Category</h4>
        <ul>
          <li>
            <input type="checkbox" /> Sandwiches
          </li>
          <li>
            <input type="checkbox" /> Burger
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Shop;