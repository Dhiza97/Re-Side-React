import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex justify-between items-center bg-primaryColor text-white px-5 py-2 sm:px-10'>
      <img className="w-20" src={assets.logo_white} alt="" />

      <button onClick={() => setToken('')} className='bg-white text-primaryColor px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar