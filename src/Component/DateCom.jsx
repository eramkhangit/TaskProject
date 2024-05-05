import React from 'react'

function DateCom({ day , date}) {

  return (
    <div className='border-[1px] border-blue-700 rounded-2xl p-[2px] md:p-2 flex flex-col text-center justify-between h-[80px] w-12'>
        <p>{day}</p>
        <p>{date}</p>
    </div>
  )
}

export default DateCom