import React from 'react'
import Button from './Button'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import DateCom from './DateCom';
import TimeCom from './TimeCom';
import Detail from './Detail';


function Body() {
  return (
    <div className=' flex flex-col md:flex-row  justify-between pt-4  rounded-md w-[90%] m-auto  mt-4'>

      {/* _________ Aside Container ____________ */}
      <div className=' flex flex-col '>

        <div className='border-[1px] rounded-md shadow-sm flex flex-col pt-8  items-center gap-4'>

          {/* ________________ Book Appointment__________ */}
          <div className='flex gap-4 flex-col items-center  w-[90%]'>

            <p className='font-bold text-2xl'>Book Appointment</p>

            <div className='flex flex-col md:flex-row items-center gap-1'>
              <Button text='BOOK DIGITAL' bg='#0476D0' textColor='white' />
              <Button text='BOOK DIGITAL' bg='#0476D0' textColor='white' />
            </div>

            <div>

              <p className='mb-4 text-center text-slate-600 text-[17px] '>Choose Date</p>

              <div className='flex flex-row items-center'>

                <MdKeyboardArrowLeft className='text-[1.2rem] md:text-5xl' />

                <div className='flex flex-row '>
                  < DateCom day='Mon' date='1' />
                  < DateCom day='Tue' date='2' />
                  < DateCom day='Wed' date='3' />
                  < DateCom day='Thu' date='4' />
                  < DateCom day='Fri' date='5' />
                  < DateCom day='Sat' date='6' />
                </div>

                <MdKeyboardArrowRight className='text-[1.2rem] md:text-5xl' />
              </div>

            </div>

          </div>
 
            {/* ____________ Slots Available ________ */}
          <div className='flex flex-col gap-4  w-[90%] '>

            <div className='flex flex-col gap-4 items-center '>

              <p className=' text-slate-600 text-[17px]'>Slots Available</p>

              <div className=' flex flex-row items-center justify-start'>

                <MdKeyboardArrowLeft className='text-[1.2rem] md:text-5xl' />

                <div className='flex flex-row gap-2 md:gap-4'>
                  <TimeCom time='9' />
                  <TimeCom time='9' />
                  <TimeCom time='9' />
                  <TimeCom time='9' />
                </div>

                <MdKeyboardArrowRight className='text-[1.2rem] md:text-5xl' />

              </div>

            </div>

            <div className=' flex flex-col gap-2 pb-4'>

              <input type="text" placeholder='Name' className='border-[1px] outline-0 border-slate-300  py-2 px-3 rounded-md'/>
              <input type="text" placeholder='Email' className='border-[1px] outline-0 border-slate-300 px-3 py-2 rounded-md' />
              <textarea name="" rows={1} placeholder='Message' className='border-[1px] border-slate-300 px-3 py-4 rounded-md outline-0'></textarea>
              <button className='px-6 py-2 rounded-lg shadow-md bg-[#0476D0] hover:bg-blue-700 hover:shadow-lg text-white '>SEND</button>

            </div>

          </div>

        </div>

        {/* ____________ Rate Now __________ */}

        <div className=' flex flex-col gap-3 w-full m-auto text-center pt-10 shadow-md rounded-md px-4 pb-4 mt-4 '>
          <p className='font-bold text-lg'>Rate Now</p>
          <p className='text-slate-600'>Rate your experiance</p>
          
          {/* ____________ Starts ____________ */}
          <div className='pb-3 flex flex-row gap-2 justify-center'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          </div>
          <div className='border-b-[0.2px] border-slate-200'></div>
          <input type="text" placeholder='Message' className='border-[1px] outline-0 border-slate-300  py-2 px-3 rounded-md' />
          <button className='px-6 py-2 rounded-lg shadow-lg bg-[#0476D0] hover:bg-blue-700 hover:shadow-xl text-white '>SEND</button>
        </div>

      </div>

      {/* ___________ Detail Container ____________ */}
      <div className='shadow-md rounded-md mt-6 w-full md:w-[60%]'>

       < Detail />
     </div>

    </div>
  )
}

export default Body