import React from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='border-2 border-red-500'>
        <p ><span className='inline-block'><FaPlusSquare /></span> Services</p>
        <div>
            <p>Chronic Dease Management</p>
             {/* < Link to={1} ></Link>  */}
        </div>
    </div>
  )
}

export default Service