import * as React from 'react';
import { AppTool } from '../Components/AppTool';
import Sidenav from '../Components/SidenavBar';
import SearchBar from '../Components/SearchBar';
import MusicBar from '../Components/MusicBar';


function Search() {
  return (
    <>

      <div className='sidenav'>
        <Sidenav />
      </div>

      <div className='apptool'>
        <AppTool />
      </div>

      <div className='main-content'>
          <SearchBar />
      </div>

      <div className='footer'>
        <MusicBar />
      </div>

    </>
  )
}

export default Search;