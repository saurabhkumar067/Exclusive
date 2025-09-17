import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiLoader3Fill } from "react-icons/ri";

function Product() {
  return (
    <div className="px-40 my-16">
      <h1 className="text-[#683e3ec2]">
        <span>Home / </span>
        <span>Gaming / </span>
        <span className="text-[#000] font-semibold">Havic HV G-92 Gamepad</span>
      </h1>
      <div className="flex mt-20">
        <div className="left w-[70%]">
          <div className="flex w-full h-full gap-5">
            <div className="flex flex-col gap-5 h-full">
              <div>
                <Image
                  src="/assets/gamepad.jpeg"
                  height={100}
                  width={100}
                  alt="Havic HV G-92 Gamepad"
                />
              </div>
              <div>
                <Image
                  src="/assets/gamepad.jpeg"
                  height={100}
                  width={100}
                  alt="Havic HV G-92 Gamepad"
                />
              </div>
              <div>
                <Image
                  src="/assets/gamepad.jpeg"
                  height={100}
                  width={100}
                  alt="Havic HV G-92 Gamepad"
                />
              </div>
              <div>
                <Image
                  src="/assets/gamepad.jpeg"
                  height={100}
                  width={100}
                  alt="Havic HV G-92 Gamepad"
                />
              </div>
            </div>

            <div>
              <Image
                src="/assets/gamepad.jpeg"
                height={100}
                width={100}
                alt="Havic HV G-92 Gamepad"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="right w-[35%] ">
          <h2 className="font-bold text-lg">Havic HV G-92 Gamepad</h2>
          <div className="flex gap-3 text-sm mt-1 mb-2">
            <div>star</div>

            <div className="text-[#808080]">(150 Reviews)</div>
            <div>
              {" "}
              <span> | </span> <span className=" text-[#00FF66]">In Stock</span>
            </div>
          </div>
          <h3 className="text-xl ">$192.00</h3>
          <p className="text-sm my-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive
          </p>
          <hr />
          <div>
            <div className="flex items-center gap-2 my-3">
              <h4 className="text-xl">Colours:</h4>
              <div className="flex items-center">
                <span className="border-[2px] mx-2 border-black p-1 bg-[#A0BCE0] h-4  w-4 inline-block rounded-full"></span>
                <span className="mx-2 p-1 bg-[#E07575] h-4  w-4 inline-block rounded-full"></span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h4 className="text-xl">Size:</h4>
              <div className="flex gap-2">
                <div className="border-[1px] border-black w-7 text-center font-semibold py-1 rounded-sm text-xs">
                  XS
                </div>
                <div className="border-[1px] border-black w-7 text-center font-semibold py-1 rounded-sm text-xs">
                  S
                </div>
                <div className=" w-7 text-center font-semibold py-1 rounded-sm text-xs bg-[#DB4444] text-white">
                  M
                </div>
                <div className="border-[1px] border-black w-7 text-center font-semibold py-1 rounded-sm text-xs">
                  L
                </div>
                <div className="border-[1px] border-black w-7 text-center font-semibold py-1 rounded-sm text-xs">
                  XL
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5 mb-9">
              <div className="flex items-center border-[1px] border-black rounded-sm w-36 justify-between">
                <div className="border-r-[1px] border-black flex justify-center items-center px-3  h-full text-sm">
                  <TfiLayoutLineSolid />
                </div>
                <div className="text-lg font-semibold">2</div>
                <div className="bg-[#DB4444] flex justify-center items-center px-3 text-white h-full ">
                  <FaPlus />
                </div>
              </div>
              <Button
                buttonName="Buy Now"
                buttonClass="rounded-sm bg-[#DB4444] text-white text-sm py-2 px-6"
              />
              <div className="text-xl border-[1px] rounded-sm m-auto border-black px-3 py-2">
                <FaRegHeart />
              </div>
            </div>
            <div className="border-[1.5px] border-black rounded-sm ">
              <div className="border-b-[1.5px] border-black flex items-center gap-2 py-5 pl-3  ">
                <div className="text-4xl">
                  <TbTruckDelivery />
                </div>
                <div>
                  <h5 className="font-semibold text-sm">Free Delivery</h5>
                  <input
                    type="text"
                    placeholder="Enter your postal code for Delivery Availability"
                    className="outline-none placeholder:text-xs text-sm placeholder:border-b-[1px] placeholder:text-black w-[155%]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 py-5 pl-3">
                <div className="text-4xl">
                  <RiLoader3Fill />
                </div>
                <div>
                  <h5 className="font-semibold text-sm">Return Delivery</h5>
                  <p className="text-xs mt-1">
                    Free 30 Days Delivery Returns. <span>Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
