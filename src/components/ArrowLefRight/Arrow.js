import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

function Arrow() {
  return (
    <div className="flex items-center justify-center gap-2">
    <span className="bg-[#e2dddd] cursor-pointer p-3 rounded-full text-2xl">
    <GoArrowLeft/>
    </span>
    <span className="bg-[#e2dddd] cursor-pointer p-3 rounded-full text-2xl">
    <GoArrowRight/>
    </span>
  </div>
  )
}

export default Arrow