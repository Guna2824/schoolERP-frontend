import React from 'react'

function Header() {
  return (
    <div className=' w-full bg-[#ab1010] text-white text-center font-bold text-2xl p-3 flex flex-row justify-center items-center '>
        <p className=' w-[50%] text-center'>XYZ School<span className='text-xl font-semibold'> - Chennai</span></p>
        <p className=' w-[50%] text-center'><button className=' px-3 py-1.5 text-sm border-2 focus:border-[#8b1010] focus:bg-white focus:text-[#8b1010] hover:bg-white hover:text-[#8b1010] bg-[#8b1010] text-white font-semibold rounded-md shadow-md transition-colors duration-300 ease-linear ' >LOGIN</button></p>
    </div>
  )
}

export default Header