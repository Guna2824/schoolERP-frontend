import React, { useState } from 'react'

function StudentProfile({addmin}) {

  const [clas, setClas] = useState('PreKG');
  const std = ['PreKG', 'LKG', 'UKG', 1, 2, 3, 4, 5];


  const filteredStudents = addmin.filter((item) => item.standard.includes(clas));
  const boys = filteredStudents.filter((item)=>item.gender === 'male')
  const girls = filteredStudents.filter((item)=>item.gender === 'female')

  return (
    <div>
      <h2 className="text-lg font-semibold m-4">Student Profile</h2>
      <div className='flex flex-col  justify-center items-start'>
        <label className="m-2">Class: 
          <select onChange={(e) => setClas(e.target.value)} value={clas} className="border-b-2  px-2 py-1 rounded font-semibold">
            {std.map((item, id) => (
              <option key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className='m-2'>Boys: <span className='text-lg font-semibold'>{boys.length}</span></label>
        <label className='m-2'>Girls: <span className='text-lg font-semibold'>{girls.length}</span></label>
        <label className='m-2'>Total Student: <span className='text-lg font-semibold'>{filteredStudents.length}</span></label>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3'>
        {filteredStudents.map((item, id)=><div key={id} className='border m-2 p-2 text-[12px] bg-white'>
          <p>Student Name: <span className='font-semibold text-[14px]'>{item.studentName}</span></p>
          <p>Parent Name: <span className='font-semibold text-[14px]'>{item.parentName}</span></p>
          <p>DOB: <span className='font-semibold text-[14px]'>{item.dob}</span></p>
          <p>Gender: <span className='font-semibold text-[14px]'>{item.gender}</span></p>
          <p>Phone: <span className='font-semibold text-[14px]'>{item.phone}</span></p>
          <p>Address: <span className='font-semibold text-[14px]'>{item.address}</span></p>
        </div>)}
      </div>
      
    </div>
  )
}

export default StudentProfile