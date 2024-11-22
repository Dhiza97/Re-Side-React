import React from 'react'
import { assets } from '../assets/assets'

const Trustees = () => {
  return (
    <div className='my-16 text-center'>
      <img className='w-20' src={assets.ellipse_1} alt="" />
      <p>Trusted by 100+ Companies across the globe!</p>
      <div className='flex items-center justify-around gap-10 my-9 overflow-x-scroll'>
        <img className='w-24' src={assets.google} alt="" />
        <img className='w-24' src={assets.amazon} alt="" />
        <img className='w-24' src={assets.logitech} alt="" />
        <img className='w-24' src={assets.spotify} alt="" />
        <img className='w-24' src={assets.samsung} alt="" />
        <img className='w-24' src={assets.netflix} alt="" />
      </div>
    </div>
  )
}

export default Trustees