import React, { useState } from 'react'
import Addmision from './Addmision'
import Register from './Register'
import Report from './Report'
import Accounts from './Accounts'
import Transport from './Transport'
import StaffReport from './StaffReport'
import Marks from './Marks'
import StudentProfile from './StudentProfile'
import StaffBio from './StaffBio'
import StaffRegister from './StaffRegister'



function Body({app}) {

  const [addmin, setAddmin] = useState([]);
  const [regist, setRegist] = useState([]);

  const click =(prop)=>{
    setAddmin((prevAddmin) => [...prevAddmin, prop]);
  }

  const click1 =(prop)=>{
    setRegist((prevRegist)=> [...prevRegist, prop])
  }

  const obj = {
    ADDMISION : Addmision,
    REGISTER : Register,
    REPORT : Report,
    ACCOUNTS : Accounts,
    TRANSPORT : Transport,
    STAFFREPORT : StaffReport,
    MARKS : Marks,
    PROFILE : StudentProfile,
    'STAFF-BIO' : StaffBio,
    'STAFF-REGISTER' : StaffRegister,
  }

  const Components = obj[app]
  // console.log(regist)
  return (
    <div className='bg-gray-100 w-full'>
        <Components click={click} addmin={addmin} click1={click1} regist={regist} />
        
    </div>
  )
}

export default Body