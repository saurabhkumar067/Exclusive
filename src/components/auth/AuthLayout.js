import Image from "next/image";
import React from "react";

function AuthLayout({children}) {
  return (
    <div className="flex items-center justify-center">
      <div className="left w-[55%] h-[80vh]">
        <Image
          src="/assets/sign-up.svg"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-r-lg"
          alt="Sign Up Illustration"
        />
      </div>

      <div className="right w-[45%] px-28 pl-40">{children}</div>
    </div>
  );
}

export default AuthLayout;
