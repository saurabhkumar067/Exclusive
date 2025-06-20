"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const router = useRouter()
  const [carts, setCarts] = useState([]);
  // const [quantity, setQuantity] = useState("01");
  useEffect(() => {
    async function fetchProducts() {
      const api = await fetch("https://dummyjson.com/products");
      const result = await api.json();
      const productsWithQuantity = result.products.slice(0, 5).map((p) => ({
        ...p,
        quantity: 1,
      }));
      setCarts(productsWithQuantity);
    }
    fetchProducts();
  }, []);

  const handleIncrementQuantity = (id) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrementQuantity = (id) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleRouter = ()=>{
    router.push("/cart/checkout")
  }

  return (
    <div className="px-40 my-16">
      <h1 className="text-[#683e3ec2]">
        <span>Home / </span> <span className="text-[#000] font-semibold">Cart</span>
      </h1>
      <div className="mt-10">
        <div className="flex justify-between items-center shadow-[0px_0px_21px_-17px_#000] px-10 py-5 font-semibold">
          <h3 className="w-44 ml-2">Product</h3>
          <h3 className="w-32 text-center">Price</h3>
          <h3 className="w-32 pl-4">Quantity</h3>
          <h3>Subtotal</h3>
        </div>
        {carts.map((cart) => {
          return (
            <div
              key={cart.id}
              className="flex justify-between items-center my-10 shadow-[0px_0px_21px_-17px_#000] px-8 py-5"
            >
              <div className="flex justify-start items-center w-44">
                <Image
                  src={cart.images[0]}
                  height={50}
                  width={50}
                  alt={cart.title}
                  className=" "
                />
                <h3 className="text-xs font-semibold" title={cart.title}>
                  {cart.title.length > 15
                    ? cart.title.slice(0, 15) + "..."
                    : cart.title}
                </h3>
              </div>
              <h3>${cart.price}</h3>
              <h3 className="border py-1 px-2 rounded-sm border-[#00000077] flex justify-center items-center gap-2">
                <span>{cart.quantity}</span>
                <div>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleIncrementQuantity(cart.id)}
                  >
                    <IoIosArrowUp />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDecrementQuantity(cart.id)}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
              </h3>
              <h3>{cart.price * cart.quantity}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <Button
          buttonName="Return To Shop"
          buttonClass="mt-0 bg-none border-[1px] text-black py-4 px-8 font-semibold  text-sm"
        />
        <div>
          <input
            type="text"
            className="border py-3 pl-3 outline-none mr-5 placeholder:text-sm rounded-sm "
            placeholder="Coupon Code"
          />
          <Button buttonName="Apply Coupon" />
        </div>
      </div>
      <div className="relative w-full h-[280px] mt-10">

      <div className="absolute right-0 h-full border rounded-sm border-black px-3 py-2 w-1/3">
        <h4 className="font-semibold text-lg">Cart Total</h4>
        <div>
          <h5 className="border-b flex justify-between items-center pb-2 pt-5">
            <span>Subtotal</span>
            <span>$1759</span>
          </h5>
          <h5 className="border-b flex justify-between items-center pb-2 pt-5">
            <span>Shipping:</span>
            <span>Free</span>
          </h5>
          <h5 className="flex justify-between items-center pt-5">
            <span>Total:</span>
            <span>$1759</span>
          </h5>
        </div>
        <div className="flex justify-center items-center" onClick={handleRouter}>

        <Button buttonName="Process to checkout"/>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Cart;
