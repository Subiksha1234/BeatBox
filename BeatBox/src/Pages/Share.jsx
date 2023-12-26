import React from 'react';
import Invite from '../Components/Invite';
import { AppTool } from '../Components/AppTool';
import MusicBar from '../Components/MusicBar';
import Sidenav from '../Components/SidenavBar';

export default function Share() {
  return (
    <>

    <div className='sidenav'>
      <Sidenav />  
    </div>

    <div className='apptool'>
      <AppTool />
    </div>

    <div className='main-content'>
      <Invite />
      </div> 

    <div className='footer'>
      <MusicBar />
    </div>

  </>
  )
}
