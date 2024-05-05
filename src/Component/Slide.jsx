import React from 'react'
import Button from './Button'
import { FaPlusSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaYoutube, FaInstagram, FaRegStar } from "react-icons/fa";


function Slide() {
  return (
    <div className=' rounded-md w-[90%] m-auto shadow-md mt-4'>

      <div >
        <img src="https://img.freepik.com/free-vector/hospital-healthcare-service-sale-banner_23-2150394136.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=ais" alt="Image not loaded" className='w-full h-[15rem] object-cover rounded-t-md ' />
      </div>

      <div className='flex flex-row justify-between px-8 py-8 gap-2'>

        <div className=' flex flex-col gap-6 '>

          <div className='flex flex-col gap-4 '>

            <div className='font-semibold text-[16px] md:text-xl'><p>Dr. Monika Singh</p>
            </div>

            <div className='text-slate-600'>21K Booking <span> | </span> 5 <span className='inline-block'><FaRegStar />
            </span><span> | </span>2K Reviews</div>

          </div>

          <div className='text-slate-600'><span className='inline-block text-sm'> <FaPlusSquare /> </span> Working in sadhbhawna Hospital <span className='inline-block text-sm'><FaLocationDot /></span> At Gautam Budhh Nagar
          </div>

          <div className='flex flex-row gap-2 text-2xl'>
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
          </div>

        </div>

        <div >
          <Button text='FOLLOW' bg='#0476D0' textColor='white' hoverColor='blue'/>
        </div>

      </div>

    </div>
  )
}

export default Slide