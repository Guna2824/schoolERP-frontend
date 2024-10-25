import React, { useState } from 'react';

function Register({ addmin, click1 }) {
  const [clas, setClas] = useState('PreKG'); // Default class
  const [attendance, setAttendance] = useState({}); // Track each student's attendance
  const [date, setDate] = useState(''); // Track selected date
  const [err, setErr] = useState({});

  const std = ['PreKG', 'LKG', 'UKG', 1, 2, 3, 4, 5]; // Available classes

  // Filter students based on the selected class
  const filteredStudents = addmin.filter((item) => item.standard.includes(clas));

  // Handle attendance selection for each student
  const handleAttendanceChange = (index, value) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [index]: value,
    }));
    setErr({})
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!date){
      setErr({date:'select date'})
    }else if(Object.keys(attendance).length < filteredStudents.length ){
      setErr({status:'select status'})
    }else {
      alert('regist submit')
      // Collect form data for each student
      const formData = filteredStudents.map((student,index) => ({
        date: date,
        class: clas,
        name: student.studentName,
        status: attendance[index], // Default to 'Absent' if not selected
      }));

      click1(formData); // Log or handle formData as needed (e.g., submit to a backend)
      
    }
  };

  return (
    <div className="m-5 ">
      <h2 className="text-lg font-bold mb-4">Student Register</h2>

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
        
        <label className="">Date: 
          <input
          type="date"
          value={date}
          onChange={(e) => {setDate(e.target.value);setErr({})}}
          className="border px-2 py-1 rounded"
          required
        />
        </label>
        {err.date ? <span className='text-[red]'>{err.date}</span> : null}
        
      </div>

      {/* Table displaying student info */}
      <form onSubmit={handleSubmit}>
        <table className="  border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sl. No.</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{student.studentName}</td>
                <td className="border px-4 py-2">{student.standard}</td>
                <td className="border px-4 py-2">
                  <select
                    value={attendance[index]}
                    onChange={(e) => handleAttendanceChange(index, e.target.value)}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                  {err.status ? <span className='text-[red]'>{err.status}</span> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Submit Button */}
        <div className="mt-5">
          <button
            type="submit"
            className=" w-[50%] mx-[25%] lg:w-[25%] lg:mx-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
