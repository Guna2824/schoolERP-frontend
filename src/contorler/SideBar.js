import React from 'react'

function SideBar({click}) {

  const students = ['ADDMISION', 'REGISTER', 'MARKS', 'REPORT', 'PROFILE'];
  const staffs = ['ACCOUNTS', 'STAFF-REGISTER', 'TRANSPORT', 'STAFFREPORT', 'STAFF-BIO'];

  return (
    <div className='w-[200px] lg:w-[300px] min-h-screen border bg-[#2563eb] font-semibold text-[14px] flex flex-col text-center text-white '>
        <h1 className=' p-3 text-xl font-semibold   ' >DASHBOARD</h1>
        <h1 className=' p-3  ' >STUDENT MANAGEMENT</h1>
        
        {students.map((item, id)=><button key={id} className={' block hover:bg-white hover:text-black p-2 m-1 focus:bg-[#2e2ed4] transition-colors duration-300 ease-linear'} onClick={()=>click(item)}>{item}</button>)}
        
        <h1 className=' p-3 ' >STAFF MANAGEMENT</h1>
        
        {staffs.map((item, id)=><button key={id} className={' block hover:bg-white hover:text-black p-2 m-1 focus:bg-[#2e2ed4] transition-colors duration-300 ease-linear'} onClick={()=>click(item)}>{item}</button>)}

    </div>
  )
}

export default SideBar