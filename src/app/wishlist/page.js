"use client";
import CardHeader from "@/components/layout/card/CardHeader";
import ProductCard from "@/components/products/ProductCard";
import React, { useEffect, useState } from "react";

function Page() {
  const [wishlistProduct, setWishListProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const api = await fetch("https://dummyjson.com/products");
      const result = await api.json();
      setWishListProducts(result?.products);
    }
    fetchProducts();
  }, []);
  return (
    <div className="px-40">
      <div className=" mt-16 mb-12 flex justify-between">
        <h1 className="text-xl">Wishlist (4)</h1>
        <button className="border px-10 py-3 text-sm rounded-sm font-semibold">
          Move All To Bag
        </button>
      </div>
      <div className="flex justify-between">
        {wishlistProduct && wishlistProduct.length > 0
          ? wishlistProduct.slice(0, 4).map((wishlist) => (
              <div key={wishlist.id} className="flex-shrink-0 w-[22%] h-full">
                <ProductCard product={wishlist} />
              </div>
            ))
          : null}
      </div>
      <div className="mt-16">
        <div className="flex justify-between items-center mb-12">
        <h2 className="text-red-700 font-semibold">
        <span className="bg-red-700 p-3 rounded-sm mr-4"></span>Just For You
      </h2>
          <button className="border px-10 py-3 text-sm rounded-sm font-semibold">
          See All
        </button>
        </div>
        <div className="flex justify-between">
        {wishlistProduct && wishlistProduct.length > 0
          ? wishlistProduct.slice(5, 9).map((wishlist) => (
              <div key={wishlist.id} className="flex-shrink-0 w-[22%] h-full">
                <ProductCard product={wishlist} />
              </div>
            ))
          : null}
      </div>
      </div>
    </div>
  );
}

export default Page;
