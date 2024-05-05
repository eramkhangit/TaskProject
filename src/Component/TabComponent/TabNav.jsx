import React from 'react'
import { NavLink } from 'react-router-dom'

function TabNav() {
  return (

    <header className=' w-[90%] '>

      <nav>
        <ul className='cursor-pointer flex flex-wrap flex-row gap-[6px] md:gap-8 text-[14px] mx-4 py-2 border-b-[1px] border-slate-300  '>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'} py-2 px-[2px]`} to="/"> OVERVIEW</NavLink>
          </li>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'} py-2 px-[2px]`} to="/services">SERVICES</NavLink>
          </li>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'} py-2 px-[2px]`} to="/address">ADDRESS</NavLink>
          </li>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'}py-2 px-[2px]`} to="/overview">OVERVIEW</NavLink>
          </li>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'}py-2 px-[2px] `} to="/services2">SERVICES</NavLink>
          </li>

          <li className='hover:bg-blue-400'>
            <NavLink className={({ isActive }) => `${isActive ? "text-blue-500" : 'text-black'}py-2 px-[2px] `} to="/address2">ADDRESS</NavLink>
          </li>

        </ul>
      </nav>

    </header>

  )
}

export default TabNav