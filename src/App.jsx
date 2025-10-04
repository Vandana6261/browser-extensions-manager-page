import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div className='w-screen min-h-screen bg-[hsl(227,75%,14%)] text-white'>
      <div className='max-w-[1200px] mx-auto px-8'>
        <Navbar />
        <Hero />
      </div>
    </div>
    </>
  )
}

export default App
