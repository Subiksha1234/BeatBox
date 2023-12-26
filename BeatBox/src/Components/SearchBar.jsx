import React, { useState } from 'react';
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import records from '../Data/MusicDB.json';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CancelIcon from "@material-ui/icons/Cancel";
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    p: {
        color: 'white',
        fontSize: '16px'
    }
})

let SearchBar = () => {

    const classes = useStyles();

    const [searchInput, setSearchInput] = useState("");

    let handleChange = (search) => {
        search.preventDefault();
        let lowerCase = search.target.value.toLowerCase();
        setSearchInput(lowerCase);
    };

    const fetchData = records.filter((irukka) => {
        if (searchInput === "") {
            return irukka;
        } else {
            return irukka.name.toLowerCase().includes(searchInput);
        }
    });

    return (
        <div>

            <form className='search-container'>
                <input
                    onChange={handleChange}
                    placeholder={"Search a track..."}
                    type="text"
                />

            </form>
            <br /><br /><br />

            <div className='main-inner-container'>


                <div className='row'>
                    {
                        fetchData && fetchData.map(e1 => {

                            return (
                                <div
                                    className="col-md-3"
                                    key={e1.id}
                                    style={{ color: "white" }}
                                >
                                    <Card
                                        sx={{
                                            width: 240,
                                            height: 100,
                                            bgcolor: '#4B4848',
                                            display: 'flex'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image={require("../Pictures/" + e1.img)}

                                            />
                                        </Box>
                                        <Box >
                                            <CardContent sx={{ display: 'flex',flexDirection: 'column' }}>
                                                <Typography className={classes.p}>
                                                    {e1.name}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Card>

                                </div>

                            );
                        })
                    }

                </div>
            </div>

            {
                <SearchSharpIcon style={{ color: "grey" }} className="search-icon" fontSize="small" />
            }

            {/* {
                <CancelIcon style={{ color: "grey" }} className="cancel-icon" fontSize="small" />
            } */}

        </div>
    )
};

export default SearchBar;