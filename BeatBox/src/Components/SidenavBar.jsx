
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

const drawerWidth = '15%';

export default function Sidenav() {

  const history = useHistory();

  const menuItems = [
    {
      text: "HOME",
      icon: <HomeRoundedIcon />,
      path: "/home",
    },
    {
      text: "SEARCH",
      icon: <SearchRoundedIcon />,
      path: "/search",
    },
  ];
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            height: '85%',
            bgcolor: '#282828',
            color: '#FFFFFF',
          },
        }}
        variant="permanent"
        anchor="left"
      >
            <img src='favicon.ico' className='logo' />
            <Typography variant='h6' sx={{position:'absolute',top:'8%',left:'42%'}}>Beat Box</Typography>
        
        <List className='list'>
          <hr className='line' />

          {
            menuItems.map(e => (
              <ListItem button
                onClick={() => {
                  history.push(e.path);
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>
                  {e.icon}
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}>
                  {e.text}
                </ListItemText>

              </ListItem>
            ))
          }

          <hr className='line' />
        </List>


      </Drawer>
    </>
  );
}

