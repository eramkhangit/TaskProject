import React from 'react'

function TimeCom({time}) {
  return (
    <div className='border-[1px] border-blue-800 rounded-xl text-center w-[55px] h-[50px] '>
        <p>{time}</p>
        <p>PM</p>
    </div>
  )
}

export default TimeCom