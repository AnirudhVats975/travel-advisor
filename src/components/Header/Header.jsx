import { AppBlockingSharp } from '@mui/icons-material'
import { AppBar, fabClasses, InputBase, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import SearchIcon from "@mui/icons-material"
import { Box } from '@mui/system'
import {useStyles} from './Header';


const Header = () => {
 const classes = useStyles();
  return (
    <>
 <AppBar position="static">
      <Toolbar sx={classes.toolbar}>
        <Typography variant="h5" sx={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" sx={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div sx={classes.search}>
              <div sx={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header