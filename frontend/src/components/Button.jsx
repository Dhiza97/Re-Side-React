import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='py-2 px-6 border border-primaryColor text-primaryColor rounded-full hover:bg-primaryColor hover:text-white transition-all ease-in-out duration-300'>
      {text}
    </button>
  )
}

export default Button