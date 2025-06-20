import Image from "next/image";
import React from "react";

function SpeakerBanner() {
  return (
    <div className="w-full mx-auto px-28">
      <div className=" w-full mt-0 bg-[#000] text-white relative px-14 py-10">
        <div className=" flex h-full justify-between w-full items-center">
          <div>
            <h1 className="text-sm text-[#00FF66] font-semibold pt-1">
              Categories
            </h1>
            <h1 className="my-8 text-5xl w-[75%]  tracking-wider notoSans leading-14">
              Enhance Your Music Experience
            </h1>
            <div>
              <span className="px-6 py-3  rounded-full bg-white"></span>
            </div>
            <button className="bg-[#00FF66] mt-8 text-white py-3 px-8 rounded-sm">
              Buy Now!
            </button>
          </div>
          <div>
            <Image
              src="/assets/jbl-speaker.svg"
              alt="iphone"
              height={100}
              width={100}
              className="h-full w-full shadow-xl"
              style={{ filter: "drop-shadow(0px 4px 35px #8980805e)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerBanner;
