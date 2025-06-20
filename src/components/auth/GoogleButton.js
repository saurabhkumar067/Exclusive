import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleButton({text = "Sign up with Google"}) {
  return (
    <button
      type="button"
      className="text-base cursor-pointer mt-5 py-3 rounded-sm border gap-2 flex justify-center items-center hover:bg-gray-100 transition"
    >
      <FcGoogle className="text-2xl" />
      {text}
    </button>
  );
}

export default GoogleButton;
