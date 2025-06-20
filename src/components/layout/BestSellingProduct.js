"use client";
import React, { useEffect, useState } from "react";
import CardHeader from "./card/CardHeader";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ProductCard from "../products/ProductCard";
import Button from "../Button";

function BestSellingProduct() {
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
    <div className="my-20 px-20  ">
      <CardHeader
        title="This Month"
        SalesCategory="Best Selling Products"
        buttons={<Button buttonName="View All" buttonClass="mx-0 mt-[0.3px]" />}
      />
      <div className="gap-10 flex overflow-x-scroll no-scrollbar ">
      {products && products.length > 0
          ? products.map((product) => {
              return (
                <div key={product.id} className="flex-shrink-0 w-[22%] h-full">
                <ProductCard product={product} />
                </div>
                )
                ;
            })
          : null}
      </div>
    </div>
  );
}

export default BestSellingProduct;
