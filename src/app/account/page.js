import Button from '@/components/Button'
import React from 'react'

function Account() {
  return (
    <div className="px-40 my-16">
      <div className='flex justify-between items-center'>

      <h1 className="text-[#683e3ec2]">
        <span>Home / </span> 
        <span className="text-[#000] font-semibold">My Account</span>
      </h1>
      <h1 className="text-[#683e3ec2]">
        <span className="text-[#000] font-semibold">Welcome!</span> Sourav Kumar
      </h1>
      </div>


      <div className='flex justify-between mt-14'>
        <div className='left w-[20%]'>
          <div className='mb-3'>
          <h2 className='font-semibold text-xl mb-2'>Manage My Account</h2>
          <ul className='text-sm ml-7 flex flex-col gap-1'>
            <li className='text-[#808080]'>My Profile</li>
            <li className='text-[#808080]'>Address Book</li>
            <li className='text-[#808080]'>My Payment Options</li>
          </ul>
          </div>
          <div className='mb-3'>

          <h2 className='font-semibold text-xl mb-2'>My Orders</h2>
          <ul className='text-sm ml-7 flex flex-col gap-1'>
            <li className='text-[#808080]'>My Returns</li>
            <li className='text-[#808080]'>My Cancellations</li>
          </ul>
          </div>
          <h2 className='font-semibold text-xl'>My WishList</h2>

        </div>
        <div className='right w-[70%] py-8 px-8 shadow-[0px_0px_21px_-17px_#000]'>
          <h2 className='text-[#DB4444] text-xl font-semibold '>Edit Your Profile</h2>
          <div >
            <div className='flex w-full gap-8 mt-4'>
              <div className='w-full'>
              <label htmlFor="" className='block'>First Name</label>
              <input type="text" placeholder='Sourav' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              </div>
              <div className='w-full'>
                <label htmlFor="" className='block'>Last Name</label>
                <input type="text" placeholder='Kumar' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              </div>
            </div>
            <div className='flex w-full gap-8 mt-4'>
              <div className='w-full'>
              <label htmlFor="" className='block'>Email</label>
              <input type="text" placeholder='sourav123@gmail.com' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              </div>
              <div className='w-full'>
                <label htmlFor="" className='block'>Address</label>
                <input type="text" placeholder='1234 United State' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              </div>
            </div>

            <div className='mt-4'>
              <label htmlFor="" className='block'>Password Changes</label>
              <input type="text" placeholder='Current Password' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              <input type="text" placeholder='New Password' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block' />
              <input type="text" placeholder='Confirm New Password' className='bg-[#f7e0e0a1] mt-1 rounded-sm w-full outline-none border-none py-2 px-3 block'  />
            </div>
            <div className='flex justify-end items-center mt-5 gap-8'>
              <Button buttonName="Cancel"  buttonClass='py-3'/>
              <Button buttonName="Save Changes" buttonClass=' bg-[#DB4444] text-white text-lg py-3 px-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account