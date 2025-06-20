import React from 'react'

function Button({buttonName, buttonClass="mx-auto mt-5 bg-[#DB4444] text-white text-lg py-3 px-10  "}) {
  return (
    <button className={`rounded-sm ${buttonClass}`}>
   {buttonName}
    </button>
  )
}

export default Button