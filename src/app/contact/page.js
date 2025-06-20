import Button from '@/components/Button';
import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="px-40 my-16">
    <h1 className="text-[#683e3ec2]">
      <span>Home / </span> <span className="text-[#000] font-semibold">Contact</span>
    </h1>
        <div className='flex gap-5 mt-10'>
            <div className='w-[30%]  p-5 '  style={{ boxShadow: '0px 0px 17px -15px #000' }}>
                <div className='border-b pb-5 mb-6'>
                    <div className='flex gap-4 items-center'>
                        <span className='bg-[#DB4444] text-white rounded-full p-2'><FiPhone/></span>
                        <h3 className='font-semibold'>Call To Us</h3>
                    </div>
                    <p className='mt-4 mb-3'>We are avaiable 24/7, 7 days a week</p>
                    <p>Phone: +918920023444</p>
                </div>
                <div>
                    <div className='flex gap-4 items-center '>
                        <span className='bg-[#DB4444] text-white rounded-full p-2'><MdOutlineEmail/></span>
                        <h3 className='font-semibold'>Write To US</h3>
                    </div>
                    <p className='mt-4 mb-3'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='mb-2'>Emails: customer@exclusive.com</p>
                    <p>Emails: supports@exclusive.com</p>
                </div>
            </div>
            <div className='  w-[70%] p-5 relative' style={{ boxShadow: '0px 0px 17px -15px #000' }}>
                <input type="text" placeholder='Your Name *' className=' py-2 px-3 outline-none border-none bg-[#F5F5F5] rounded-sm mr-6' />
                <input type="email" placeholder='Your Email *' className=' py-2 px-3 outline-none border-none bg-[#F5F5F5] rounded-sm mr-6' />
                <input type="text" placeholder='Your Phone *' className=' py-2 px-3 outline-none border-none bg-[#F5F5F5] rounded-sm' />
                <textarea name="" id="" placeholder='Your Massage' className='w-full py-2 px-3 outline-none border-none bg-[#F5F5F5] rounded-sm h-[60%] mt-8'></textarea>
                <Button buttonName="Send Massage" buttonClass='absolute bottom-5 right-4 mx-auto mt-5 bg-[#DB4444] text-white text-base py-3 px-10  rounded-sm'/>
            </div>
        </div>
    </div>
  )
}

export default Contact