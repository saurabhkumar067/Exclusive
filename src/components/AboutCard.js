import React from 'react'

function AboutCard({icon, reach, title}) {
  return (
    <div className='group w-[50%] hover:bg-[#DB4444]  flex flex-col items-center border-2 border-[#c7b8b894] rounded-sm  py-5 duration-500'>
           <div className='border-8 border-[#C1C0C1] group-hover:border-[#E67C7C] rounded-full duration-500'> <div className='bg-[#000000] text-3xl p-3 text-white rounded-full text-[#ffffff] group-hover:bg-[#ffffff] group-hover:text-[#000000] duration-500'>{icon}</div></div>
            <h3 className='font-bold text-3xl mt-2 mb-1 group-hover:text-[#FFFFFF] duration-500'>{reach}</h3>
            <p className='group-hover:text-[#FFFFFF] duration-500'>{title}</p>
          </div>
  )
}

export default AboutCard