"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import CardHeader from "./card/CardHeader";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import Arrow from "../ArrowLefRight/Arrow";
import Button from "../Button";
import CountDown from "./card/CountDown";

function FlashSales() {
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
      <CardHeader
        title="Today's"
        SalesCategory="Flash Sales"
        buttons={<Arrow />}
        time={<CountDown />}
      />
      <div className="gap-10 flex overflow-x-scroll no-scrollbar ">
        {products && products.length > 0
          ? products.map((product) => {
              return (
                <div key={product.id} className="flex-shrink-0 w-[22%] h-full">
              <ProductCard  product={product} />
              </div>
              )
              ;
            })
          : null}
      </div>
    </div>
  );
}

export default FlashSales;
