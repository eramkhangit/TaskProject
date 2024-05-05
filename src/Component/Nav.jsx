import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';


function Nav() {
    return (
        <div className='px-4 py-3 mx-2  border-b-[1px] border-slate-300 flex flex-row gap-6 items-center justify-between '>

            <div className='font-semibold text-xl'>
                <p >Logo</p>
            </div>

            <div className=' flex flex-row gap-4 md:gap-6 '>

                <div className=' flex flex-row items-center gap-[2px] md:gap-2'> 
                    <div>
                        <p>AreSuno for Business</p>
                    </div>
                    <div><IoIosArrowDown /></div>
                </div>

                <div className='flex flex-row gap-2'>
                    <div>
                        <Button text='SIGN IN' bg='#0476D0' textColor='white' hoverColor='blue' />
                    </div>
                    <div>
                        <Button text='SIGN UP' bg='white' textColor='black' hoverColor='gray' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav