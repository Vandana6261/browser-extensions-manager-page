import React from 'react'
import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import sun  from '../assets/images/icon-sun.svg'

function Navbar() {
  return (
    <div className=' max-w-[1200px] mx-auto  bg-[hsl(226,25%,17%)] '>
        <header className='flex justify-between py-2 px-4 bg-white rounded-md fixed top-0 left-1/2 -translate-x-1/2 min-w-[85%] '>
            <img className='' src={logo} alt="Logo" /> 
            <div className='bg-[hsl(225,23%,24%)] w-10 h-10 flex justify-center items-center rounded-md'>
              <img src={sun} alt="Sun" className='object-fit' />
            </div>
        </header>
    </div>
  )
}

export default Navbar