import React, { useState } from 'react'
import SideBar from './SideBar'
import Body from './Body'

function Controler() {

  const [app, setApp] = useState('ADDMISION')

  const click =(prop)=>{
    setApp(prop)
  }

  return (
    <div className='flex'>
        <SideBar click={click} />
        <Body app={app} />
    </div>
  )
}

export default Controler