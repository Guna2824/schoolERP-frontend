import React, { useState } from 'react'

function Report({regist}) {

  const [clas, setClas] = useState('PreKG');


  const std = ['PreKG', 'LKG', 'UKG', 1, 2, 3, 4, 5];

  const students = [];

  for(let i = 0; i < regist.length; i++){
    for(let j = 0; j < regist[i].length; j++){
      students.push(regist[i][j])
    }
  }

  const filteredStudents = students.filter((item) => item.class.includes(clas));

  const dates = [...new Set(filteredStudents.map(item => item.date))];
  const names = [...new Set(filteredStudents.map(item => item.name))];

  const attendanceByName = {};
  filteredStudents.forEach(({ date, name, status }) => {
    if (!attendanceByName[name]) attendanceByName[name] = {};
    attendanceByName[name][date] = status;
  });

  // console.log(filteredStudents)

  return (
    <div className='m-5'>
      <h2 className="text-lg font-bold mb-4">Student Report</h2>

    {/* Class and Date Selection */}
      <div className="mb-4 flex flex-col justify-center items-start gap-2">

        <label className="">Class: 
          <select onChange={(e) => setClas(e.target.value)} value={clas} className="border px-2 py-1 rounded">
            {std.map((item, id) => (
              <option key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        
      </div>

      <div>
        <table className='border border-collapse text-center '>
          <thead>
          <tr className='bg-gray-300 '>
          <th className='p-1 border' >Name</th>
          {dates.map(date => (
            <th className='p-1 border' key={date}>{date}</th>
          ))}
        </tr>
          </thead>
          <tbody>
          {names.map(name => (
          <tr key={name}>
            <td className='p-1 border' >{name}</td>
            {dates.map(date => (
              <td className={`p-1 border ${attendanceByName[name][date] === 'Present' ? 'bg-green-300' : 'bg-red-300'} `} key={date}>{attendanceByName[name][date]}</td>
            ))}
          </tr>
        ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Report