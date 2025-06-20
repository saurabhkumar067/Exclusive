import Button from '@/components/Button'
import React from 'react'

function NotFound() {
  return (
    <div className="px-40 my-16">

    <h1 className="text-[#683e3ec2]">
      <span>Home / </span> 
      <span className="text-[#000] font-semibold">404 Error</span>
    </h1>
    <div className='text-center mt-28'>

    <h1 className='text-8xl font-semibold tracking-wider'>404 Not Found</h1>
    <p className='mb-9 mt-7'>Your visited page not found. You may go home page.</p>
    <Button buttonName="Back to home page"/>
    </div>
    </div>
  )
}

export default NotFound