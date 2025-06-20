"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Checkout() {
  const [checkout, setCheckout] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const api = await fetch("https://dummyjson.com/products");
      const result = await api.json();
      setCheckout(result?.products);
    }
    fetchProducts();
  }, []);
  return (
    <div className="px-40 my-16">
      <h1 className="text-[#683e3ec2]">
        <span>Home / </span> <span>Cart / </span>
        <span className="text-[#000] font-semibold">Checkout</span>
      </h1>
      <h2 className="text-3xl mt-14 mb-8 font-semibold">Billing Details</h2>
      <div className="flex justify-between">
        <div className="w-[45%]">
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              First Name *
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Company Name
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] rounded-sm w-full outline-none mt-1 border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Street Address *
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Town/City *
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Phone Number *
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-sm text-[#999999]">
              Email Address *
            </label>
            <input
              type="text"
              className="bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block"
            />
          </div>
          <div className="mt-4 flex flex-cols  items-center">
            <input type="checkbox" name="" id="" className="mr-1" />
            <label htmlFor="">Save this information for faster check-out next time</label>
          </div>
        </div>

        <div className="w-1/3">
          <div>
            {checkout && checkout.length > 0
              ? checkout.slice(0, 2).map((cart) => {
                  return (
                    <div
                      key={cart.id}
                      className="flex justify-between items-center py-3"
                    >
                      <div className="flex justify-start items-center w-52">
                        <Image
                          src={cart.images[0]}
                          height={70}
                          width={70}
                          alt={cart.title}
                          className=" "
                        />
                        <h3
                          className="text-xs font-semibold uppercase"
                          title={cart.title}
                        >
                          {cart.title.length > 15
                            ? cart.title.slice(0, 15) + "..."
                            : cart.title}
                        </h3>
                      </div>
                      <h3>${cart.price}</h3>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="">
            <h5 className="border-b flex justify-between items-center pb-2 text-sm pt-4">
              <span>Subtotal</span>
              <span>$1759</span>
            </h5>
            <h5 className="border-b flex justify-between items-center pb-2 text-sm pt-4">
              <span>Shipping:</span>
              <span>Free</span>
            </h5>
            <h5 className="flex justify-between items-center pt-4">
              <span>Total:</span>
              <span>$1759</span>
            </h5>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <div className="my-5">
                <input type="radio" className="mr-2 font-semibold" />
                <label htmlFor="">Bank</label>
              </div>
              <div className="my-5">
                <input type="radio" className="mr-2 font-semibold" />
                <label htmlFor="">Cash on delivery</label>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-2">
              <Image src="/assets/bkash.png" height={40} width={40} />
              <Image src="/assets/visa.png" height={40} width={40} />
              <Image src="/assets/mastercard.png" height={40} width={40} />
            </div>
            
          </div>
          <div className="flex justify-center items-center">
          <input
            type="text"
            className="border py-3 pl-3 outline-none placeholder:text-sm rounded-sm "
            placeholder="Coupon Code"
          />
          <Button buttonName="Apply Coupon" buttonClass="mx-auto bg-[#DB4444] text-white text-sm py-4 px-5 " />
        </div>
        <div className="mx-auto w-full">

        <Button buttonName="Place Order"  />
        </div>

       
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
