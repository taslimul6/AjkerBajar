"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {


  const [sortValue, setSortValue] = useState("default");


  const filterProducts = (e) => {
    setSortValue(e.target.value);
  };


  const sortedProducts = [...products];

 
  switch (sortValue) {
    case "price-asc":
      sortedProducts.sort((a, b) => Number(a.today) - Number(b.today));
      break;

    case "price-desc":
      sortedProducts.sort((a, b) => Number(b.today) - Number(a.today));
      break;

    default:
      break;
  }

  return (
    <section
      id="all-products"
      className="scroll-mt-40"
      aria-labelledby="all-products-heading"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">

        {/* Total Products Count */}
        <p className="text-sm text-slate-500">
          মোট {Number(products.length).toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>

        {/* Sort Filter */}
        <div className="flex items-center gap-2">
          <label
            className="text-sm text-slate-500"
            htmlFor="sort-products"
          >
            সাজান
          </label>

          <select
            onChange={filterProducts}
            value={sortValue}
            id="sort-products"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>

      </div>

      {/* Sorted Products List */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

    </section>
  );
};

export default ProductList;