import React from "react";

function PrimaryButton({text, className}) {
  return (
    <button
      type="submit"
      className={`text-lg mt-6 cursor-pointer py-3 rounded-sm text-white bg-[#DB4444] hover:bg-red-600 transition ${className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
