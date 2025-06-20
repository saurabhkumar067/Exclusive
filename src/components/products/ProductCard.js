"use client";
import Image from "next/image";
import React from "react";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";

function ProductCard({ product, button }) {
  return (
    <>
      <div className="group bg-[#f7ecec9c] rounded-lg relative py-2 overflow-hidden">
        <div className="absolute flex justify-between w-full items-start px-2">
          <h3 className="text-xs bg-[#DB4444] rounded-sm px-2 py-1 text-white text-center notoSans">
            -{Math.round(product.discountPercentage)}%
          </h3>
          <div>
            <div className="bg-white p-2 rounded-full text-xl mb-2">
              <IoHeartOutline />
            </div>
            <div className="bg-white p-2 rounded-full text-xl">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <Image
          src={product.images[0]}
          alt={product.title}
          height={100}
          width={100}
          className="w-[60%] h-[180px] object-contain mx-auto"
        />
        <button className="text-center bg-[#000] text-white w-full rounded-b-sm py-2 text-sm absolute -bottom-10 group-hover:bottom-0 duration-500 cursor-pointer">
          Add to Cart
        </button>
      </div>

      <div className="mt-2 pl-1">
        <h3 className="openSans font-semibold text-sm">{product.title}</h3>
        <div className="flex gap-4 rubikFont my-1 text-sm">
          <p className="">${product.price}</p>
          <p className="line-through text-[#9d8080]">$160</p>
        </div>
        <div>
          rating{" "}
          <span className="text-[#493c3c] text-xs">({product.rating})</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mx-auto">
        {button}
      </div>
    </>
  );
}

export default ProductCard;
