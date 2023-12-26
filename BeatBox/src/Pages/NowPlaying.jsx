import * as React from 'react';
import { AppTool } from '../Components/AppTool';
import MusicBar from '../Components/MusicBar';
import Play from '../Components/Play';
import Sidenav from '../Components/SidenavBar';



 function NowPlaying() {

  
  return (
    <>

      <div className='sidenav'>
        <Sidenav />  
      </div>

      <div className='apptool'>
        <AppTool />
      </div>

      <div className='main-content'>
        <Play /> 
        </div> 

      <div className='footer'>
        <MusicBar />
      </div>

    </>
  )
}

export default NowPlaying;