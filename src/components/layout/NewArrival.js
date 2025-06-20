import React from "react";
import CardHeader from "./card/CardHeader";
import Image from "next/image";

function NewArrival() {
  return (
    <div className="my-20 px-20">
      <CardHeader title="Featured" SalesCategory="New Arrival" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  px-4 lg:px-20">
        {/* Left - Large Banner */}
        <div className="relative rounded-lg overflow-hidden bg-[#000] h-[84vh]">
          <Image
            src="/assets/playStation.svg"
            alt="PlayStation"
            className="w-[90%] h-[90%] object-contain absolute right-0 bottom-0"
            height={100}
            width={100}
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-2xl font-semibold tracking-wide">PlayStation 5</h2>
            <p className="text-sm w-2/3 my-3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="group  text-black py-2 text-sm font-medium text-white ">
              Shop Now
              <hr className=" mt-2 group-hover:w-0 w-full duration-500"/>
            </button>
          </div>
        </div>

        {/* Right - 3 Small Cards */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Top Right - Women's Collection */}
          <div className="col-span-2 relative rounded-lg overflow-hidden h-[40vh] bg-[#000]">
            <Image
              src="/assets/womenCollection.svg"
              alt="Women Collection"
              className="w-[80%] h-full object-cover absolute right-0 bottom-0"
              height={100}
              width={100}
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-xl font-semibold tracking-wide">Women’s Collections</h2>
              <p className="text-sm w-2/3 my-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="group text-black py-2 text-sm font-medium text-white ">
              Shop Now
              <hr className=" mt-2 group-hover:w-0 w-full duration-500"/>
            </button>
            </div>
          </div>

          {/* Bottom Left - Speakers */}
          <div className="relative rounded-lg overflow-hidden h-[40vh] bg-[#000]">
            <Image
              src="/assets/speakers.svg"
              alt="Speakers"
              className="w-[60%] h-[60%] object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              height={100}
              width={100}
              style={{ filter: "drop-shadow(0px 4px 35px #b5a3a35e)" }}
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-xl font-semibold tracking-wide">Speakers</h2>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="group text-black py-2 text-sm font-medium text-white ">
              Shop Now
              <hr className="group-hover:w-0 w-full duration-500"/>
            </button>
            </div>
          </div>

          {/* Bottom Right - Perfume */}
          <div className="relative rounded-lg overflow-hidden h-[40vh] bg-[#000]">
            <Image
              src="/assets/perfume.svg"
              alt="Perfume"
              className="w-[60%] h-[60%] object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              height={100}
              width={100}
              style={{ filter: "drop-shadow(0px 4px 35px #b5a3a35e)" }}
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-xl font-semibold tracking-wide">Perfume</h2>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="group text-black py-2 text-sm font-medium text-white ">
              Shop Now
              <hr className="group-hover:w-0 w-full duration-500"/>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
