import React from "react";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

function TeamCard() {
  return (
    
    <div className="card w-[300px] ">
      <div className="bg-[#FFFFFF] mx-auto w-full">
        <img src="/assets/man.png" alt="" className="m-auto" />
      </div>
      <h3 className="text-3xl font-semibold tracking-wider mt-3">Tom Cruise</h3>
      <p className="mt-1 mb-3">Founder & Chairman</p>
      <ul className="flex items-center gap-4 text-xl">
        <li>
          <FiTwitter />
        </li>
        <li>
          <IoLogoInstagram />
        </li>
        <li>
          <RiLinkedinLine />
        </li>
      </ul>
    </div>
  );
}

export default TeamCard;
