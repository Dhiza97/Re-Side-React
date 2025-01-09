import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo_white} alt="" />

      <button>Logout</button>
    </div>
  )
}

export default Navbar