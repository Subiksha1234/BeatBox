import * as React from 'react';
import Account from '../Components/account';
import { AppTool } from '../Components/AppTool';
import MusicBar from '../Components/MusicBar';
import Sidenav from '../Components/SidenavBar';


 function Profile() {
  return (
    <>

      <div className='sidenav'>
        <Sidenav />  
      </div>

      <div className='apptool'>
        <AppTool />
      </div>

      <div className='main-content'>
        <Account />
        </div> 

      <div className='footer'>
        <MusicBar />
      </div>

    </>
  )
}

export default Profile;