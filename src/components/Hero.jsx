import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import sun  from '../assets/images/icon-sun.svg'
import Card from './Card'


function Hero() {
  const [isActive, setIsActive] = useState('All')

  return (  
    <div className='pt-24 '>
      <div>
        {/* header start here */}
        <header className='flex justify-between items-center'>
          {/* header left part */}
          <div>
            <h2 className='text-3xl font-semibold'>Extension List</h2>
          </div>
          {/* header right part */}
          <div className='flex justify-between gap-2 items-center'>
            <button className={`border-[0.15px] border-[hsl(0,0%,93%)] rounded-full py-2 px-4 cursor-pointer ${isActive==='All' ? "bg-[hsl(3,86%,64%)]" : "bg-[hsl(225,23%,24%)]"}`} onClick={() => setIsActive('All')}>
              All
            </button>
            <button className={`border-[0.15px] border-[hsl(0,0%,93%)] rounded-full py-2 px-4 cursor-pointer ${isActive==='Active' ? "bg-[hsl(3,86%,64%)]" : "bg-[hsl(225,23%,24%)]"}`} onClick={() => setIsActive('Active')}>
              Active
            </button> 
            <button className={`border-[0.15px] border-[hsl(0,0%,93%)] rounded-full py-2 px-4 cursor-pointer ${isActive==='Inactive' ? "bg-[hsl(3,86%,64%)]" : "bg-[hsl(225,23%,24%)]"}`} onClick={() => setIsActive('Inactive')}>
              Inactive
            </button>
          </div>
        </header>
        
        <main>
          <div className="card">
            <Card isActive={isActive} setIsActive={setIsActive} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero