"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import CircularText from "@/animations/CircularText";

function HeroSection() {
  const [categorys, setCategorys] = useState([
    {
      title: "Woman's Fashion",
    },
    {
      title: "Men's Fashion",
    },
    {
      title: "Electronics",
    },
    {
      title: "Home & Lifestyle",
    },
    {
      title: "Medicine",
    },
    {
      title: "Sports & Outdoor",
    },
    {
      title: "Baby's & Toys",
    },
    {
      title: "Groceries & Pets",
    },
    {
      title: "Health & Beauty",
    },
  ]);

  return (
    <main className="px-20 flex h-[53vh] overflow-hidden">
      <div className="category montSerrat pt-5 w-[20%] border-r mr-10">
        <ul className="flex flex-col gap-3">
          {categorys.map((category, idx) => {
            return (
              <li key={idx} className="group flex items-center justify-between">
                <Link href="">{category.title}</Link>
                <span className="group-hover:block pr-10 hidden duration-500 ">
                  <FaAngleRight />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="banner w-[75%] mt-5 bg-[#000] text-white relative">
        <div className=" flex h-full justify-between w-full items-center pl-14">
          <div>
            <div className="flex items-center gap-5">
              <Image
                src="/assets/iphone-logo.svg"
                height={100}
                width={35}
                alt="iphone logo"
                className=""
              />
              <h1 className="text-lg pt-1">iPhone 14 Series</h1>
            </div>
            <div className="my-6 text-5xl w-[67%] font-semibold tracking-wider notoSans leading-14">
              Up to 10% off Voucher
            </div>
            <div className="group w-1/4">
              <button className=" flex items-center justify-center gap-1 text-sm cursor-pointer">
                Shop Now
                <span className="text-xl group-hover:ml-2 duration-500">
                  <GoArrowRight />
                </span>
              </button>
              <hr className="w-[55%] duration-500 mt-1 group-hover:w-[0.5%]" />
            </div>
          </div>
          <div>
            <Image
              src="/assets/iphone.svg"
              alt="iphone"
              height={100}
              width={100}
              className="h-full w-full pt-10"
            />
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20">
        <CircularText
           text="EXCLUSIVE*FAST*OFFERS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class text-black"
/>
        </div>
       
      </div>
    </main>
  );
}

export default HeroSection;