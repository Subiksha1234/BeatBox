import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles, Typography } from '@material-ui/core';
import Sidenav from '../Components/SidenavBar';
import { AppTool } from '../Components/AppTool';
import { CardContent } from '@mui/material';
import Title from '../Data/Title.json';
import Records from '../Data/MusicDB.json';
import MusicBar from '../Components/MusicBar';

const useStyles = makeStyles({
    h5: {
        color: 'white',
        textAlign: 'start'
    },
    p: {
        color: 'white',
        fontSize: '16px'
    }
})


export function Home() {

    const classes = useStyles();
    return (

        <>
            <div className='sidenav'>
                <Sidenav />
            </div>

            <div className='apptool'>
                <AppTool />
            </div>

            <div className='main-content'>
                <div className="main-inner-container">
                    {
                        Title && Title.map(e1 => {
                            return (

                                <>

                                    <div className='row' >
                                        <Typography variant='h5' className={classes.h5}>{e1.title}</Typography>
                                    </div>

                                    <div className='row'>
                                        {
                                            Records && Records.filter(e2 =>
                                                e1.title === e2.title).map(e2 => {
                                                    return (
                                                        <>
                                                            

                                                            <div className='col-md-3' key={e2.id}>
                                                                <div className='Card'>
                                                                    

                                                                <Card
                                                                    sx={{backgroundColor:'#1D1A1A' ,maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="180"
                                                                        image={require("../Pictures/" + e2.img)}
                                                                        sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#1D1A1A' }}
                                                                        />
                                                                    <CardContent sx={{ backgroundColor: '#1D1A1A', padding: '8px' }}>
                                                                        <Typography className={classes.p}>{e2.name}</Typography>
                                                                    </CardContent>
                                                                </Card>
                                                                        </div>

                                                            </div>

                                                            


                                                        </>

                                                    )
                                                })
                                        }

                                    </div>




                                </>

                            )
                        })
                    }

                </div>
            </div>

            <div className='footer'>
                <MusicBar />
            </div>
        </>
    )
}