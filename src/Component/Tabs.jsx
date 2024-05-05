import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Overview from './TabComponent/Overview'
import Services from './TabComponent/Services'
import Address from './TabComponent/Address'
import TabNav from './TabComponent/TabNav'
import Services2 from './TabComponent/Services2'
import Address2 from './TabComponent/Address2'

function Tabs() {
  return (
    <>
    < BrowserRouter >
     < TabNav />
     < Routes >
       < Route path='/' element={<Overview /> } />
       < Route path='/services' element={<Services /> } />
       < Route path='/address' element={<Address /> } />
       < Route path='/overview' element={<Overview /> } />
       < Route path='/services2' element={<Services2 /> } />
       < Route path='/address2' element={<Address2 /> } />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default Tabs