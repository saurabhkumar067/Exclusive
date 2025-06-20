import Image from "next/image";
import React from "react";
import { BiSend } from "react-icons/bi";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className=" bg-[#030406]">
      <div className="px-20 py-14 text-white mt-18">
        <div className="grid grid-cols-5">
          <div>
            <h1 className="font-bold text-2xl font-Rubik">Exclusive</h1>
            <ul className="flex flex-col gap-2 text-sm text-[#ddd7d7] mt-3">
              <li className="text-lg font-semibold">Subscribe</li>
              <li>Get 10% off your first order</li>
              <li className="border w-[70%] px-2 flex justify-between items-center py-2 rounded-xs">
                <input
                  type="text"
                  className="bg-none outline-none border-none w-[80%]"
                  placeholder="Enter your email"
                />
                <span>
                  <BiSend className="text-xl" />
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Support</h5>
            <ul className="flex flex-col gap-2 text-[#ddd7d7] text-sm">
              <li className="w-2/3">111 Bijoy sarani, Shakam DH 1515, Delhi</li>
              <li>excelusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Account</h5>
            <ul className="flex flex-col gap-2 text-[#ddd7d7] text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Quick Link</h5>
            <ul className="flex flex-col gap-2 text-[#ddd7d7] text-sm">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Download App</h5>
            <div>
              <p className="text-sm text-[#bdb6b6] mb-2">
                Save S3 with App New User Only
              </p>
              <div className="flex gap-2 items-center">
                <div>
                  <Image src="/assets/app-qr.svg" width={80} height={80} alt="" />
                </div>
                <div>
                  <Image
                    src="/assets/playstore.svg"
                    width={100}
                    height={100}
                    className="mb-3"
                    alt=""
                  />
                  <Image
                    src="/assets/appstore.svg"
                    width={100}
                    height={100}
                    className="mt-3"
                    alt=""
                  />
                </div>
              </div>
              <ul className="flex  items-center  gap-8 text-xl mt-3">
                <li className="cursor-pointer">
                  <RiFacebookLine />
                </li>
                <li className="cursor-pointer">
                  <CiTwitter />
                </li>
                <li className="cursor-pointer">
                  <IoLogoInstagram />
                </li>
                <li className="cursor-pointer">
                  <RiLinkedinLine />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#535252] text-center border-t-[0.5px] border-[#535252] py-4 ">
        &copy; Copyright Saurabh 2024. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
