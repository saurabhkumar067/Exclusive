import React from 'react'
import { RiSecurePaymentFill } from "react-icons/ri";
import { SlEarphonesAlt } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";

function ServiceFeatures() {
    const services = [
       {
        icon: LiaShippingFastSolid,
        title:"Free and fast delivery",
        disc:"Free delivery for all orders over $140"
       },
       {
        icon: SlEarphonesAlt,
        title:"24/7 Customer service",
        disc:"Friendly 24/7 customer support"
       },
       {
        icon: RiSecurePaymentFill,
        title:"money back guarantee",
        disc:"We return money within 30 days"
       },
    ]
  return (
    <div className='grid grid-cols-3 justify-center w-[75%] mx-auto items-center mt-5'>
        {
            services.map((service,idx)=>(
                <div key={idx} className='flex flex-col items-center justify-center'>
            <div className='border-6 rounded-full border-[#697077] text-3xl px-3 text-white py-3 bg-[#000]'>{<service.icon/>}</div>
            <h5 className='font-bold text-lg mt-4 mb-2 uppercase'>{service.title}</h5>
            <p className='text-sm'>{service.disc}</p>
        </div>
            ))
        }
    </div>
  )
}

export default ServiceFeatures