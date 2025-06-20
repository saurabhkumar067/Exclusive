"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const [navLinks, setNavLinks] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/sign-up",
    },
  ]);

  useEffect(() => {
    setIsClient(true);
    const loggedInStatus = localStorage.getItem("loggin");
    if (loggedInStatus) setIsLoggedin(true);
  }, []);
  useEffect(() => {
    const handleClick = () => {
      if (userDetails) {
        setUserDetails(false);
      }
    };
  
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [userDetails]);
  


  const handleLogout = ()=>{
    localStorage.removeItem("loggin");
    setIsLoggedin(false);
    setUserDetails(false);
    window.location.href = "/"
  }

  if (!isClient) return null;

  return (
    <div>
      <Header />
      <nav className="flex w-full justify-between px-20 items-center mt-6 border-b pb-2 border-gray-300">
        <h1 className="font-bold text-2xl font-Rubik">Exclusive</h1>
        <ul className="flex gap-12 text-base">
          {navLinks
            .filter((nav) => !(isLoggedIn && nav.name === "Sign Up"))
            .map((nav, idx) => {
              const isActive = pathname === nav.link;
              return (
                <li key={idx} className="">
                  <Link
                    href={nav.link}
                    className={`group hover:text-black  transition-colors duration-200 ${
                      isActive
                        ? "text-black font-semibold border-b-2 border-black"
                        : "text-gray-500"
                    }`}
                  >
                    {nav.name}
                    <hr className="w-0 group-hover:w-full duration-500" />
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className=" flex items-center justify-center gap-5">
          <div className="flex py-2 px-3 rounded-sm bg-[#F5F5F5] justify-center items-center">
            <input
              type="text"
              className="bg-none outline-none border-none overflow-hidden placeholder:text-[#968c8c] placeholder:text-sm"
              placeholder="What are you looking for?"
            />
            <span className="text-xl">
              <IoSearch />
            </span>
          </div>

          {pathname !== "/sign-up" && pathname !== "/login" ? (
            <>
              <Link href="/wishlist" className="cursor-pointer relative">
                <IoIosHeartEmpty className="text-xl" />
                <span className="absolute bg-red-700 text-[10px] rounded-full px-[6px] -top-1 -right-1 text-white">4</span>
              </Link>
              <Link href="/cart" className="cursor-pointer relative">
                <BsCart3 className="text-xl" />
                <span className="absolute bg-red-700 text-[10px] rounded-full px-[6px] -top-1 -right-1 text-white">2</span>
              </Link>
              
            </>
          ) : null}
          {isLoggedIn===true ? (
             <div className="relative w-full">
             <div
               onClick={(e) => {
                 e.stopPropagation();
                 setUserDetails(!userDetails);
               }}
               className="bg-[#DB4444] p-2 text-lg text-white rounded-full"
             >
               <FiUser />
             </div>
             {userDetails === true && (
               <div className="absolute w-[220px] text-white px-4 py-5 flex flex-col gap-y-3 right-0 z-100 bg-[#333e53ad] rounded-lg  backdrop-blur-sm">
                 <div className="flex items-center gap-4 cursor-pointer">
                   <span className="text-xl">
                     <FiUser />
                   </span>
                   <p>Manage My Account</p>
                 </div>
                 <div className="flex items-center gap-4 cursor-pointer">
                   <span>
                     <LuShoppingBag />
                   </span>
                   <p>My Order</p>
                 </div>
                 <div className="flex items-center gap-4 cursor-pointer">
                   <span>
                     <RxCrossCircled />
                   </span>
                   <p>My Cancellations</p>
                 </div>
                 <div className="flex items-center gap-4 cursor-pointer">
                   <span>
                     <FaRegStar />
                   </span>
                   <p>My Reviews</p>
                 </div>
                 <div onClick={handleLogout} className="flex items-center gap-4 cursor-pointer">
                   <span>
                     <TbLogout2 />
                   </span>
                   <p>Logout</p>
                 </div>
               </div>
             )}
           </div>
          ):null
          }
         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
