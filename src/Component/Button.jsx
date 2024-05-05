import React from 'react'

function Button({text , bg ,textColor ,hoverColor }) {
  return (
    <button style={{background:bg , color:textColor , hover:hoverColor}}  className='py-[2px] px-2 rounded-md text-[12px] md:text-[15px] border-[1px] border-blue-400 shadow-sm '>{text}</button>
  )
}

export default Button