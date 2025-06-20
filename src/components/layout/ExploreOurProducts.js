"use client";
import React, { useEffect, useState } from "react";
import CardHeader from "./card/CardHeader";
import ProductCard from "../products/ProductCard";
import Arrow from "../ArrowLefRight/Arrow";
import Button from "../Button";

function ExploreOurProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const api = await fetch("https://dummyjson.com/products");
      const result = await api.json();
      setProducts(result?.products);
    }
    fetchProducts();
  }, []);
  return (
    <div className="my-20 px-20">
      <CardHeader title="Our Products" SalesCategory="Explore Our Products" />
      <div className="grid grid-cols-4 gap-10">
      {products && products.length > 0
          ? products.splice(0,8).map((product) => {
              return (
                <div key={product.id} className="flex-shrink-0 w-full h-full">
              <ProductCard product={product} />
              </div>
              )
              ;
            })
          : null}
      </div>

      <div className="w-full flex justify-center items-center mx-auto">

      <button className="bg-[#DB4444] text-white text-lg mx-auto py-3 px-10 rounded-sm ">
   View All Product
    </button>
      </div>
    </div>
  );
}

export default ExploreOurProducts;
