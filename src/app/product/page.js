import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

function Product() {
  return (
    <div className="px-40 my-16">

      <h1 className="text-[#683e3ec2]">
        <span>Home / </span> 
        <span>Gaming / </span>
        <span className="text-[#000] font-semibold">Havic HV G-92 Gamepad</span>
      </h1>
      <div className='flex'>
        <div className='left w-[65%] border-2'>
          <div className='flex'>
            <div>

            <div>
            <Image src="/assets/gamepad.jpeg" height={100} width={100} alt='Havic HV G-92 Gamepad'/>
            </div>
            <div>
            <Image src="/assets/gamepad.jpeg" height={100} width={100} alt='Havic HV G-92 Gamepad'/>
            </div>
            <div>
            <Image src="/assets/gamepad.jpeg" height={100} width={100} alt='Havic HV G-92 Gamepad'/>
            </div>
            <div>
            <Image src="/assets/gamepad.jpeg" height={100} width={100} alt='Havic HV G-92 Gamepad'/>
            </div>
            </div>

            <div>
            <Image src="/assets/gamepad.jpeg" height={100} width={100} alt='Havic HV G-92 Gamepad'/>
          </div>
          </div>

        </div>
        <div className='right w-[35%] border-2'>
          <h2 className='font-semibold text-lg'>Havic HV G-92 Gamepad</h2>
          <div>
            <div>star</div>

            <div>(150 Reviews)</div>
            <div> | In Stock</div>
          </div>
          <h3>$192.00</h3>
          <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive</p>
          <hr />
          <div>
          <h4>Colours:</h4>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <h4>Size:</h4>
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
            <div>
              <div>
                <div>-</div>
                <div>2</div>
                <div>+</div>
              </div>
              <Button buttonName="Buy Now"/>
              <div></div>
            </div>
            <div>
              <div>
                <div></div>
                <h5>Free Delivery</h5>
                <input type="text" placeholder='Enter your postal code for Delivery Availability' />
              </div>
              <div>
              <div></div>
                <h5>Return Delivery</h5>
                <p>Free 30 Days Delivery Returns. <span>Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product