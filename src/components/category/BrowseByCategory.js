import Image from "next/image";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CardHeader from "../layout/card/CardHeader";
import Arrow from "../ArrowLefRight/Arrow";

function BrowseByCategory() {
  const browseCategory =[
    {
      image:"/assets/phone-icon.png",
      title:"Phones"
    },
    {
      image:"/assets/monitor-icon.png",
      title:"Computers",
    },
    {
      image:"/assets/smart-watch-icon.png",
      title:"SmartWatch",
    },
    {
      image:"/assets/camera-icon.png",
      title:"Camera",
    },
    {
      image:"/assets/headphone-icon.png",
      title:"HeadPhones",
    },
    {
      image:"/assets/gamepad-icon.png",
      title:"Gaming",
    },
  ]
  return (
    <div className="my-20 px-20  ">
      {/* <h2 className="text-red-700 font-semibold">
        <span className="bg-red-700 p-3 rounded-sm mr-4"></span>Categories
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-end my-6 gap-20">
          <div className="text-4xl rubikFont">Browse By Category</div>
          
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="bg-[#e2dddd] cursor-pointer p-3 rounded-full text-2xl">
            <GoArrowLeft />
          </span>
          <span className="bg-[#e2dddd] cursor-pointer p-3 rounded-full text-2xl">
            <GoArrowRight />
          </span>
        </div>
      </div> */}
      <div className="border-y py-20 border-[#d3bdbd]">
       <CardHeader
        title="Categories"
        SalesCategory="Browse By Category"
        buttons={<Arrow/>}
       
      />
      <div className="flex gap-10 overflow-x-scroll no-scrollbar">
       {
        browseCategory.map((category, idx)=>{
          return (
            <div key={idx} className="group border border-[#c99e9e] rounded-sm px-5 py-3 flex flex-col justify-center items-center duration-500 hover:bg-[#DB4444] hover:border-white">
          <Image src={category.image} height={100} width={100} alt={category.title} className="duration-500 w-1/2 group-hover:invert invert-[0.5]"/>
          <p className="mt-1 openSans group-hover:text-[#f3f3f3] duration-500">{category.title}</p>
        </div>
          )
        })
       }
        
        
       
        
      </div>
      </div>
    </div>
  );
}

export default BrowseByCategory;
