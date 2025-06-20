"use client"
import AboutCard from '@/components/AboutCard';
import Image from 'next/image'
import React, { useState } from 'react'
import { BsShop } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import TeamCard from '@/components/TeamCard';
import ServiceFeatures from '@/components/ServiceFeatures';


function About() {
  const [sallers, setSallers]= useState( [
    {icon:BsShop, title:"Sallers active our site", reach:"10.5k"},
    {icon:TbCurrencyDollar, title:"Monthly Product Sale", reach:"33k"},
    {icon:RiShoppingBag3Line, title:"Customer active in our site", reach:"45.5k"},
    {icon:FaSackDollar, title:"Anual gross sale in our site", reach:"25k"},
  ])
  const [TeamDetails, setTeamDetails] = useState([
    {
      image:"/assets/man.jfif",
      title:"Tom Cruise",
      category:"Founder & Chairman",
      twitter:"",
      instagram:"",
      linkedin:"",
    },
    {
      image:"/assets/man.jfif",
      title:"Tom Cruise",
      category:"Founder & Chairman",
      twitter:"",
      instagram:"",
      linkedin:"",
    },
    {
      image:"/assets/man.jfif",
      title:"Tom Cruise",
      category:"Founder & Chairman",
      twitter:"",
      instagram:"",
      linkedin:"",
    },
    
  ])  
 const circle = [];
 for(let i =0; i<6; i++){
  circle.push(
    <span key={i} className='h-3 w-3   bg-gray-400 rounded-full p-1'></span>
  )
 }
  return (
    <div className="px-40 my-16">
    <h1 className="text-[#683e3ec2]">
      <span>Home / </span> <span className="text-[#000] font-semibold">About</span>
    </h1>
  
        <div className='flex justify-between gap-10 items-center'>
            <div className="left w-1/2">
                <h2 className='text-5xl font-bold'>Our Story</h2>
                <p className='mt-10 mb-5'>Launced in 2015, Exclusive is South Asia'a premier online shopping makterplace with an active presense in Bangladesh. Supported by wide an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millions customers across the region.</p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>
            <div className="right w-1/2 ">
              <Image src="/assets/about.jpg" alt="About" height={100} width={100} className='h-full rounded-sm w-full' />
            </div>
        </div>
        <div className='flex justify-between  my-20 items-center gap-6'>
         {
          sallers.map((saller,idx)=>(

            <AboutCard key={idx} icon={<saller.icon/>} title={saller.title} reach={saller.reach}/>
          ))
         }
        </div> 
        <div className='flex justify-between items-center'>
          {
            TeamDetails.map((team, idx)=>(

              <TeamCard image="" title="" category="" twitter="" instagram="" linkedin=""/>
            ))
          }
        </div>
        <div className='flex flex justify-center items-center gap-2 mt-20 mb-24'>
          {
            circle
          }
          
        </div>
        <ServiceFeatures/>
    </div>
  )
}

export default About