import React, { useState } from 'react'
import school1 from './assets/school1.jpg'
import school2 from './assets/school2.jpg'
import school3 from './assets/school3.jpg'
import school4 from './assets/school4.jpg'
import school5 from './assets/school5.png'
import school6 from './assets/school6.jpeg'

function Slider() {

    const [photo, setPhoto] = useState(0)
    

    const schoolImg = [school1, school2, school3, school4, school5, school6]

    const next =()=>{
        setPhoto((prevPhoto) => (prevPhoto >= schoolImg.length - 1 ? 0 : prevPhoto + 1));
    }

    const prev =()=>{
        setPhoto((prevPhoto) => (prevPhoto <= 0 ? schoolImg.length - 1 : prevPhoto - 1));
    }

    const back = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#8b1010]">
    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>  
  
  const right = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#8b1010]">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

  
    return (
    <div className=' m-5 h-[70vh] '>

        <img className=' h-full w-full rounded-xl object-fill' src={schoolImg[photo]} alt='pic'/>
        <button className=' bg-white rounded-full p-0.5 relative bottom-[50%] left-1 z-10' onClick={prev}>{back}</button>
        <button className=' bg-white rounded-full p-0.5 relative left-[89%] lg:left-[95%] bottom-[50%] z-10' onClick={next}>{right}</button>
        
 
    </div>
  )
}

export default Slider